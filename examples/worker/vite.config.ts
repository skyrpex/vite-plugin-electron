import fs from 'fs'
import { defineConfig } from 'vite'
import electron from 'vite-plugin-electron'
import renderer, { worker } from 'vite-plugin-electron-renderer'

fs.rmSync('dist', { recursive: true, force: true })

export default defineConfig({
  build: {
    minify: false,
  },
  plugins: [
    electron({
      // Multiple entry needed Vite >= 3.2.0
      entry: [
        'electron/main.ts',
        'electron/worker.ts',
      ],
    }),
    renderer({
      nodeIntegration: true,
    }),
  ],
  worker: {
    plugins: [
      worker({
        nodeIntegrationInWorker: true,
      }),
    ],
  },
})
