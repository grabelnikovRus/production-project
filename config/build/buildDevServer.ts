import { type Configuration } from 'webpack-dev-server'
import { type BuildOptions } from './types/config'

export function buildDevServer (options: BuildOptions): Configuration {
  return {
    port: options.port,
    open: true,
    historyApiFallback: true, // очень важно! если false, то при обновлнеии будет cannot GET
    hot: true // для работы react-refresh-webpack-plugin
  }
}
