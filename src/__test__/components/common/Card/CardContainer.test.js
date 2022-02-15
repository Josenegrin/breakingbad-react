import { render } from '@testing-library/react'
import React from 'react'
import { BrowserRouter } from 'react-router-dom'
import CardsContainer from '../../../../components/common/Card'

jest.mock('../../../../context/apiContext', () => {
  return {
    useApi: jest.fn(() => {
      return {
        charactersDB: [
          {
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
          },
          {
            char_id: 2,
            name: 'Jesse Pinkman',
            birthday: '09-24-1984',
            occupation: ['Meth Dealer'],
            img: 'https://vignette.wikia.nocookie.net/breakingbad/images/9/95/JesseS5.jpg/revision/latest?cb=20120620012441',
            status: 'Alive',
            nickname: "Cap n' Cook",
            appearance: [1, 2, 3, 4, 5],
            portrayed: 'Aaron Paul',
            category: 'Breaking Bad',
            better_call_saul_appearance: [],
          },
        ],
        isInfoApi: {
          character: {},
        },
      }
    }),
  }
})

describe('<CardsContainer/>', () => {
  const renderComponent = () =>
    render(
      <BrowserRouter>
        <CardsContainer />
      </BrowserRouter>
    )

  const { queryByTestId } = renderComponent()
  const cardsContainer = queryByTestId('cards-container')

  test('Waiting for it to show in the DOM', () => {
    expect(cardsContainer).toBeTruthy()
  })
})
