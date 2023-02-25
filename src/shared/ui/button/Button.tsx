import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames'

import s from './Button.module.scss'

type ButtonTheme = 'clear' | 'outline' | 'background' | 'background_inverted'

type ButtonSize = 'm' | 'l' | 'xl'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
  square?: boolean
  size?: ButtonSize
}

export const Button: FC<ButtonProps> = ({
  className,
  onClick,
  children,
  theme = 'clear',
  type = 'button',
  square = false,
  size = 'm',
  ...other
}) => {
  const mods = {
    [s.square]: square
  }

  return (
    <button
      className={classNames(s.btn, className, s[`btn__${theme}`], s[size], mods)}
      onClick={onClick}
      type={type}
      {...other}
    >
      {children}
    </button>
  )
}
