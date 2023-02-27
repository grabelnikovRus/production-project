import { fireEvent, screen } from '@testing-library/react'
import { Counter } from './Counter'
import { renderTestComponent } from 'shared/lib/test/renderTestComponent'
import '@testing-library/jest-dom'

describe('Counter', () => {
  test('test on text button', () => {
    renderTestComponent(<Counter />, {})
    const btnIncrement = screen.getByTestId('btn-increment')
    const value = screen.getByTestId('counter-value')
    fireEvent.click(btnIncrement)
    expect(value).toHaveTextContent('1')
  })
})
