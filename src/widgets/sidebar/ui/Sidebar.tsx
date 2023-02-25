import { type FC, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { routerConfig, routerNames } from 'shared/config/router-config/routerConfig'
import { classNames } from 'shared/lib/classNames'
import { Button, AppLink } from 'shared/ui'
import { LangSwitcher } from 'widgets/lang-switcher'
import { ThemeSwitcher } from '../../theme-switcher'
import MainIcon from 'shared/assets/icons/main.svg'
import AboutIcon from 'shared/assets/icons/about.svg'

import s from './Sidebar.module.scss'

export const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const { t } = useTranslation()

  const onToggle = (): void => { setCollapsed(prev => !prev) }

  return (
    <div
      data-testid="sidebar"
      className={classNames(s.block, {
        [s.block__collapsed]: collapsed
      })}>
      <Button
        onClick={onToggle}
        data-testid="sidebar__toggle"
        className={s.block__collapsed_btn}
        theme="background_inverted"
        size='l'
        square
      >
        {collapsed ? '>' : '<'}
      </Button>
      <ul className={s.block__menu}>
        <li className={s.block__item}>
          <AppLink theme="secondary" to={routerConfig[routerNames.MAIN].path as string}>
            <MainIcon className={s.block__icon} />
            <span className={s.block__text}>
              {t('main')}
            </span>
          </AppLink>
        </li>
        <li className={s.block__item}>
          <AppLink theme="secondary" to="/about">
            <AboutIcon className={s.block__icon} />
            <span className={s.block__text}>
              {t('about')}
            </span>
          </AppLink>
        </li>
      </ul>
      <div className={s.block__switchers}>
        <ThemeSwitcher />
        <LangSwitcher short={collapsed}/>
      </div>
    </div>
  )
}
