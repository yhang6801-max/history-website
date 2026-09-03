import assert from 'node:assert/strict'
import { spawn } from 'node:child_process'
import { randomUUID } from 'node:crypto'
import {
  chmod,
  lstat,
  mkdir,
  mkdtemp,
  readFile,
  readdir,
  rm,
  stat,
  symlink,
  unlink,
  writeFile,
} from 'node:fs/promises'
import { tmpdir } from 'node:os'
import { dirname, join, resolve } from 'node:path'
import { performance } from 'node:perf_hooks'
import { fileURLToPath } from 'node:url'
import { deflateSync } from 'node:zlib'
import test from 'node:test'
import sharp from 'sharp'

const testDirectory = dirname(fileURLToPath(import.meta.url))
const projectRoot = resolve(testDirectory, '..')
const cliPath = join(projectRoot, 'scripts', 'prepare-person-image.mjs')
const peopleDirectory = join(projectRoot, 'src', 'assets', 'people')

async function createTemporaryDirectory(testContext) {
  const directory = await mkdtemp(join(tmpdir(), 'prepare-person-image-'))

  testContext.after(async () => {
    await rm(directory, {
      force: true,
      maxRetries: 3,
      recursive: true,
      retryDelay: 100,
    })
  })

  return directory
}

function runCli(arguments_, workingDirectory, { timeoutMs } = {}) {
  return new Promise((resolvePromise, rejectPromise) => {
    const child = spawn(process.execPath, [cliPath, ...arguments_], {
      cwd: workingDirectory,
      shell: false,
      stdio: ['ignore', 'pipe', 'pipe'],
      windowsHide: true,
    })
    let stdout = ''
    let stderr = ''
    let timedOut = false
    const timeout =
      timeoutMs === undefined
        ? undefined
        : setTimeout(() => {
            timedOut = true
            child.kill('SIGKILL')
          }, timeoutMs)

    timeout?.unref()

    child.stdout.setEncoding('utf8')
    child.stderr.setEncoding('utf8')
    child.stdout.on('data', (chunk) => {
      stdout += chunk
    })
    child.stderr.on('data', (chunk) => {
      stderr += chunk
    })
    child.once('error', (error) => {
      clearTimeout(timeout)
      rejectPromise(error)
    })
    child.once('close', (code, signal) => {
      clearTimeout(timeout)
      resolvePromise({ code, signal, stderr, stdout, timedOut })
    })
  })
}

function createTestImage({ width = 300, height = 400 } = {}) {
  return sharp({
    create: {
      width,
      height,
      channels: 4,
      background: { r: 80, g: 110, b: 150, alpha: 1 },
    },
  })
}

function calculateCrc32(data) {
  let crc = 0xffffffff

  for (const byte of data) {
    crc ^= byte

    for (let bit = 0; bit < 8; bit += 1) {
      crc = (crc >>> 1) ^ (0xedb88320 & -(crc & 1))
    }
  }

  return (crc ^ 0xffffffff) >>> 0
}

function createPngChunk(type, data) {
  const typeData = Buffer.from(type, 'ascii')
  const length = Buffer.alloc(4)
  const checksum = Buffer.alloc(4)

  length.writeUInt32BE(data.length)
  checksum.writeUInt32BE(calculateCrc32(Buffer.concat([typeData, data])))

  return Buffer.concat([length, typeData, data, checksum])
}

function createOneBitGrayscalePng(width, height) {
  const signature = Buffer.from([137, 80, 78, 71, 13, 10, 26, 10])
  const header = Buffer.alloc(13)
  const scanlineLength = Math.ceil(width / 8) + 1
  const scanlines = Buffer.alloc(scanlineLength * height)

  header.writeUInt32BE(width, 0)
  header.writeUInt32BE(height, 4)
  header[8] = 1

  const data = Buffer.concat([
    signature,
    createPngChunk('IHDR', header),
    createPngChunk('IDAT', deflateSync(scanlines, { level: 9 })),
    createPngChunk('IEND', Buffer.alloc(0)),
  ])

  return { data, scanlineBytes: scanlines.length }
}

async function createValidPng(temporaryDirectory) {
  const inputPath = join(temporaryDirectory, 'valid input.png')

  await createTestImage().png().toFile(inputPath)

  return inputPath
}

async function assertPathDoesNotExist(path) {
  await assert.rejects(
    stat(path),
    (error) => error?.code === 'ENOENT',
    `Expected no output at ${path}`,
  )
}

function createUniquePersonId(label) {
  return `cli-test-${label}-${process.pid}-${randomUUID()}`
}

