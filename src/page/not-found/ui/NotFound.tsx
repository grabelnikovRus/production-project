import { type FC } from 'react'
import { useTranslation } from 'react-i18next'

import s from './NotFound.module.scss'

export const NotFound: FC = () => {
  const { t } = useTranslation()

  return (
    <div className={s.page}>
      {t('not found page')}
    </div>
  )
}
