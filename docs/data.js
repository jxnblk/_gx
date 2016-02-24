
import fs from 'fs'
import path from 'path'
import { parse } from 'react-docgen'
import pkg from '../package.json'

const src = fs.readFileSync(path.join(__dirname, '../src/Gx.js'), 'utf8')

const docs = parse(src)

const data = {
  ...pkg,
  docs
}

module.exports = data

