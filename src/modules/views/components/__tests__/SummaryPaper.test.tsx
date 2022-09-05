import '@testing-library/jest-dom'
import { render, screen } from '@testing-library/react'
import SummaryPaper from '../SummaryPaper'

describe('SummaryPaper', () => {
  it('renders unchanged', () => {
    const { container } = render(<SummaryPaper>Summary</SummaryPaper>)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly', () => {
    render(<SummaryPaper>Summary</SummaryPaper>)

    const text = screen.getByText(/summary/i)

    expect(text).toBeInTheDocument()
  })
})
