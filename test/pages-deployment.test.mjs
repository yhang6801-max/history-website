import assert from 'node:assert/strict'
import { readdir, readFile } from 'node:fs/promises'
import path from 'node:path'
import test from 'node:test'
import plan from '../docs/expansion-plan.json' with { type: 'json' }

const projectBase = '/history-website/'
const dist = path.resolve('dist')

test('the Pages build uses the repository base and includes a SPA fallback', async () => {
  const index = await readFile(path.join(dist, 'index.html'), 'utf8')
  const fallback = await readFile(path.join(dist, '404.html'), 'utf8')

  assert.equal(fallback, index)
  assert.match(index, /(?:src|href)="\/history-website\//)
  assert.doesNotMatch(index, /(?:src|href)="\/(?:assets\/|favicon\.svg)/)
})

test('every HTML asset resolves inside dist and all 37 portraits were emitted', async () => {
  const index = await readFile(path.join(dist, 'index.html'), 'utf8')
  const urls = [...index.matchAll(/(?:src|href)="([^"]+)"/g)]
    .map((match) => match[1])
    .filter((url) => url.startsWith(projectBase))

  assert.ok(urls.length > 0)
  for (const url of urls) {
    const relative = decodeURIComponent(url.slice(projectBase.length))
    await assert.doesNotReject(() => readFile(path.join(dist, relative)))
  }

  const emitted = await readdir(path.join(dist, 'assets'))
  assert.equal(plan.currentIds.length, 37)
  for (const id of plan.currentIds) {
    assert.ok(emitted.some((name) => name.startsWith(`${id}-`) && name.endsWith('.webp')), id)
  }
})
