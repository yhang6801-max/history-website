import react from '@vitejs/plugin-react'
import { copyFile } from 'node:fs/promises'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'

const pagesBase = '/history-website/'

export default defineConfig(({ command }) => ({
  // GitHub Pages serves this project below the repository name. Keep the
  // development server at / so the existing local workflow is unchanged.
  base: command === 'build' ? pagesBase : '/',
  plugins: [
    react(),
    {
      name: 'github-pages-spa-fallback',
      apply: 'build',
      async closeBundle() {
        // GitHub Pages has no rewrite rules. Its project-level 404 document is
        // therefore the SPA entry point for direct visits and refreshes.
        await copyFile(resolve('dist/index.html'), resolve('dist/404.html'))
      },
    },
  ],
}))
