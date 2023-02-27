import { useTranslation } from 'react-i18next'
import { type FC } from 'react'
import { Counter } from 'entities/counter'

export const Main: FC = () => {
  const { t } = useTranslation('main')
  return (
    <div>
      {t('main')}
      <Counter />
    </div>
  )
}
