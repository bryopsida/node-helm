import { GlobalOptions } from '../options'

export class HelmRepoAddOptions extends GlobalOptions {}
export class HelmRepoIndexOptions extends GlobalOptions {}
export class HelmRepoListOptions extends GlobalOptions {}
export class HelmRepoRemoveOptions extends GlobalOptions {}
export class HelmRepoUpdateOptions extends GlobalOptions {}

export interface RepoCommandExecutor {
  add(options: HelmRepoAddOptions): Promise<any>
  index(options: HelmRepoIndexOptions): Promise<any>
  list(options: HelmRepoListOptions): Promise<any>
  remove(options: HelmRepoRemoveOptions): Promise<any>
  update(options: HelmRepoUpdateOptions): Promise<any>
}

export class RepoCommand implements RepoCommandExecutor {
  add(options: HelmRepoAddOptions): Promise<any> {
    throw new Error('Method not implemented.')
  }

  index(options: HelmRepoIndexOptions): Promise<any> {
    throw new Error('Method not implemented.')
  }

  list(options: HelmRepoListOptions): Promise<any> {
    throw new Error('Method not implemented.')
  }

  remove(options: HelmRepoRemoveOptions): Promise<any> {
    throw new Error('Method not implemented.')
  }

  update(options: HelmRepoUpdateOptions): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
