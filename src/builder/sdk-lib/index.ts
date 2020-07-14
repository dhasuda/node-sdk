import { Path } from './utils/path'

export class Builder<T extends BuildContext = BuildContext> {
  constructor(public build: (ctx: T) => Promise<void>){}
}

export class BuildContext {
  public path: Path
  public appName: string | undefined

  constructor() {
    this.path = new Path()
  }
}
