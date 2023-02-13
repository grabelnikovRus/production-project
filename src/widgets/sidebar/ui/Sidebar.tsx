import { FC, useState } from 'react';
import { classNames } from 'shared/lib/classNames';
import { Button } from 'shared/ui';
import { LangSwitcher } from 'widgets/lang-switcher';
import { ThemeSwitcher } from '../../theme-switcher';

import s from './Sidebar.module.scss'

export const Sidebar: FC = () => {
    const [collapsed, setCollapsed] = useState(false);

    const onToggle = () => setCollapsed(prev => !prev)

    return (
        <div className={classNames(s.block, {
            [s.block__collapsed]: collapsed
        })}>
            <Button onClick={onToggle}>toggle</Button>
            <div className={s.block__switchers}>
               <ThemeSwitcher />
               <LangSwitcher />
            </div>
        </div>
    )
}