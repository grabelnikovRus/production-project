import type webpack from 'webpack'
import MiniCssExtractPlugin from 'mini-css-extract-plugin'
import ReactRefreshTypeScript from 'react-refresh-typescript'
import { type BuildMode } from './types/config'

export function buildLoaders (mode: BuildMode, isDev: boolean): webpack.RuleSetRule[] {
  const tsLoader = {
    test: /\.tsx?$/,
    exclude: /node_modules/,
    use: {
      loader: 'ts-loader',
      options: {
        getCustomTransformers: () => ({
          before: [isDev && ReactRefreshTypeScript()].filter(Boolean)
        }),
        transpileOnly: isDev
      }
    }
  } // если не используем тайпскрипт, то пришлось бы добавить babel-loader

  const cssLoader = {
    test: /\.s[ac]ss$/,
    use: [
      mode === 'development' ? 'style-loader' : MiniCssExtractPlugin.loader, // добавляем вместо style-loader, файлы сss будут вынесены из js
      {
        loader: 'css-loader',
        options: {
          modules: { // добавляет хэш к имени класса
            auto: (path: string) => path.includes('.module.scss'), // определяет к каким файлам длбавлять хэш
            localIdentName: mode === 'development' ? '[path][name]__[local]--[hash:base64:5]' : '[hash:base64:8]' // форма добавления хэша
          }
        }
      },
      'sass-loader'
    ]
  }

  const svgLoader = {
    test: /\.svg$/i,
    issuer: /\.[jt]sx?$/,
    use: ['@svgr/webpack']
  }

  const fileLoader = {
    test: /\.(png|jpe?g|gif)$/i,
    use: [
      {
        loader: 'file-loader'
      }
    ]
  }

  return [
    tsLoader,
    cssLoader,
    svgLoader,
    fileLoader
  ]
}
