import { GetCommand, GetCommandExecutor } from "./commands/get";
import { ListCommand, ListCommandExecutor } from "./commands/list";
import { RegistryCommand, RegistryCommandExecutor } from "./commands/registry";
import { RepoCommand, RepoCommandExecutor } from "./commands/repo";
import { SearchCommand, SearchCommandExecutor } from "./commands/search";
import { StatusCommand, StatusCommandExecutor } from "./commands/status";

export interface HelmInstance {
    get: GetCommandExecutor
    list: ListCommandExecutor
    search: SearchCommandExecutor
    repo: RepoCommandExecutor
    registry: RegistryCommandExecutor
    status: StatusCommandExecutor
}

export interface HelmOptions {

}
export class Helm implements HelmInstance {
    public readonly get: GetCommandExecutor
    public readonly list: ListCommandExecutor
    public readonly search: SearchCommandExecutor
    public readonly repo: RepoCommandExecutor
    public readonly registry: RegistryCommandExecutor
    public readonly status: StatusCommandExecutor

    constructor(options: HelmOptions) {
        this.get = new GetCommand().get
        this.list = new ListCommand().list
        this.registry = new RegistryCommand()
        this.repo = new RepoCommand()
        this.search = new SearchCommand()
        this.status = new StatusCommand()
    }
}
