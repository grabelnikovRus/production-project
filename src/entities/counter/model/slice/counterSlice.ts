import { createSlice } from '@reduxjs/toolkit'

export const counterSlice = createSlice({
  name: 'counter',
  initialState: { value: 0 },
  reducers: {
    increment: (state) => {
      console.log(1)
      state.value += 1
    },
    decrement: (state) => {
      state.value -= 1
    }
  }
})

export const { actions: counterActions, reducer: counterReducer } = counterSlice
