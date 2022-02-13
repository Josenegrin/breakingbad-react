import React from 'react'
import { render } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom'
import Header from '../../../../components/Layout/Header'

jest.mock('react-i18next', () => {
  return {
    useTranslation: jest.fn(() => {
      return {
        t: (key) => key,
      }
    }),
  }
})

describe('<Header/>', () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Header />
      </BrowserRouter>
    )
  const { queryByTestId } = renderComponent()
  const header = queryByTestId('header')

  test('Waiting for it to show in the DOM', () => {
    expect(header).toBeTruthy()
  })
})
