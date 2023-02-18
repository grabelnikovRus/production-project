import { type FC, useState } from 'react'
import { classNames } from 'shared/lib/classNames'
import { Button } from 'shared/ui'
import { LangSwitcher } from 'widgets/lang-switcher'
import { ThemeSwitcher } from '../../theme-switcher'

import s from './Sidebar.module.scss'

export const Sidebar: FC = () => {
  const [collapsed, setCollapsed] = useState(false)

  const onToggle = (): void => { setCollapsed(prev => !prev) }

  return (
        <div
        data-testid="sidebar"
        className={classNames(s.block, {
          [s.block__collapsed]: collapsed
        })}>
            <Button onClick={onToggle} data-testid="sidebar__toggle">toggle</Button>
            <div className={s.block__switchers}>
              <ThemeSwitcher />
              <LangSwitcher />
            </div>
        </div>
  )
}
