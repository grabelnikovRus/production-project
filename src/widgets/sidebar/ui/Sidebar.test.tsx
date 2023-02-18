import { fireEvent, screen } from '@testing-library/react'
import { Sidebar } from './Sidebar'
import '@testing-library/jest-dom'
import { renderWithTranslation } from 'shared/lib/test/renderWithTranslation'

describe('Sidebar', () => {
  test('test seek id', () => {
    renderWithTranslation(<Sidebar />).getByTestId('sidebar')
  })

  test('test collapsed sidebar', () => {
    renderWithTranslation(<Sidebar />)
    const toggle = screen.getByTestId('sidebar__toggle')
    fireEvent.click(toggle)
    screen.debug()
    expect(screen.getByTestId('sidebar')).toHaveClass('block__collapsed')
  })
})
