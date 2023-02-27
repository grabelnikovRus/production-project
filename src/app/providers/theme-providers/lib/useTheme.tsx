import { useContext, useEffect } from 'react'
import { Theme, ThemeContext, THEME_KEY } from './ThemeContext'

interface UseThemeReturn {
  theme: Theme
  toggleTheme: () => void
}

export const useTheme = (): UseThemeReturn => {
  const { theme, setTheme } = useContext(ThemeContext)

  const toggleTheme = (): void => {
    const newTheme = theme === Theme.LIGHT ? Theme.DARK : Theme.LIGHT
    setTheme(newTheme)
    localStorage.setItem(THEME_KEY, newTheme)
  }

  useEffect(() => {
    document.body.classList.add(theme)
    return () => { document.body.classList.remove(theme) }
  }, [theme])

  return {
    theme,
    toggleTheme
  }
}
