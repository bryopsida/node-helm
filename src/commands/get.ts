import { GlobalOptions } from "../options";

export class GetOptions extends GlobalOptions {
    revision: number
    template: string
}

export enum GetSubCommand {
    ALL,
    HOOKS,
    MANIFEST,
    NOTES,
    VALUES
}

export interface GetCommandExecutor {
    get(subCommand: GetSubCommand, options: GetOptions): Promise<string>
}