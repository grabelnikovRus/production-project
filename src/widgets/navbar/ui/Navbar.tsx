import { type FC } from 'react'
import { AppLink } from 'shared/ui'
import { classNames } from 'shared/lib/classNames'

import s from './Navbar.module.scss'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  return (
    <div className={classNames(s.navbar, className)}>
      <AppLink theme="secondary" to="/">Главаня</AppLink>
      <AppLink theme="secondary" to="/about">О нас</AppLink>
    </div>
  )
}
