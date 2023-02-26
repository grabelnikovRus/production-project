import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/theme-providers'
import { useEffect, type ReactNode } from 'react'

export const themeDecor = (theme: Theme) => {
  return function MyComp (Comp: Story): ReactNode {
    useEffect(() => {
      document.body.classList.add('app', theme)
      console.log(23)
      return () => { document.body.classList.remove('app', theme) }
    }, [])

    return <Comp />
  }
}
