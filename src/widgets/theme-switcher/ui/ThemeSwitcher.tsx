import { useTheme, Theme } from 'app/providers/theme-providers'
import { type FC } from 'react'
import { classNames } from 'shared/lib/classNames'
import Dark from 'shared/assets/icons/theme-dark.svg'
import Light from 'shared/assets/icons/theme-light.svg'

import { Button } from 'shared/ui/button/Button'

import s from './ThemeSwitcher.module.scss'

interface ThemeSwitcherProps {
  className?: string
}

export const ThemeSwitcher: FC<ThemeSwitcherProps> = ({ className }) => {
  const { theme, toggleTheme } = useTheme()

  return (
        <Button className={classNames(s.btn, className)} onClick={toggleTheme}>
            {theme === Theme.LIGHT ? <Light /> : <Dark />}
        </Button>
  )
}
