import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import DetailPaper from '../DetailPaper'

describe('DetailPaper', () => {
  it('renders unchanged', () => {
    const { container } = render(<DetailPaper>Detail</DetailPaper>)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly', () => {
    render(<DetailPaper>Detail</DetailPaper>)

    const text = screen.getByText(/detail/i)

    expect(text).toBeInTheDocument()
  })
})
