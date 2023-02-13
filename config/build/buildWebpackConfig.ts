import { Configuration } from "webpack"

import { BuildOptions } from "./types/config"
import { buildPlugins } from './buildPlugins'
import { buildLoaders } from "./buildLoaders"
import { buildresolve } from "./buildResolve"
import { buildDevServer } from "./buildDevServer"

export function buildWebpackConfig(options: BuildOptions): Configuration {
    const { mode, paths } = options

    const isDev = mode === "development";

    return {
        mode,
        entry: paths.entry,
        output: {
            filename: "[name].[contenthash].js",
            path: paths.output,
            clean: true
        },
        plugins: buildPlugins(paths, isDev),
        module: {
            rules: buildLoaders(mode)
        },
        resolve: buildresolve(paths),
        devtool: isDev ? "inline-source-map" : false,
        devServer: isDev ? buildDevServer(options) : undefined
    }
};