function registerOutputCleanup(testContext, outputPath) {
  testContext.after(async () => {
    await rm(outputPath, {
      force: true,
      maxRetries: 3,
      recursive: true,
      retryDelay: 100,
    })
  })
}

async function prepareExpectedOutput(testContext, outputPath) {
  await assertPathDoesNotExist(outputPath)
  registerOutputCleanup(testContext, outputPath)
}

async function createOwnedOutput(testContext, outputPath, data) {
  await assertPathDoesNotExist(outputPath)
  await writeFile(outputPath, data, { flag: 'wx' })
  registerOutputCleanup(testContext, outputPath)
}

function registerSymbolicLinkCleanup(testContext, linkPath) {
  testContext.after(async () => {
    try {
      await unlink(linkPath)
    } catch (error) {
      if (error?.code !== 'ENOENT') {
        throw error
      }
    }
  })
}

async function createFileSymbolicLinkOrSkip(
  testContext,
  targetPath,
  linkPath,
) {
  await assertPathDoesNotExist(linkPath)

  try {
    await symlink(targetPath, linkPath, 'file')
  } catch (error) {
    await assertPathDoesNotExist(linkPath)

    const skippableCodes = new Set([
      'EACCES',
      'EINVAL',
      'ENOSYS',
      'ENOTSUP',
      'EPERM',
    ])

    if (skippableCodes.has(error?.code)) {
      testContext.skip(
        `File symlink unavailable on ${process.platform}; ${error.code}: ${error.message}`,
      )
      return false
    }

    throw error
  }

  registerSymbolicLinkCleanup(testContext, linkPath)
  return true
}

test(
  'converts a valid PNG to a 900x1200 WebP image',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const personId = `prepare-person-image-test-${process.pid}-${randomUUID()}`
    const outputPath = join(peopleDirectory, `${personId}.webp`)

    registerOutputCleanup(testContext, outputPath)

    const result = await runCli([personId, inputPath], temporaryDirectory)

    assert.equal(result.signal, null)
    assert.equal(
      result.code,
      0,
      `CLI failed:\n${result.stderr}\n${result.stdout}`,
    )

    const outputStats = await stat(outputPath)
    assert.equal(outputStats.isFile(), true)

    const outputData = await readFile(outputPath)
    const metadata = await sharp(outputData).metadata()

    assert.equal(metadata.format, 'webp')
    assert.equal(metadata.width, 900)
    assert.equal(metadata.height, 1200)
  },
)

test(
  'returns exit code 1 when called without arguments',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const result = await runCli([], temporaryDirectory)

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /error/i)
    assert.match(result.stderr, /person id/i)
  },
)

test(
  'returns exit code 1 when the input image argument is missing',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const personId = createUniquePersonId('missing-input')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    const result = await runCli([personId], temporaryDirectory)

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /input image|argument/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  'rejects an unknown option without creating output',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const personId = createUniquePersonId('unknown-option')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    const result = await runCli(
      [personId, inputPath, '--unknown-option'],
      temporaryDirectory,
    )

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /unknown/i)
    assert.match(result.stderr, /option|argument/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  'rejects representative non-kebab-case person ids without creating output',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const token = randomUUID()
    const validBase = `example-${token}`
    const invalidPersonIds = [
      `Example-${token}`,
      `example_${token}`,
      `example ${token}`,
      `-${validBase}`,
      `${validBase}-`,
      `example--${token}`,
    ]

    for (const personId of invalidPersonIds) {
      const outputPath = resolve(peopleDirectory, `${personId}.webp`)
      const result = await runCli([personId, inputPath], temporaryDirectory)

      assert.equal(result.signal, null, personId)
      assert.equal(result.code, 1, personId)
      assert.match(result.stderr, /person id|kebab/i, personId)
      await assertPathDoesNotExist(outputPath)
    }
  },
)

test(
  'rejects path-like person ids without creating output inside or outside the target directory',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const token = randomUUID()
    const pathLikePersonIds = [
      `../example-${token}`,
      `example-${token}/name`,
      `..\\example-${token}`,
    ]

    for (const personId of pathLikePersonIds) {
      const possibleOutputPaths = [
        resolve(peopleDirectory, `${personId}.webp`),
        resolve(
          peopleDirectory,
          `${personId.replaceAll('\\', '/')}.webp`,
        ),
      ]
      const result = await runCli([personId, inputPath], temporaryDirectory)

      assert.equal(result.signal, null, personId)
      assert.equal(result.code, 1, personId)
      assert.match(result.stderr, /person id|kebab/i, personId)

      for (const outputPath of new Set(possibleOutputPaths)) {
        await assertPathDoesNotExist(outputPath)
      }
    }
  },
)

