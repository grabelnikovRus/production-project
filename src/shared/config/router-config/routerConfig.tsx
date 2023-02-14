import { type RouteProps } from 'react-router-dom'
import { Main } from 'page/Main'
import { AboutAsync } from 'page/About.async'

const routerNames = {
  MAIN: 'MAIN',
  ABOUT: 'ABOUT'
} as const

type RouterName = typeof routerNames

export const routerConfig: Record<RouterName[keyof RouterName], RouteProps> = {
  [routerNames.MAIN]: {
    path: '/',
    element: <Main/>
  },
  [routerNames.ABOUT]: {
    path: '/about',
    element: <AboutAsync />
  }
} as const
