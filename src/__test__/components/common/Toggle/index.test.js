import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Toggle from '../../../../components/Layout/Toggle'

jest.mock('react-i18next', () => {
  return {
    useTranslation: jest.fn(() => {
      return {
        i18n: (key) => key,
      }
    }),
  }
})

describe('<Toggle/>', () => {
  const renderComponent = () => render(<Toggle />)
  const { queryByTestId } = renderComponent()
  const toggle = queryByTestId('toggle')

  test('Waiting for it to show in the DOM', () => {
    expect(toggle).toBeTruthy()
  })
  test('Clicking on the toggle button', () => {
    userEvent.click(toggle)
  })
})
