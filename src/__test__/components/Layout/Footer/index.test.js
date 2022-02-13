import React from 'react'
import { render } from '@testing-library/react'
import Footer from '../../../../components/Layout/Footer'

jest.mock('react-i18next', () => {
  return {
    useTranslation: jest.fn(() => {
      return {
        t: (key) => key,
      }
    }),
  }
})

describe('<Footer/>', () => {
  const renderComponent = () => render(<Footer />)
  const { queryByTestId } = renderComponent()
  const footer = queryByTestId('footer')

  test('Waiting for it to show in the DOM', () => {
    expect(footer).toBeTruthy()
  })
})
