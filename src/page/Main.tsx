import { useTranslation } from 'react-i18next'
import { type FC } from 'react'

export const Main: FC = () => {
  const { t } = useTranslation('main')
  return (
        <div>
            {t('main')}
        </div>
  )
}
