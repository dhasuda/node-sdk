// import { Application } from '../carbonara'
class Application {
  // tslint:disable-next-line:no-shadowed-variable
  constructor(public run: () => Promise<void>) {}
}

const runPath = './index'
// tslint:disable-next-line:no-var-requires
const { run } = require(runPath)

export default new Application(run)
