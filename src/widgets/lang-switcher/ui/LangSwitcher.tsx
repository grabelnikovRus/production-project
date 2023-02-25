import { type FC } from 'react'
import { useTranslation } from 'react-i18next'
import { Button } from 'shared/ui'

interface LangSwitcherProps {
  short?: boolean
}

export const LangSwitcher: FC<LangSwitcherProps> = ({ short = false }) => {
  const { t, i18n } = useTranslation()

  const onClick = (): void => {
    i18n.changeLanguage(i18n.language === 'en' ? 'ru' : 'en').catch(console.log)
  }

  return (
    <Button theme="clear" onClick={onClick}>{t(short ? 'short_translate' : 'translate')}</Button>
  )
}
