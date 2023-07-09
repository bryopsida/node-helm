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
    (subCommand: GetSubCommand, options: GetOptions): Promise<string>
}

export class GetCommand {
    public readonly get: GetCommandExecutor

    constructor() {
        this.get = this.getFunc
    }

    private getFunc(subCommand: GetSubCommand, options: GetOptions): Promise<string> {
        return Promise.resolve('')
    }
}