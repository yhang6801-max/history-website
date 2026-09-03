#!/usr/bin/env node

import { constants as fsConstants } from 'node:fs'
import { access, lstat, realpath, stat, writeFile } from 'node:fs/promises'
import {
  dirname,
  extname,
  isAbsolute,
  join,
  relative,
  resolve,
  sep,
} from 'node:path'
import { fileURLToPath } from 'node:url'
import sharp from 'sharp'

const OUTPUT_WIDTH = 900
const OUTPUT_HEIGHT = 1200
const MAX_PERSON_ID_LENGTH = 80
const MAX_INPUT_PIXELS = 100_000_000
const PERSON_ID_PATTERN = /^[a-z0-9]+(?:-[a-z0-9]+)*$/
const WINDOWS_RESERVED_NAMES = /^(?:con|prn|aux|nul|com[1-9]|lpt[1-9])$/i
const INPUT_FORMATS = new Map([
  ['.jpg', 'jpeg'],
  ['.jpeg', 'jpeg'],
  ['.png', 'png'],
  ['.webp', 'webp'],
])
const POSITION_VALUES = ['attention', 'center', 'west', 'northwest']
const CROP_POSITIONS = new Map([
  ['attention', sharp.strategy.attention],
  ['center', sharp.gravity.center],
  ['west', sharp.gravity.west],
  ['northwest', sharp.gravity.northwest],
])
const POSITION_VALUES_MESSAGE = POSITION_VALUES.join(', ')

const scriptDirectory = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(scriptDirectory, '..')
const peopleDirectory = join(projectRoot, 'src', 'assets', 'people')

const usage = `Usage:
  npm run prepare-person-image -- <person-id> <input-image> [--force] [--position <value>]

Example:
  npm run prepare-person-image -- napoleon-bonaparte "./input/napoleon.jpg"

Options:
  --force             Replace an existing output file explicitly.
  --position <value>  Crop position: ${POSITION_VALUES_MESSAGE}. Default: attention.
  --help              Show this help message.`

class CliError extends Error {
  constructor(message, showUsage = false) {
    super(message)
    this.name = 'CliError'
    this.showUsage = showUsage
  }
}

function parseArguments(arguments_) {
  let force = false
  let help = false
  let position = 'attention'
  let positionProvided = false
  const positionalArguments = []

  for (let index = 0; index < arguments_.length; index += 1) {
    const argument = arguments_[index]

    if (argument === '--force') {
      force = true
    } else if (argument === '--position') {
      if (positionProvided) {
        throw new CliError(
          `The --position option may only be provided once. Allowed values: ${POSITION_VALUES_MESSAGE}.`,
          true,
        )
      }

      const positionValue = arguments_[index + 1]

      if (positionValue === undefined || positionValue.startsWith('-')) {
        throw new CliError(
          `The --position option requires a value. Allowed values: ${POSITION_VALUES_MESSAGE}.`,
          true,
        )
      }

      if (!CROP_POSITIONS.has(positionValue)) {
        throw new CliError(
          `Invalid --position value: ${positionValue}. Allowed values: ${POSITION_VALUES_MESSAGE}.`,
          true,
        )
      }

      position = positionValue
      positionProvided = true
      index += 1
    } else if (argument === '--help' || argument === '-h') {
      help = true
    } else if (argument.startsWith('--')) {
      throw new CliError(`Unknown option: ${argument}`, true)
    } else {
      positionalArguments.push(argument)
    }
  }

  if (help) {
    return {
      help,
      force,
      position,
      personId: undefined,
      inputArgument: undefined,
    }
  }

  if (positionalArguments.length !== 2) {
    throw new CliError('Expected a person id and an input image path.', true)
  }

  return {
    help,
    force,
    position,
    personId: positionalArguments[0],
    inputArgument: positionalArguments[1],
  }
}

