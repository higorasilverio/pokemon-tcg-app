import { screen } from '@testing-library/dom'
import '@testing-library/jest-dom'
import React from 'react'
import Home from '../src/pages/index'
import { renderWithProviders } from '../src/utils/renderWithProvider'

jest.mock('next/router', () => ({
  useRouter() {
    return {
      locale: 'pt-BR'
    }
  }
}))

describe('Home', () => {
  it('renders homepage unchanged', () => {
    const { container } = renderWithProviders(<Home />)
    expect(container).toMatchSnapshot()
  })

  it('renders a heading', () => {
    renderWithProviders(<Home />)

    const heading = screen.getByText(/pokémon tcg app/i)

    expect(heading).toBeInTheDocument()
  })

  it('renders location correctly', () => {
    const result = renderWithProviders(<Home />)
    const location = result.container.querySelector('p')

    expect(location).toHaveTextContent('Location: pt-BR')
  })
})
