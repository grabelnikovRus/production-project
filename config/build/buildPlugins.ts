import HTMLWebpackPlugin from 'html-webpack-plugin'
import webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshWebpackPlugin from '@pmmmwh/react-refresh-webpack-plugin'

import { type BuildOptions } from './types/config'

export function buildPlugins (paths: BuildOptions['paths'], isDev: boolean): webpack.WebpackPluginInstance[] {
  return [
    new webpack.ProgressPlugin(),
    new HTMLWebpackPlugin({
      template: paths.html
    }),
    new MiniCssExtractPlugin({
      filename: '[name].[contenthash].css', // определяет имя каждого выходного файла CSS
      chunkFilename: '[id].css' // параметр определяет имя файлов фрагментов без записи.
    }),
    new webpack.DefinePlugin({
      _IS_DEV_: isDev
    }),
    (isDev && new ReactRefreshWebpackPlugin()) as ReactRefreshWebpackPlugin
  ].filter(Boolean)
}

// DefinePlugin с помощью немого в приложение можно прокидовать переменные вебпака
