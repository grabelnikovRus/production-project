import { type RuleSetRule, type Configuration } from 'webpack'
import path from 'path'
// тут занимаемся переопределением конфига сторибука, который уже настроен по умоланию
export default ({ config }: { config: Configuration }): Configuration => {
  config.resolve?.extensions?.push('.ts', '.tsx')

  config.resolve?.modules?.push(
    path.resolve(__dirname, '..', '..', 'src'),
    path.resolve(__dirname, '..', '..', 'node_modules')
  )

  // родной конфиг надо переопределить для свг
  const loaders = config.module?.rules?.map((rule: RuleSetRule) => {
    if (rule.test instanceof RegExp && rule.test.toString().includes('svg')) {
      return { ...rule, exclude: /\.svg$/i }
    }

    return rule
  })
  if (config.module != null) config.module.rules = loaders
  config.module?.rules?.push({ // добавляем для свг именно наш лоадер
    test: /\.svg$/,
    use: ['@svgr/webpack']
  })

  config.module?.rules?.push({ // обязательно для сторибука тоже добавляем лоадер для стилей
    test: /\.s[ac]ss$/,
    use: [
      'style-loader',
      {
        loader: 'css-loader',
        options: {
          modules: { // добавляет хэш к имени класса
            auto: (path: string) => path.includes('.module.scss'), // определяет к каким файлам длбавлять хэш
            localIdentName: '[path][name]__[local]--[hash:base64:5]'
          }
        }
      },
      'sass-loader'
    ]
  })

  return config
}
