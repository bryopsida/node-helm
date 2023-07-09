import { GlobalOptions } from "../options";

export class HelmSearchHubOptions extends GlobalOptions {}
export class HelmSearchOptions extends GlobalOptions {}

export interface SearchCommandExecutor {
    hub(options: HelmSearchHubOptions): Promise<any>
    repo(options: HelmSearchOptions): Promise<any>
}