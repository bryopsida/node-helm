import { GlobalOptions } from "../options";

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
    list(listOptions: ListOptions): Promise<Array<HelmRelease>>
}
