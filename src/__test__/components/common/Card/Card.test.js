import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import userEvent from '@testing-library/user-event'
import Card from '../../../../components/common/Card/Card'

const character = {
  char_id: 1,
  name: 'Walter White',
  birthday: '09-07-1958',
  occupation: ['High School Chemistry Teacher', 'Meth King Pin'],
  img: 'https://images.amcnetworks.com/amc.com/wp-content/uploads/2015/04/cast_bb_700x1000_walter-white-lg.jpg',
  status: 'Presumed dead',
  nickname: 'Heisenberg',
  appearance: [1, 2, 3, 4, 5],
  portrayed: 'Bryan Cranston',
  category: 'Breaking Bad',
  better_call_saul_appearance: [],
}

describe('<Card/>', () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <Card character={character} />
      </BrowserRouter>
    )
  const { queryByTestId } = renderComponent()
  const card = queryByTestId('card')
  test('Waiting for it to show in the DOM', () => {
    expect(card).toBeTruthy()
  })

  test('Clicking on the button', () => {
    userEvent.click(card)
  })
})
