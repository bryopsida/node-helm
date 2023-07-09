import { GlobalOptions } from '../options'

export class ListOptions extends GlobalOptions {
  all?: boolean
  allNamespaces?: boolean
  sortByDate?: boolean
  max?: number
  showPending?: boolean
  reverseSort?: boolean
  selector?: string
  superseded?: boolean
  timeFormat?: string
  showUninstalled?: boolean
  showUninstalling?: boolean
  showDeployed?: boolean
}

export interface HelmRelease {
  name: string
  namespace: string
  revision: string
  updated: string
  status: string
  chart: string
  app_version: string
}

export interface ListCommandExecutor {
  (listOptions: ListOptions): Promise<Array<HelmRelease>>
}

export class ListCommand {
  public readonly list: ListCommandExecutor

  constructor() {
    this.list = this.listFunc
  }

  private listFunc(listOptions: ListOptions): Promise<Array<HelmRelease>> {
    return Promise.resolve([])
  }
}
