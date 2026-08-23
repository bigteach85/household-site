import { readFile, writeFile } from 'node:fs/promises'
import { render } from '../.ssr/entry-server.js'

const outputPath = new URL('../dist/index.html', import.meta.url)
const template = await readFile(outputPath, 'utf8')
const appHtml = render()
const rootPlaceholder = '<div id="root"></div>'

if (!template.includes(rootPlaceholder)) {
  throw new Error('Unable to find the app root in the production HTML.')
}

await writeFile(
  outputPath,
  template.replace(rootPlaceholder, `<div id="root">${appHtml}</div>`),
)
