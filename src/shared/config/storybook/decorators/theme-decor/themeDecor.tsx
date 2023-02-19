import { type Story } from '@storybook/react'
import { type Theme } from 'app/providers/theme-providers'
import { type ReactNode } from 'react'

export const themeDecor = (theme: Theme) => {
  return function MyComp (Comp: Story): ReactNode {
    return <div className={`app ${theme}`}><Comp /></div>
  }
}
