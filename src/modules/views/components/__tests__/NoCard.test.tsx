import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import NoCards from '../NoCards'

describe('NoCards', () => {
  it('renders unchanged', () => {
    const { container } = render(<NoCards />)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const { container } = render(<NoCards />)

    const image = container.querySelector('img')
    const text = screen.getByText(/not found.../i)

    expect(image).toBeInTheDocument()
    expect(text).toBeInTheDocument()
  })
})
