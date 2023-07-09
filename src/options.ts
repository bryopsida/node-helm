export abstract class GlobalOptions {
  burstLimit: number
  kubeToken: string
  kubeConfig: string
  kubeAsGroup: string
  kubeAsUser: string
  kubeApiServer: string
  kubeCaFile: string
  registryConfig: string
  repositoryConfig: string
  repositoryCache: string
  namespace: string
}
