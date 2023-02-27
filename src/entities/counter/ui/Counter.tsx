import { type FC } from 'react'
import { Button } from 'shared/ui'
import { useDispatch, useSelector } from 'react-redux'
import { counterActions } from '../model/slice/counterSlice'
import { getCounterValue } from '../model/selectors/selectors'

export const Counter: FC = () => {
  const dispatch = useDispatch()
  const value = useSelector(getCounterValue)

  const increment = (): void => {
    dispatch(counterActions.increment())
  }

  const decrement = (): void => {
    dispatch(counterActions.decrement())
  }

  return (
    <div>
      <h3 data-testid='counter-value'>{value}</h3>
      <Button onClick={increment} data-testid='btn-increment'>incremet</Button>
      <Button onClick={decrement} data-testid='btn-decrement'>decrement</Button>
    </div>
  )
}
