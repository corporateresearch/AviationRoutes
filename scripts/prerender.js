// Injects the server-rendered page into dist/index.html after `vite build` and `vite build --ssr`.
import { readFile, rm, writeFile } from 'node:fs/promises'

const root = new URL('../', import.meta.url)
const indexPath = new URL('dist/index.html', root)
const ssrDir = new URL('dist-ssr/', root)

const { render } = await import(new URL('entry-server.js', ssrDir).href)
const template = await readFile(indexPath, 'utf8')

if (!template.includes('<!--app-html-->')) {
  throw new Error('dist/index.html is missing the <!--app-html--> placeholder')
}

await writeFile(indexPath, template.replace('<!--app-html-->', render()))
await rm(ssrDir, { recursive: true, force: true })
console.log('Pre-rendered dist/index.html')
