import { addDecorator } from '@storybook/react'
import { globalStyle, themeDecor } from '../../src/shared/config/storybook/decorators'
import { withRouter } from 'storybook-addon-react-router-v6'
import { Theme } from '../../src/app/providers/theme-providers/'
import i18n from 'shared/config/i18n/i18nForSB'

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/
    }
  },
  i18n,
  locale: 'ru',
  locales: {
    en: 'English',
    ru: 'Русский'
  }
}

addDecorator(globalStyle) // обязательно подключаем глобальные стили
addDecorator(themeDecor(Theme.LIGHT))
addDecorator(withRouter)
// addDecorator используем для подключения декораторов в стори бук, также декоратор можно использовать в файле сторис:
// Primary = Template.bind({})
// Primary.decorators = [themeDecor(Theme.LIGHT)] сам декоратор с помощью замыкания может принимать разные аргументы

// можно для глобальных декораторов сделать так: export const decorators = [globalStyle]