test(
  'rejects Windows reserved person ids on every platform',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const reservedPersonIds = ['con', 'CON', 'Con']

    for (const personId of reservedPersonIds) {
      const entriesBefore = await readdir(peopleDirectory)
      const result = await runCli([personId, inputPath], temporaryDirectory)
      const entriesAfter = await readdir(peopleDirectory)

      assert.equal(result.signal, null, personId)
      assert.equal(result.code, 1, personId)
      assert.match(result.stderr, /person id|reserved/i, personId)
      assert.equal(
        entriesBefore.some((entry) => entry.toLowerCase() === 'con.webp'),
        false,
      )
      assert.equal(
        entriesAfter.some((entry) => entry.toLowerCase() === 'con.webp'),
        false,
      )
    }
  },
)

test(
  'rejects a missing input file without creating output',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = join(temporaryDirectory, 'missing.png')
    const personId = createUniquePersonId('missing-file')
    const outputPath = join(peopleDirectory, `${personId}.webp`)

    registerOutputCleanup(testContext, outputPath)

    const result = await runCli([personId, inputPath], temporaryDirectory)

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /does not exist|not found/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  'rejects a directory used as an input image without creating output',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = join(temporaryDirectory, 'directory.png')
    const personId = createUniquePersonId('directory-input')
    const outputPath = join(peopleDirectory, `${personId}.webp`)

    registerOutputCleanup(testContext, outputPath)
    await mkdir(inputPath)

    const result = await runCli([personId, inputPath], temporaryDirectory)

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /regular file|ordinary file/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  'rejects an unsupported extension even when the input contains valid PNG data',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = join(temporaryDirectory, 'valid-image.data')
    const personId = createUniquePersonId('unsupported-ext')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    const pngData = await createTestImage().png().toBuffer()

    registerOutputCleanup(testContext, outputPath)
    await writeFile(inputPath, pngData)

    const result = await runCli([personId, inputPath], temporaryDirectory)

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /unsupported|extension/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  'rejects a PNG extension when the input contains JPEG data',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = join(temporaryDirectory, 'jpeg-content.png')
    const personId = createUniquePersonId('format-mismatch')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    const jpegData = await createTestImage().jpeg().toBuffer()
    const sourceMetadata = await sharp(jpegData).metadata()

    assert.equal(sourceMetadata.format, 'jpeg')
    registerOutputCleanup(testContext, outputPath)
    await writeFile(inputPath, jpegData)

    const result = await runCli([personId, inputPath], temporaryDirectory)

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /does not match|mismatch/i)
    assert.match(result.stderr, /format/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  'rejects non-image content with a supported extension without creating output',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = join(temporaryDirectory, 'not-an-image.png')
    const personId = createUniquePersonId('invalid-image')
    const outputPath = join(peopleDirectory, `${personId}.webp`)

    registerOutputCleanup(testContext, outputPath)
    await writeFile(inputPath, 'This is not image data.', 'utf8')

    const result = await runCli([personId, inputPath], temporaryDirectory)

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /unable to read|invalid|unsupported/i)
    assert.match(result.stderr, /image/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  'does not overwrite an existing output file by default',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const personId = createUniquePersonId('no-overwrite')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    const originalData = Buffer.from(`existing-output-${randomUUID()}`)

    await createOwnedOutput(testContext, outputPath, originalData)

    const beforeExecution = await readFile(outputPath)
    const result = await runCli([personId, inputPath], temporaryDirectory)
    const afterExecution = await readFile(outputPath)

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /already exists|exists|force/i)
    assert.deepEqual(afterExecution, beforeExecution)
  },
)

test(
  'overwrites an existing output file when --force is provided',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const personId = createUniquePersonId('force-overwrite')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    const originalData = Buffer.from(`old-output-${randomUUID()}`)

    await createOwnedOutput(testContext, outputPath, originalData)

    const beforeExecution = await readFile(outputPath)
    const result = await runCli(
      [personId, inputPath, '--force'],
      temporaryDirectory,
    )
    const afterExecution = await readFile(outputPath)
    const metadata = await sharp(afterExecution).metadata()

    assert.equal(result.signal, null)
    assert.equal(
      result.code,
      0,
      `CLI failed:\n${result.stderr}\n${result.stdout}`,
    )
    assert.notDeepEqual(afterExecution, beforeExecution)
    assert.equal(metadata.format, 'webp')
    assert.equal(metadata.width, 900)
    assert.equal(metadata.height, 1200)
  },
)

