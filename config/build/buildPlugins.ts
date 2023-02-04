import HTMLWebpackPlugin from"html-webpack-plugin";
import webpack from "webpack";
import MiniCssExtractPlugin from "mini-css-extract-plugin"

import { BuildOptions } from "./types/config";

export function buildPlugins(paths: BuildOptions['paths']): webpack.WebpackPluginInstance[] {
    return [
        new webpack.ProgressPlugin(),
        new HTMLWebpackPlugin({
            template: paths.html
        }),
        new MiniCssExtractPlugin({
            filename: "[name].[contenthash].css", // определяет имя каждого выходного файла CSS
            chunkFilename: "[id].css" //параметр определяет имя файлов фрагментов без записи.
        })
    ]
}