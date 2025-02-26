import { render, screen } from '@testing-library/react'
import { Button } from '@/components/ui/button'

describe('Button', () => {
  it('renders a button with default variant and size', () => {
    render(<Button>Click me</Button>)
    const button = screen.getByRole('button', { name: /click me/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-primary')
    expect(button).toHaveClass('h-9')
  })

  it('renders a button with custom variant and size', () => {
    render(
      <Button variant="destructive" size="lg">
        Delete
      </Button>
    )
    const button = screen.getByRole('button', { name: /delete/i })
    expect(button).toBeInTheDocument()
    expect(button).toHaveClass('bg-destructive')
    expect(button).toHaveClass('h-10')
  })

  it('renders as a child component when asChild is true', () => {
    render(
      <Button asChild>
        <a href="#">Link Button</a>
      </Button>
    )
    const link = screen.getByRole('link', { name: /link button/i })
    expect(link).toBeInTheDocument()
    expect(link).toHaveClass('inline-flex')
  })

  it('applies custom className', () => {
    render(
      <Button className="custom-class">
        Custom Button
      </Button>
    )
    const button = screen.getByRole('button', { name: /custom button/i })
    expect(button).toHaveClass('custom-class')
  })
})