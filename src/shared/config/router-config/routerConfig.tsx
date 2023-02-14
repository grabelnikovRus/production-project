import { type RouteProps } from 'react-router-dom'
import { Main } from 'page/Main'
import { AboutAsync } from 'page/About.async'
import { NotFound } from 'page/not-found'

const routerNames = {
  MAIN: 'MAIN',
  ABOUT: 'ABOUT',
  NOT_FOUND: 'NOT_FOUND'
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
  },
  [routerNames.NOT_FOUND]: {
    path: '*',
    element: <NotFound />
  }
} as const
