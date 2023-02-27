import { render, type RenderResult } from '@testing-library/react'
import { type DeepPartial } from '@reduxjs/toolkit'
import { StoreProvider } from 'app/providers/store-providers'
import { type ReactNode } from 'react'
import { I18nextProvider } from 'react-i18next'
import { MemoryRouter } from 'react-router-dom'
import { type State } from 'app/providers/store-providers'
import i18n from 'shared/config/i18n/i18nForTest'

interface OptionsRender {
  path?: string
  initial?: DeepPartial<State>
}

const initialState = {
  counter: { value: 0 }
}

export const renderTestComponent = (
  Comp: ReactNode,
  {
    initial = initialState,
    path = '/'
  }: OptionsRender = {}
): RenderResult => {
  return render(
    <StoreProvider initial={initial as State}>
      <MemoryRouter initialEntries={[path]}>
        <I18nextProvider i18n={i18n}>
          {Comp}
        </I18nextProvider>
      </MemoryRouter>
    </StoreProvider>
  )
}

// MemoryRouter используется чтобы по умолчанию задать path
