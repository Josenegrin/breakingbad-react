import React from 'react'
import { render } from '@testing-library/react'
import Phrase from '../../../../components/common/Phrase'

jest.mock('react-i18next', () => {
  return {
    useTranslation: jest.fn(() => {
      return {
        t: (key) => key,
      }
    }),
  }
})

jest.mock('../../../../context/apiContext', () => {
  return {
    useApi: jest.fn(() => {
      return {
        phrase: [
          {
            quote_id: 26,
            quote:
              'Someone has to protect this family, from the man that protects this family.',
            author: 'Skyler White',
            series: 'Breaking Bad',
          },
        ],
        getNewPhrase: jest.fn(),
      }
    }),
  }
})
describe('<Phrase/>', () => {
  const renderComponent = () => render(<Phrase />)
  const { queryByTestId } = renderComponent()
  const phrase = queryByTestId('phrase')

  test('Waiting for it to show in the DOM', () => {
    expect(phrase).toBeTruthy()
  })
})
