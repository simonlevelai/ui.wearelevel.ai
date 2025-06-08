import { render, screen } from '@testing-library/react'
import { Button } from '../button'

describe('Button', () => {
  it('renders correctly', () => {
    render(<Button>Test Button</Button>)
    expect(screen.getByRole('button', { name: /test button/i })).toBeInTheDocument()
  })

  it('applies default variant classes', () => {
    render(<Button>Default Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-sunshine', 'text-earthstone')
  })

  it('applies secondary variant classes', () => {
    render(<Button variant="secondary">Secondary Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-amberglow', 'text-earthstone')
  })

  it('applies success variant classes', () => {
    render(<Button variant="success">Success Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('bg-terragreen', 'text-paledawn')
  })

  it('applies outline variant classes', () => {
    render(<Button variant="outline">Outline Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('border', 'border-earthstone', 'text-earthstone')
  })

  it('applies small size classes', () => {
    render(<Button size="sm">Small Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-9', 'px-3')
  })

  it('applies large size classes', () => {
    render(<Button size="lg">Large Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toHaveClass('h-11', 'px-8')
  })

  it('is disabled when disabled prop is true', () => {
    render(<Button disabled>Disabled Button</Button>)
    const button = screen.getByRole('button')
    expect(button).toBeDisabled()
    expect(button).toHaveClass('disabled:pointer-events-none', 'disabled:opacity-50')
  })
})