import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import '@testing-library/jest-dom'
import { renderTestComponent } from 'shared/lib/test/renderTestComponent'

describe('Sidebar', () => {
  test('test seek id', () => {
    renderTestComponent(<Sidebar />).getByTestId('sidebar')
  })

  test('test collapsed sidebar', () => {
    renderTestComponent(<Sidebar />)
    const toggle = screen.getByTestId('sidebar__toggle')
    fireEvent.click(toggle)
    screen.debug()
    expect(screen.getByTestId('sidebar')).toHaveClass('block__collapsed')
  })
})
