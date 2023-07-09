import { GlobalOptions } from "../options";

export class LoginOptions extends GlobalOptions {}
export class LogoutOptions extends GlobalOptions {}

export interface RegistryCommandExecutor {
    login(options: LoginOptions): Promise<any>
    logout(options: LogoutOptions): Promise<any>
}
