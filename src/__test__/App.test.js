import { render, screen } from '@testing-library/react'
import React from 'react'
import userEvent from '@testing-library/user-event'
import App from '../App'
import '@testing-library/jest-dom/extend-expect'

describe('Testing the app flow <App />', () => {
  render(<App />)

  test('Checking which App mounts the Header, Main and Footer', () => {
    expect(screen.getByTestId('header')).toBeInTheDocument()
    expect(screen.getByText('Inicio')).toBeInTheDocument()
    expect(screen.getByTestId('main')).toBeInTheDocument()
    expect(screen.getByText('Aplicación de Breaking Bad')).toBeInTheDocument()
    expect(screen.getByTestId('footer')).toBeInTheDocument()
    expect(screen.getByText('Diseñado por Jose Negrin')).toBeInTheDocument()
    userEvent.click(screen.getByTestId('toggle'))
  })
})
