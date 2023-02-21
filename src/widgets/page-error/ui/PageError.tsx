import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

import s from './PageError.module.scss'

export const PageError: FC = () => {
  const { t } = useTranslation()

  const reload = (): void => { window.location.reload() }

  return (
    <div className={s.page}>
      <span>{t('error')}</span>
      <Button onClick={reload} className={s.page__button}>{t('try')}</Button>
    </div>
  )
}
