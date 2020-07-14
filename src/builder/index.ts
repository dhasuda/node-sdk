import { copyFileSync, ensureFileSync } from 'fs-extra'
import { join } from 'path'
import { Builder, BuildContext } from './sdk-lib'

const INDEX_FILE_NAME = 'application.js'
class NodeBuilder extends Builder {
  constructor() {
    super(build)
  }
}

const build = async (ctx: BuildContext) => {
  if (!ctx.appName) {
    throw new Error('Missing appName in build context 🚫')
  }
  const src = ctx.path.tmp(join(ctx.appName, 'src'))
  await generateApplication(src)
  return
}

const generateApplication = async(path: string) => {
  const appPath = join(path, INDEX_FILE_NAME)
  ensureFileSync(appPath)
  copyFileSync(join(__dirname, INDEX_FILE_NAME), appPath)
}

export { NodeBuilder as Builder }
