import { GetCommandExecutor } from "./commands/get";
import { ListCommandExecutor } from "./commands/list";
import { RegistryCommandExecutor } from "./commands/registry";
import { RepoCommandExecutor } from "./commands/repo";
import { SearchCommandExecutor } from "./commands/search";
import { StatusCommandExecutor } from "./commands/status";

export interface HelmInstance {
    get: GetCommandExecutor
    list: ListCommandExecutor
    search: SearchCommandExecutor
    repo: RepoCommandExecutor
    registry: RegistryCommandExecutor
    status: StatusCommandExecutor
}