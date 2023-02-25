import { render, type RenderResult } from '@testing-library/react'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import i18n from 'shared/config/i18n/i18nForTest'

export const renderTestComponent = (Comp: ReactNode, path = '/'): RenderResult => {
  return render(
    <MemoryRouter initialEntries={[path]}>
      <I18nextProvider i18n={i18n}>
        {Comp}
      </I18nextProvider>
    </MemoryRouter>
  )
}

// MemoryRouter используется чтобы по умолчанию задать path
