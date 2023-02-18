import { render, screen } from '@testing-library/react'
import { Button } from './Button'
import '@testing-library/jest-dom'

describe('Button', () => {
  test('test on text button', () => {
    render(<Button>TEST</Button>)
    expect(screen.getByText('TEST')).toBeInTheDocument()
  })

  test('test on class', () => {
    render(<Button theme="clear">TEST</Button>)
    expect(screen.getByText('TEST')).toHaveClass('btn__clear')
    screen.debug()
  })
})
