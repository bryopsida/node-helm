import { GlobalOptions } from '../options'

export class StatusOptions extends GlobalOptions {
  showDescending?: boolean
  showResources?: boolean
  revision?: number
  releaseName: string
}

export interface StatusCommandExecutor {
  status(StatusOptions: StatusOptions): Promise<any>
}

export class StatusCommand implements StatusCommandExecutor {
  status(StatusOptions: StatusOptions): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
