import '@testing-library/jest-dom'
import { render } from '@testing-library/react'
import Loading from '../Loading'

describe('Loading', () => {
  it('renders unchanged', () => {
    const { container } = render(<Loading />)

    expect(container).toMatchSnapshot()
  })

  it('should render correctly', () => {
    const { container } = render(<Loading />)

    const image = container.querySelector('img')

    expect(image).toBeInTheDocument()
  })
})
