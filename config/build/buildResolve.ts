import { type ResolveOptions } from 'webpack'
import { type BuildOptions } from './types/config'

export function buildresolve (paths: BuildOptions['paths']): ResolveOptions {
  return {
    extensions: ['.tsx', '.ts', '.js'],
    preferAbsolute: true,
    modules: [paths.src, 'node_modules'],
    mainFiles: ['index'],
    alias: {}
  }
}
