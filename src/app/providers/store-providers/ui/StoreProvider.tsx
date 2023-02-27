import { type FC, type ReactNode } from 'react'
import { Provider } from 'react-redux'
import { type State } from '../config/state'
import { createReduxStore } from '../config/store'

interface StoreProviderProps {
  children: ReactNode
  initial: State
}

export const StoreProvider: FC<StoreProviderProps> = ({ children, initial }) => {
  const store = createReduxStore(initial)

  return (
    <Provider store={store}>
        {children}
    </Provider>
  )
}
