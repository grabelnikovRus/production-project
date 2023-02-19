import i18n, { type ResourceLanguage, type Resource } from 'i18next'
import { initReactI18next } from 'react-i18next'

import Backend from 'i18next-http-backend'
import LanguageDetector from 'i18next-browser-languagedetector'

const ns = ['main', 'translation']
const supportedLngs = ['en', 'ru']
const resources: Resource = ns.reduce((acc: Record<string, ResourceLanguage>, n) => {
  supportedLngs.forEach((lng) => {
    if (acc[lng] === undefined) acc[lng] = {}
    acc[lng] = {
      ...acc[lng],
      [n]: require(`../../../../public/locales/${lng}/${n}.json`)
    }
  })
  return acc
}, {})
console.log(resources)
i18n
  .use(initReactI18next)
  .use(Backend)
  .use(LanguageDetector)
  .init({
    debug: true,
    resources,
    fallbackLng: 'ru' // язык по умолчанию
  }).catch(console.log)

export default i18n
