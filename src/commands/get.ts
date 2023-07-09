import { GlobalOptions } from '../options'

export class GetOptions extends GlobalOptions {
  revision: number
  template: string
}

export enum GetSubCommand {
  /* eslint-disable no-unused-vars */
  ALL,
  /* eslint-disable no-unused-vars */
  HOOKS,
  /* eslint-disable no-unused-vars */
  MANIFEST,
  /* eslint-disable no-unused-vars */
  NOTES,
  /* eslint-disable no-unused-vars */
  VALUES,
}

export interface GetCommandExecutor {
  (subCommand: GetSubCommand, options: GetOptions): Promise<string>
}

export class GetCommand {
  public readonly get: GetCommandExecutor

  constructor() {
    this.get = this.getFunc
  }

  private getFunc(
    subCommand: GetSubCommand,
    options: GetOptions,
  ): Promise<string> {
    return Promise.resolve('')
  }
}
