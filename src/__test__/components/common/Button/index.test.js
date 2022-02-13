import React from 'react'
import { render } from '@testing-library/react'
import userEvent from '@testing-library/user-event'
import Button from '../../../../components/common/Button'

describe('<Button/>', () => {
  const renderComponent = () => render(<Button>Mensaje</Button>)
  const { queryByTestId } = renderComponent()
  const button = queryByTestId('button')

  test('Waiting for it to show in the DOM', () => {
    expect(button).toBeTruthy()
  })

  test('Clicking on the button', () => {
    userEvent.click(button)
  })
})