test(
  'rejects using the output file itself as input',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const personId = createUniquePersonId('same-input-output')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    const originalData = await createTestImage().webp().toBuffer()

    await createOwnedOutput(testContext, outputPath, originalData)

    const beforeExecution = await readFile(outputPath)
    const result = await runCli(
      [personId, outputPath, '--force'],
      temporaryDirectory,
    )
    const afterExecution = await readFile(outputPath)

    assert.equal(result.signal, null)
    assert.match(
      result.stderr,
      /input.*output|same file|different files/i,
    )
    assert.deepEqual(afterExecution, beforeExecution)
    assert.equal(result.code, 1)
  },
)

test(
  'rejects an output path that is a symbolic link',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const targetPath = join(temporaryDirectory, 'symlink target.webp')
    const personId = createUniquePersonId('output-symlink')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    const originalTargetData = Buffer.from(
      `symlink-target-${randomUUID()}`,
    )

    await writeFile(targetPath, originalTargetData, { flag: 'wx' })

    const linkCreated = await createFileSymbolicLinkOrSkip(
      testContext,
      targetPath,
      outputPath,
    )

    if (!linkCreated) {
      return
    }

    const beforeExecution = await readFile(targetPath)
    const result = await runCli(
      [personId, inputPath, '--force'],
      temporaryDirectory,
    )
    const afterExecution = await readFile(targetPath)
    const outputStats = await lstat(outputPath)

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /symbolic link|symlink/i)
    assert.deepEqual(afterExecution, beforeExecution)
    assert.equal(outputStats.isSymbolicLink(), true)
  },
)

test(
  'rejects an unreadable input file where POSIX permissions are enforceable',
  { timeout: 30_000 },
  async (testContext) => {
    if (process.platform === 'win32') {
      testContext.skip(
        'Unreadable-file test skipped on win32: POSIX mode bits are not reliably enforceable.',
      )
      return
    }

    if (typeof process.getuid !== 'function') {
      testContext.skip(
        `Unreadable-file test skipped on ${process.platform}: process.getuid is unavailable.`,
      )
      return
    }

    if (process.getuid() === 0) {
      testContext.skip(
        `Unreadable-file test skipped on ${process.platform}: process is running as root.`,
      )
      return
    }

    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const personId = createUniquePersonId('unreadable-input')
    const outputPath = join(peopleDirectory, `${personId}.webp`)

    await assertPathDoesNotExist(outputPath)
    registerOutputCleanup(testContext, outputPath)

    try {
      await chmod(inputPath, 0o000)
    } catch (error) {
      if (new Set(['EACCES', 'ENOTSUP', 'EPERM']).has(error?.code)) {
        testContext.skip(
          `Unreadable-file setup unavailable on ${process.platform}; ${error.code}: ${error.message}`,
        )
        return
      }

      throw error
    }

    testContext.after(async () => {
      try {
        await chmod(inputPath, 0o600)
      } catch (error) {
        if (error?.code !== 'ENOENT') {
          throw error
        }
      }
    })

    try {
      await readFile(inputPath)
      testContext.skip(
        `Unreadable-file test skipped on ${process.platform}: chmod 000 did not prevent reading.`,
      )
      return
    } catch (error) {
      if (!new Set(['EACCES', 'EPERM']).has(error?.code)) {
        throw error
      }
    }

    const result = await runCli([personId, inputPath], temporaryDirectory)

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /not readable|permission|access/i)
    await assertPathDoesNotExist(outputPath)
  },
)

const supportedInputFormats = [
  {
    extension: '.jpg',
    format: 'jpeg',
    encode: (image) => image.jpeg(),
  },
  {
    extension: '.jpeg',
    format: 'jpeg',
    encode: (image) => image.jpeg(),
  },
  {
    extension: '.webp',
    format: 'webp',
    encode: (image) => image.webp(),
  },
]

for (const { extension, format, encode } of supportedInputFormats) {
  test(
    `converts a valid ${extension} input to a 900x1200 WebP image`,
    { timeout: 30_000 },
    async (testContext) => {
      const temporaryDirectory = await createTemporaryDirectory(testContext)
      const inputPath = join(temporaryDirectory, `valid input${extension}`)

      await encode(createTestImage()).toFile(inputPath)

      const inputData = await readFile(inputPath)
      const inputMetadata = await sharp(inputData).metadata()
      assert.equal(inputMetadata.format, format)

      const personId = createUniquePersonId(`valid-${extension.slice(1)}`)
      const outputPath = join(peopleDirectory, `${personId}.webp`)
      await prepareExpectedOutput(testContext, outputPath)

      const result = await runCli([personId, inputPath], temporaryDirectory)

      assert.equal(result.signal, null)
      assert.equal(
        result.code,
        0,
        `CLI failed for ${extension}:\n${result.stderr}\n${result.stdout}`,
      )

      const outputData = await readFile(outputPath)
      const outputMetadata = await sharp(outputData).metadata()

      assert.equal(outputMetadata.format, 'webp', extension)
      assert.equal(outputMetadata.width, 900, extension)
      assert.equal(outputMetadata.height, 1200, extension)
    },
  )
}