function validatePersonId(personId) {
  if (personId.length > MAX_PERSON_ID_LENGTH) {
    throw new CliError(
      `Person id is too long. Use at most ${MAX_PERSON_ID_LENGTH} characters.`,
    )
  }

  if (!PERSON_ID_PATTERN.test(personId)) {
    throw new CliError(
      'Invalid person id. Use lowercase letters, numbers, and single hyphens only (for example, "napoleon-bonaparte").',
    )
  }

  if (WINDOWS_RESERVED_NAMES.test(personId)) {
    throw new CliError(`Invalid person id: "${personId}" is a reserved filename.`)
  }
}

function isErrorWithCode(error, code) {
  return (
    typeof error === 'object' &&
    error !== null &&
    'code' in error &&
    error.code === code
  )
}

function pathsAreEqual(firstPath, secondPath) {
  if (process.platform === 'win32') {
    return firstPath.toLowerCase() === secondPath.toLowerCase()
  }

  return firstPath === secondPath
}

function assertOutputPathIsSafe(outputPath) {
  const relativePath = relative(peopleDirectory, outputPath)
  const leavesPeopleDirectory =
    relativePath === '..' ||
    relativePath.startsWith(`..${sep}`) ||
    isAbsolute(relativePath)

  if (
    leavesPeopleDirectory ||
    dirname(outputPath) !== peopleDirectory ||
    extname(outputPath).toLowerCase() !== '.webp'
  ) {
    throw new CliError('Refusing to write outside src/assets/people.')
  }
}

async function inspectExistingOutput(outputPath) {
  try {
    const outputStats = await lstat(outputPath)

    if (outputStats.isSymbolicLink()) {
      throw new CliError('Refusing to overwrite a symbolic link at the output path.')
    }

    if (!outputStats.isFile()) {
      throw new CliError('The output path exists but is not a regular file.')
    }

    return true
  } catch (error) {
    if (isErrorWithCode(error, 'ENOENT')) {
      return false
    }

    throw error
  }
}

async function validatePeopleDirectory() {
  let directoryStats

  try {
    directoryStats = await lstat(peopleDirectory)
  } catch (error) {
    if (isErrorWithCode(error, 'ENOENT')) {
      throw new CliError(`Output directory does not exist: ${peopleDirectory}`)
    }

    throw error
  }

  if (directoryStats.isSymbolicLink() || !directoryStats.isDirectory()) {
    throw new CliError(
      `Output directory must be a real directory, not a link: ${peopleDirectory}`,
    )
  }
}

async function validateInput(inputArgument) {
  const inputPath = resolve(process.cwd(), inputArgument)
  const extension = extname(inputPath).toLowerCase()
  const expectedFormat = INPUT_FORMATS.get(extension)

  if (!expectedFormat) {
    throw new CliError(
      'Unsupported input extension. Use a JPG, JPEG, PNG, or WebP file.',
    )
  }

  let inputStats

  try {
    inputStats = await stat(inputPath)
    await access(inputPath, fsConstants.R_OK)
  } catch (error) {
    if (isErrorWithCode(error, 'ENOENT')) {
      throw new CliError(`Input file does not exist: ${inputPath}`)
    }

    if (isErrorWithCode(error, 'EACCES')) {
      throw new CliError(`Input file is not readable: ${inputPath}`)
    }

    throw error
  }

  if (!inputStats.isFile()) {
    throw new CliError(`Input path is not a regular file: ${inputPath}`)
  }

  const canonicalInputPath = await realpath(inputPath)
  let metadata

  try {
    metadata = await sharp(canonicalInputPath, {
      failOn: 'error',
      limitInputPixels: MAX_INPUT_PIXELS,
    }).metadata()
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error)
    throw new CliError(`Unable to read the input image: ${reason}`)
  }

  if (metadata.format !== expectedFormat) {
    throw new CliError(
      `Input extension ${extension} does not match the detected ${metadata.format ?? 'unknown'} format.`,
    )
  }

  if (!metadata.width || !metadata.height) {
    throw new CliError('Unable to determine the input image dimensions.')
  }

  if ((metadata.pages ?? 1) > 1) {
    throw new CliError('Animated or multi-page images are not supported.')
  }

  return { canonicalInputPath, metadata }
}

