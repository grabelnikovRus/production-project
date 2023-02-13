import { FC } from 'react';
import { LinkProps, Link } from 'react-router-dom';
import { classNames } from 'shared/lib/classNames';

import s from './AppLink.module.scss'

interface AppLinkProps extends LinkProps {
    theme?: "primary" | "secondary"
}

export const AppLink: FC<AppLinkProps> = ({ children, to, theme = "primary", className, ...props }) => {

    return (
        <Link to={to} className={classNames(s.link, s[theme], className)} {...props}>
            {children}
        </Link>
    )
}