import { type State } from 'app/providers/store-providers'
import { type CounterSchema } from '../types/counterSchema'
import { createSelector } from '@reduxjs/toolkit'// функция из reselect

export const getCounter = (state: State): CounterSchema => state.counter

export const getCounterValue = createSelector(getCounter, (counter) => counter.value)
