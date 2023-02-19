import { type ButtonHTMLAttributes, type FC } from 'react'
import { classNames } from 'shared/lib/classNames'

import s from './Button.module.scss'

type ButtonTheme = 'clear' | 'outline'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = ({ className, onClick, children, theme = 'clear', type = 'button', ...other }) => {
  return (
        <button
          className={classNames(s.btn, className, s[`btn__${theme}`])}
          onClick={onClick}
          type={type}
          {...other}
        >
            {children}
        </button>
  )
}