test(
  'warns when enlarging a low-resolution image and still creates the output',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = join(temporaryDirectory, 'low resolution input.png')

    await createTestImage({ width: 120, height: 160 }).png().toFile(inputPath)

    const personId = createUniquePersonId('low-resolution')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    await prepareExpectedOutput(testContext, outputPath)

    const result = await runCli([personId, inputPath], temporaryDirectory)

    assert.equal(result.signal, null)
    assert.equal(
      result.code,
      0,
      `CLI failed:\n${result.stderr}\n${result.stdout}`,
    )
    assert.match(result.stderr, /warn/i)
    assert.match(result.stderr, /enlarg|upscal/i)

    const outputData = await readFile(outputPath)
    const outputMetadata = await sharp(outputData).metadata()

    assert.equal(outputMetadata.format, 'webp')
    assert.equal(outputMetadata.width, 900)
    assert.equal(outputMetadata.height, 1200)
  },
)

test(
  'rejects an animated WebP input without creating output',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = join(temporaryDirectory, 'animated input.webp')
    const firstFrame = await sharp({
      create: {
        width: 8,
        height: 8,
        channels: 4,
        background: { r: 220, g: 40, b: 40, alpha: 1 },
      },
    })
      .png()
      .toBuffer()
    const secondFrame = await sharp({
      create: {
        width: 8,
        height: 8,
        channels: 4,
        background: { r: 40, g: 80, b: 220, alpha: 1 },
      },
    })
      .png()
      .toBuffer()
    const animatedInputData = await sharp([firstFrame, secondFrame], {
      join: { animated: true },
    })
      .webp({ delay: [40, 40], loop: 0 })
      .toBuffer()
    const inputMetadata = await sharp(animatedInputData).metadata()

    assert.equal(inputMetadata.format, 'webp')
    assert.ok(
      inputMetadata.pages > 1,
      `Expected an animated fixture, received pages=${inputMetadata.pages}`,
    )
    await writeFile(inputPath, animatedInputData, { flag: 'wx' })

    const personId = createUniquePersonId('animated-webp')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    await prepareExpectedOutput(testContext, outputPath)

    const result = await runCli([personId, inputPath], temporaryDirectory)

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /animated|frames?|multi-page/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  'rejects an input image exceeding the 100MP pixel limit',
  { timeout: 30_000 },
  async (testContext) => {
    const width = 10_001
    const height = 10_000
    const pixelCount = width * height
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = join(temporaryDirectory, 'over 100mp input.png')
    const generationStartedAt = performance.now()
    const { data, scanlineBytes } = createOneBitGrayscalePng(width, height)

    await writeFile(inputPath, data, { flag: 'wx' })

    const generationDurationMs = performance.now() - generationStartedAt
    const inputStats = await stat(inputPath)
    const inputMetadata = await sharp(inputPath).metadata()

    assert.equal(inputMetadata.format, 'png')
    assert.ok(inputMetadata.width)
    assert.ok(inputMetadata.height)
    assert.equal(inputMetadata.width, width)
    assert.equal(inputMetadata.height, height)
    assert.ok(inputMetadata.width * inputMetadata.height > 100_000_000)
    testContext.diagnostic(
      `100MP fixture: ${width}x${height} (${pixelCount} pixels), ` +
        `${inputStats.size} bytes, ${generationDurationMs.toFixed(1)} ms, ` +
        `${scanlineBytes} scanline bytes`,
    )

    const personId = createUniquePersonId('over-100mp')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    await prepareExpectedOutput(testContext, outputPath)

    const result = await runCli([personId, inputPath], temporaryDirectory, {
      timeoutMs: 5_000,
    })

    assert.equal(result.timedOut, false, 'CLI exceeded the 5-second timeout')
    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assert.match(result.stderr, /pixels?|100\s*mp|too large|limit|maximum/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  'auto-orients an EXIF Orientation 6 JPEG before resizing',
  { timeout: 30_000 },
  async (testContext) => {
    const width = 1_200
    const height = 900
    const channels = 3
    const halfWidth = width / 2
    const halfHeight = height / 2
    const colors = {
      red: [255, 0, 0],
      green: [0, 255, 0],
      blue: [0, 0, 255],
      yellow: [255, 255, 0],
    }
    const sourcePixels = Buffer.alloc(width * height * channels)

    for (let y = 0; y < height; y += 1) {
      for (let x = 0; x < width; x += 1) {
        const color =
          y < halfHeight
            ? x < halfWidth
              ? colors.red
              : colors.green
            : x < halfWidth
              ? colors.blue
              : colors.yellow
        const offset = (y * width + x) * channels

        sourcePixels[offset] = color[0]
        sourcePixels[offset + 1] = color[1]
        sourcePixels[offset + 2] = color[2]
      }
    }

    function sampleRgb(data, info, x, y) {
      const offset = (y * info.width + x) * info.channels

      return {
        r: data[offset],
        g: data[offset + 1],
        b: data[offset + 2],
      }
    }

    function identifyDominantColor({ r, g, b }) {
      if (r > 140 && g > 140 && b < 100) {
        return 'yellow'
      }

      if (r > g + 70 && r > b + 70) {
        return 'red'
      }

      if (g > r + 70 && g > b + 70) {
        return 'green'
      }

      if (b > r + 70 && b > g + 70) {
        return 'blue'
      }

      return 'unknown'
    }

    function sampleQuadrants(data, info) {
      return {
        topLeft: sampleRgb(
          data,
          info,
          Math.floor(info.width / 4),
          Math.floor(info.height / 4),
        ),
        topRight: sampleRgb(
          data,
          info,
          Math.floor((info.width * 3) / 4),
          Math.floor(info.height / 4),
        ),
        bottomLeft: sampleRgb(
          data,
          info,
          Math.floor(info.width / 4),
          Math.floor((info.height * 3) / 4),
        ),
        bottomRight: sampleRgb(
          data,
          info,
          Math.floor((info.width * 3) / 4),
          Math.floor((info.height * 3) / 4),
        ),
      }
    }

    function identifyQuadrants(samples) {
      return Object.fromEntries(
        Object.entries(samples).map(([position, rgb]) => [
          position,
          identifyDominantColor(rgb),
        ]),
      )
    }

    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = join(temporaryDirectory, 'orientation 6 input.jpg')

    await sharp(sourcePixels, {
      raw: { width, height, channels },
    })
      .withMetadata({ orientation: 6 })
      .jpeg({ quality: 95, chromaSubsampling: '4:4:4' })
      .toFile(inputPath)

    const inputMetadata = await sharp(inputPath).metadata()
    const storedPixels = await sharp(inputPath)
      .raw()
      .toBuffer({ resolveWithObject: true })
    const storedSamples = sampleQuadrants(storedPixels.data, storedPixels.info)

    assert.equal(inputMetadata.format, 'jpeg')
    assert.equal(inputMetadata.width, width)
    assert.equal(inputMetadata.height, height)
    assert.equal(inputMetadata.orientation, 6)
    assert.equal(storedPixels.info.width, width)
    assert.equal(storedPixels.info.height, height)
    assert.deepEqual(identifyQuadrants(storedSamples), {
      topLeft: 'red',
      topRight: 'green',
      bottomLeft: 'blue',
      bottomRight: 'yellow',
    })

    const personId = createUniquePersonId('orientation-six')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    await prepareExpectedOutput(testContext, outputPath)

    const result = await runCli([personId, inputPath], temporaryDirectory)

    assert.equal(result.signal, null)
    assert.equal(
      result.code,
      0,
      `CLI failed:\n${result.stderr}\n${result.stdout}`,
    )

    const outputData = await readFile(outputPath)
    const outputMetadata = await sharp(outputData).metadata()
    const outputPixels = await sharp(outputData)
      .raw()
      .toBuffer({ resolveWithObject: true })
    const outputSamples = sampleQuadrants(outputPixels.data, outputPixels.info)
    const outputColors = identifyQuadrants(outputSamples)

    assert.equal(outputMetadata.format, 'webp')
    assert.equal(outputMetadata.width, 900)
    assert.equal(outputMetadata.height, 1_200)
    assert.notEqual(outputMetadata.orientation, 6)
    assert.deepEqual(outputColors, {
      topLeft: 'blue',
      topRight: 'red',
      bottomLeft: 'yellow',
      bottomRight: 'green',
    })
    testContext.diagnostic(
      Object.entries(outputSamples)
        .map(
          ([position, rgb]) =>
            `${position}=${outputColors[position]}(${rgb.r},${rgb.g},${rgb.b})`,
        )
        .join(', '),
    )
  },
)

function assertPositionErrorListsAllowedValues(stderr) {
  assert.match(stderr, /position/i)

  for (const value of ['attention', 'center', 'west', 'northwest']) {
    assert.match(stderr, new RegExp(`\\b${value}\\b`, 'i'))
  }
}

test(
  'uses attention by default and matches explicit --position attention',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = join(temporaryDirectory, 'attention comparison.png')

    await createTestImage({ width: 1_600, height: 900 })
      .png()
      .toFile(inputPath)

    const defaultPersonId = createUniquePersonId('default-attention')
    const explicitPersonId = createUniquePersonId('explicit-attention')
    const defaultOutputPath = join(
      peopleDirectory,
      `${defaultPersonId}.webp`,
    )
    const explicitOutputPath = join(
      peopleDirectory,
      `${explicitPersonId}.webp`,
    )

    await prepareExpectedOutput(testContext, defaultOutputPath)
    await prepareExpectedOutput(testContext, explicitOutputPath)

    const defaultResult = await runCli(
      [defaultPersonId, inputPath],
      temporaryDirectory,
    )
    const explicitResult = await runCli(
      [explicitPersonId, inputPath, '--position', 'attention'],
      temporaryDirectory,
    )

    assert.equal(
      defaultResult.code,
      0,
      `Default CLI failed:\n${defaultResult.stderr}\n${defaultResult.stdout}`,
    )
    assert.equal(defaultResult.signal, null)
    assert.equal(
      explicitResult.code,
      0,
      `Explicit CLI failed:\n${explicitResult.stderr}\n${explicitResult.stdout}`,
    )
    assert.equal(explicitResult.signal, null)

    const defaultOutput = await readFile(defaultOutputPath)
    const explicitOutput = await readFile(explicitOutputPath)
    const defaultMetadata = await sharp(defaultOutput).metadata()
    const explicitMetadata = await sharp(explicitOutput).metadata()

    for (const metadata of [defaultMetadata, explicitMetadata]) {
      assert.equal(metadata.format, 'webp')
      assert.equal(metadata.width, 900)
      assert.equal(metadata.height, 1_200)
    }

    assert.deepEqual(explicitOutput, defaultOutput)
  },
)

test(
  '--position west keeps the western region of a wide input',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = join(temporaryDirectory, 'west crop input.png')
    const easternRegion = await sharp({
      create: {
        width: 800,
        height: 900,
        channels: 3,
        background: { r: 20, g: 40, b: 230 },
      },
    })
      .png()
      .toBuffer()

    await sharp({
      create: {
        width: 1_600,
        height: 900,
        channels: 3,
        background: { r: 230, g: 30, b: 20 },
      },
    })
      .composite([{ input: easternRegion, left: 800, top: 0 }])
      .png()
      .toFile(inputPath)

    const sourcePixels = await sharp(inputPath)
      .raw()
      .toBuffer({ resolveWithObject: true })

    function sampleRgb(data, info, x, y) {
      const offset = (y * info.width + x) * info.channels

      return {
        r: data[offset],
        g: data[offset + 1],
        b: data[offset + 2],
      }
    }

    function assertDominantlyRed(color) {
      assert.ok(
        color.r > 180 && color.r > color.g + 100 && color.r > color.b + 100,
        `Expected dominant red, received ${JSON.stringify(color)}`,
      )
    }

    const sourceWest = sampleRgb(
      sourcePixels.data,
      sourcePixels.info,
      200,
      450,
    )
    const sourceEast = sampleRgb(
      sourcePixels.data,
      sourcePixels.info,
      1_400,
      450,
    )

    assertDominantlyRed(sourceWest)
    assert.ok(
      sourceEast.b > 180 &&
        sourceEast.b > sourceEast.r + 100 &&
        sourceEast.b > sourceEast.g + 100,
      `Expected dominant blue, received ${JSON.stringify(sourceEast)}`,
    )

    const personId = createUniquePersonId('position-west')
    const outputPath = join(peopleDirectory, `${personId}.webp`)
    await prepareExpectedOutput(testContext, outputPath)

    const result = await runCli(
      [personId, inputPath, '--position', 'west'],
      temporaryDirectory,
    )

    assert.equal(
      result.code,
      0,
      `CLI failed:\n${result.stderr}\n${result.stdout}`,
    )
    assert.equal(result.signal, null)

    const outputData = await readFile(outputPath)
    const outputMetadata = await sharp(outputData).metadata()
    const outputPixels = await sharp(outputData)
      .raw()
      .toBuffer({ resolveWithObject: true })

    assert.equal(outputMetadata.format, 'webp')
    assert.equal(outputMetadata.width, 900)
    assert.equal(outputMetadata.height, 1_200)

    for (const [x, y] of [
      [100, 200],
      [450, 600],
      [800, 1_000],
    ]) {
      assertDominantlyRed(
        sampleRgb(outputPixels.data, outputPixels.info, x, y),
      )
    }
  },
)

