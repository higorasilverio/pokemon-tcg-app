import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import Layout from '../Layout'

describe('Layout', () => {
  it('renders unchanged', () => {
    const { container } = render(<Layout>Test</Layout>)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly', () => {
    render(<Layout>Test</Layout>)

    const text = screen.getByText(/test/i)

    expect(text).toBeInTheDocument()
  })
})
