import { getCounter, getCounterValue } from './selectors'
import { type DeepPartial } from '@reduxjs/toolkit'
import { type State } from 'app/providers/store-providers'

describe('counter selectors', () => {
  const state: DeepPartial<State> = { counter: { value: 3 } }
  test('return counter obj', () => {
    expect(getCounter(state as State)).toEqual({ value: 3 })
  })
  test('return counter value', () => {
    expect(getCounterValue(state as State)).toBe(3)
  })
})
// DeepPartial позволяет не указывать всю оставшуюся часть стейта
