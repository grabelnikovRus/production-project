import { type FC, useState, useCallback } from 'react'
import { Button, Modal } from 'shared/ui'
import { classNames } from 'shared/lib/classNames'

import s from './Navbar.module.scss'
import { useTranslation } from 'react-i18next'

interface NavbarProps {
  className?: string
}

export const Navbar: FC<NavbarProps> = ({ className }) => {
  const [isOpen, setIsOpen] = useState<boolean>(false)
  const { t } = useTranslation()

  const auth = useCallback(() => {
    setIsOpen((prev) => !prev)
  }, [])

  return (
    <div className={classNames(s.navbar, className)}>
      <Button theme='background_inverted' onClick={auth}>{t('login')}</Button>
      <Modal isOpen={isOpen} onClose={auth}>dsdf sdf f sdf sdf sd ffffffffds  s fsdcsdc</Modal>
    </div>
  )
}
