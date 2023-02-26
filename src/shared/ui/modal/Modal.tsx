import {
  type ReactNode,
  type FC,
  type MouseEvent,
  useState,
  useEffect,
  useRef,
  useCallback
} from 'react'
import { classNames } from 'shared/lib/classNames'
import { Portal } from '../portal/Portal'

import s from './Modal.module.scss'

interface ModalProps {
  children: ReactNode
  isOpen: boolean
  onClose: () => void
  container?: HTMLElement
}

const DELAY_ANIMATION = 300

export const Modal: FC<ModalProps> = ({ children, isOpen, onClose, container }) => {
  const [isClosing, setIsClosing] = useState<boolean>(false)
  const timer = useRef<ReturnType<typeof setTimeout> | null>(null)

  const onClickContent = (e: MouseEvent<HTMLDivElement>): void => {
    e.stopPropagation()
  }

  const onClickOverlay = useCallback((): void => {
    setIsClosing(true)
    timer.current = setTimeout(() => {
      setIsClosing(false)
      onClose()
    }, DELAY_ANIMATION)
  }, [onClose])

  const pressEsc = useCallback((e: KeyboardEvent): void => {
    if (e.key === 'Escape') onClickOverlay()
  }, [onClickOverlay])

  const modsModal = {
    [s.modal__open]: isOpen
  }

  const modsContent = {
    [s.content__open]: isOpen,
    [s.content__closing]: isClosing
  }

  useEffect(() => {
    if (isOpen) window.addEventListener('keydown', pressEsc)
    return () => {
      window.removeEventListener('keydown', pressEsc)
      timer.current !== null && clearTimeout(timer.current)
    }
  }, [isOpen, pressEsc])

  return (
		<Portal element={container}>
			<div className={classNames(s.modal, modsModal)}>
				<div className={s.overlay} onClick={onClickOverlay}>
					<div className={classNames(s.content, modsContent)} onClick={onClickContent}>
						{children}
					</div>
				</div>
			</div>
		</Portal>
  )
}
