import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Navbar from '../../../../components/Layout/Navbar'

jest.mock('react-i18next', () => {
  return {
    useTranslation: jest.fn(() => {
      return {
        t: (key) => key,
      }
    }),
  }
})

describe('<Navbar/>', () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Navbar />
      </BrowserRouter>
    )
  const { queryByTestId } = renderComponent()
  const navbar = queryByTestId('navbar')

  test('Waiting for it to show in the DOM', () => {
    expect(navbar).toBeTruthy()
  })
})