for (const position of ['center', 'northwest']) {
  test(
    `--position ${position} creates a 900x1200 WebP image`,
    { timeout: 30_000 },
    async (testContext) => {
      const temporaryDirectory = await createTemporaryDirectory(testContext)
      const inputPath = await createValidPng(temporaryDirectory)
      const personId = createUniquePersonId(`position-${position}`)
      const outputPath = join(peopleDirectory, `${personId}.webp`)

      await prepareExpectedOutput(testContext, outputPath)

      const result = await runCli(
        [personId, inputPath, '--position', position],
        temporaryDirectory,
      )

      assert.equal(
        result.code,
        0,
        `CLI failed for ${position}:\n${result.stderr}\n${result.stdout}`,
      )
      assert.equal(result.signal, null)

      const outputData = await readFile(outputPath)
      const metadata = await sharp(outputData).metadata()

      assert.equal(metadata.format, 'webp')
      assert.equal(metadata.width, 900)
      assert.equal(metadata.height, 1_200)
    },
  )
}

test(
  'rejects --position without a value',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const personId = createUniquePersonId('position-missing-value')
    const outputPath = join(peopleDirectory, `${personId}.webp`)

    await prepareExpectedOutput(testContext, outputPath)

    const result = await runCli(
      [personId, inputPath, '--position'],
      temporaryDirectory,
    )

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assertPositionErrorListsAllowedValues(result.stderr)
    assert.match(result.stderr, /requires? a value|missing/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  'rejects an unsupported --position value',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const personId = createUniquePersonId('position-invalid-value')
    const outputPath = join(peopleDirectory, `${personId}.webp`)

    await prepareExpectedOutput(testContext, outputPath)

    const result = await runCli(
      [personId, inputPath, '--position', 'east'],
      temporaryDirectory,
    )

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assertPositionErrorListsAllowedValues(result.stderr)
    assert.match(result.stderr, /invalid/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  'rejects duplicate --position options',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const personId = createUniquePersonId('position-duplicate')
    const outputPath = join(peopleDirectory, `${personId}.webp`)

    await prepareExpectedOutput(testContext, outputPath)

    const result = await runCli(
      [
        personId,
        inputPath,
        '--position',
        'center',
        '--position',
        'west',
      ],
      temporaryDirectory,
    )

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assertPositionErrorListsAllowedValues(result.stderr)
    assert.match(result.stderr, /only.*once|duplicate/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  'does not consume another option as the --position value',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const personId = createUniquePersonId('position-option-value')
    const outputPath = join(peopleDirectory, `${personId}.webp`)

    await prepareExpectedOutput(testContext, outputPath)

    const result = await runCli(
      [personId, inputPath, '--position', '--force'],
      temporaryDirectory,
    )

    assert.equal(result.signal, null)
    assert.equal(result.code, 1)
    assertPositionErrorListsAllowedValues(result.stderr)
    assert.match(result.stderr, /requires? a value|missing/i)
    await assertPathDoesNotExist(outputPath)
  },
)

test(
  '--position west works with --force in either option order',
  { timeout: 30_000 },
  async (testContext) => {
    const temporaryDirectory = await createTemporaryDirectory(testContext)
    const inputPath = await createValidPng(temporaryDirectory)
    const optionOrders = [
      ['--force', '--position', 'west'],
      ['--position', 'west', '--force'],
    ]

    for (const [index, options] of optionOrders.entries()) {
      const personId = createUniquePersonId(`position-force-order-${index}`)
      const outputPath = join(peopleDirectory, `${personId}.webp`)
      const originalData = Buffer.from(
        `position-force-old-output-${randomUUID()}`,
      )

      await createOwnedOutput(testContext, outputPath, originalData)

      const result = await runCli(
        [personId, inputPath, ...options],
        temporaryDirectory,
      )

      assert.equal(
        result.code,
        0,
        `CLI failed for ${options.join(' ')}:\n${result.stderr}\n${result.stdout}`,
      )
      assert.equal(result.signal, null)

      const outputData = await readFile(outputPath)
      const metadata = await sharp(outputData).metadata()

      assert.notDeepEqual(outputData, originalData)
      assert.equal(metadata.format, 'webp')
      assert.equal(metadata.width, 900)
      assert.equal(metadata.height, 1_200)
    }
  },
)
