import { createContext } from 'react'

export enum Theme {
  DARK = 'app-dark',
  LIGHT = 'app-light'
}

interface ThemeContextProps {
  theme: Theme
  setTheme: (theme: Theme) => void
}

export const ThemeContext = createContext<ThemeContextProps>({
  theme: Theme.LIGHT,
  setTheme: () => {}
})

export const THEME_KEY = 'key'
