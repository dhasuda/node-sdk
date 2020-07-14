import { join } from 'path'

const NODE_MODULES_LIB_PATH = '/node_modules/@vtex/sdk-lib'

/**
 * Class used to navigate through the file system
 */
export class Path {
  private static APP_PREFIX = 'app'
  private static SRC_FOLDER = `${Path.APP_PREFIX}Src`
  private static TMP_FOLDER = `${Path.APP_PREFIX}Tmp`
  private static DIST_FOLDER = `${Path.APP_PREFIX}Dist`
  private static BUILDERS_FOLDER = `${Path.APP_PREFIX}Builders`

  public app(path = '') {
    const [nodeModulesPath] = __dirname.split(NODE_MODULES_LIB_PATH)
    return join(nodeModulesPath, path)
  }

  public src(path = '') { return join(this.app(), Path.SRC_FOLDER, path) }
  public tmp(path = '') { return join(this.app(), Path.TMP_FOLDER, path) }
  public dist(path = '') { return join(this.app(), Path.DIST_FOLDER, path) }
  public builders(builderName = '') { return join(this.app(), Path.BUILDERS_FOLDER, builderName) }
}
