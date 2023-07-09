import { GlobalOptions } from '../options'

export interface LoginOptions extends GlobalOptions {}
export interface LogoutOptions extends GlobalOptions {}

export interface RegistryCommandExecutor {
  login(options: LoginOptions): Promise<any>
  logout(options: LogoutOptions): Promise<any>
}
export class RegistryCommand implements RegistryCommandExecutor {
  login(options: LoginOptions): Promise<any> {
    throw new Error('Method not implemented.')
  }

  logout(options: LogoutOptions): Promise<any> {
    throw new Error('Method not implemented.')
  }
}
