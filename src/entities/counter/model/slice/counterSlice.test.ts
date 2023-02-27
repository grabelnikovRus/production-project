import { counterActions, counterReducer } from './counterSlice'

describe('test counterSlice', () => {
  test('decrement', () => {
    expect(counterReducer({ value: 3 }, counterActions.decrement())).toEqual({ value: 2 })
  })
  test('increment', () => {
    expect(counterReducer({ value: 3 }, counterActions.increment())).toEqual({ value: 4 })
  })
  test('state undefined', () => {
    expect(counterReducer(undefined, counterActions.increment())).toEqual({ value: 1 })
  })
})
