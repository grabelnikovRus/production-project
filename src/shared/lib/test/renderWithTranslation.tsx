import { render, type RenderResult } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import i18n from 'shared/config/i18n/i18nForTest'

export const renderWithTranslation = (Comp: ReactNode): RenderResult => {
  return render(<I18nextProvider i18n={i18n}>
    {Comp}
  </I18nextProvider>)
}
