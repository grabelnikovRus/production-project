import { lazy } from 'react'

export const AboutAsync = lazy(async () => await import('./About').then((module) => ({ default: module.About })))

// lazy использовать только для страниц, модалки, шторки, тултипы и блоки которые за пределами экрана
