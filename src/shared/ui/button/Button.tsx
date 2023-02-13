import { type } from 'os';
import { ButtonHTMLAttributes, FC } from 'react';
import { classNames } from 'shared/lib/classNames';

import s from './Button.module.scss'

type ButtonTheme = "clear"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    theme?: ButtonTheme
}

export const Button: FC<ButtonProps> = ({ className, onClick, children, theme = "clear", ...other }) => {

    return (
        <button 
          className={classNames(s.btn, className, s[`btn__${theme}`])}
          onClick={onClick}
          {...other}
        >
            {children}
        </button>
    )
}