function getOrientedDimensions(metadata) {
  const swapsDimensions = [5, 6, 7, 8].includes(metadata.orientation)

  return swapsDimensions
    ? { width: metadata.height, height: metadata.width }
    : { width: metadata.width, height: metadata.height }
}

function formatBytes(bytes) {
  if (bytes < 1024) {
    return `${bytes} B`
  }

  if (bytes < 1024 * 1024) {
    return `${(bytes / 1024).toFixed(1)} KiB`
  }

  return `${(bytes / (1024 * 1024)).toFixed(2)} MiB`
}

async function writeOutput(outputPath, data, force) {
  try {
    await writeFile(outputPath, data, { flag: force ? 'w' : 'wx' })
  } catch (error) {
    if (isErrorWithCode(error, 'EEXIST')) {
      throw new CliError(
        `Output file was created by another process and was not overwritten: ${outputPath}`,
      )
    }

    throw error
  }
}

async function main() {
  const { help, force, position, personId, inputArgument } = parseArguments(
    process.argv.slice(2),
  )

  if (help) {
    console.log(usage)
    return
  }

  validatePersonId(personId)
  await validatePeopleDirectory()

  const outputPath = resolve(peopleDirectory, `${personId}.webp`)
  assertOutputPathIsSafe(outputPath)

  const { canonicalInputPath, metadata } = await validateInput(inputArgument)
  const outputExists = await inspectExistingOutput(outputPath)

  if (outputExists) {
    const canonicalOutputPath = await realpath(outputPath)

    if (pathsAreEqual(canonicalInputPath, canonicalOutputPath)) {
      throw new CliError('Input and output paths must be different files.')
    }

    if (!force) {
      throw new CliError(
        `Output already exists and was not overwritten: ${outputPath}\n` +
          'Re-run with --force to replace it explicitly.',
      )
    }
  } else if (pathsAreEqual(canonicalInputPath, outputPath)) {
    throw new CliError('Input and output paths must be different files.')
  }

  const orientedDimensions = getOrientedDimensions(metadata)
  const scale = Math.max(
    OUTPUT_WIDTH / orientedDimensions.width,
    OUTPUT_HEIGHT / orientedDimensions.height,
  )

  if (scale > 1) {
    console.warn(
      `Warning: the ${orientedDimensions.width}x${orientedDimensions.height} input will be enlarged to ${OUTPUT_WIDTH}x${OUTPUT_HEIGHT}.`,
    )
  }

  let result

  try {
    result = await sharp(canonicalInputPath, {
      failOn: 'error',
      limitInputPixels: MAX_INPUT_PIXELS,
    })
      .autoOrient()
      .resize({
        width: OUTPUT_WIDTH,
        height: OUTPUT_HEIGHT,
        fit: 'cover',
        position: CROP_POSITIONS.get(position),
      })
      .webp({
        quality: 82,
        effort: 4,
        smartSubsample: true,
        preset: 'picture',
      })
      .toBuffer({ resolveWithObject: true })
  } catch (error) {
    const reason = error instanceof Error ? error.message : String(error)
    throw new CliError(`Image processing failed: ${reason}`)
  }

  await writeOutput(outputPath, result.data, force)

  console.log('Person image prepared successfully.')
  console.log(`  Person id: ${personId}`)
  console.log(`  Input: ${canonicalInputPath}`)
  console.log(`  Output: ${outputPath}`)
  console.log(`  Format: ${result.info.format}`)
  console.log(`  Dimensions: ${result.info.width}x${result.info.height}`)
  console.log(`  Size: ${formatBytes(result.info.size)}`)
  console.log(`  Replaced existing file: ${outputExists ? 'yes' : 'no'}`)
}

try {
  await main()
} catch (error) {
  if (error instanceof CliError) {
    console.error(`Error: ${error.message}`)

    if (error.showUsage) {
      console.error(`\n${usage}`)
    }
  } else {
    const reason = error instanceof Error ? error.message : String(error)
    console.error(`Error: ${reason}`)
  }

  process.exitCode = 1
}
