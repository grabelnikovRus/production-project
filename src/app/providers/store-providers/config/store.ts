import { configureStore } from '@reduxjs/toolkit'
import { counterReducer } from 'entities/counter'
import { type State } from './state'

export const createReduxStore = (initial: State): ReturnType<typeof configureStore> =>
  configureStore<State>({
    reducer: {
      counter: counterReducer
    },
    devTools: _IS_DEV_ || false,
    preloadedState: initial
  })
