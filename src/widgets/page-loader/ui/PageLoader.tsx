import { FC } from 'react';
import { Loader } from 'shared/ui'; 

import s from './PageLoader.module.scss'

export const PageLoader: FC = () => (
    <div className={s.page}>
        <Loader />
    </div>
)