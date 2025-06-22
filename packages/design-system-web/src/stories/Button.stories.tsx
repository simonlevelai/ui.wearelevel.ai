import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/ui/button'

const meta: Meta<typeof Button> = {
  title: 'Components/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'outline', 'secondary', 'ghost', 'link', 'success'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg', 'icon'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Primary: Story = {
  args: {
    children: 'Button',
    variant: 'default',
  },
}

export const Secondary: Story = {
  args: {
    children: 'Button',
    variant: 'secondary',
  },
}

export const Destructive: Story = {
  args: {
    children: 'Button',
    variant: 'destructive',
  },
}

export const Success: Story = {
  args: {
    children: 'Button',
    variant: 'success',
  },
}

export const Outline: Story = {
  args: {
    children: 'Button',
    variant: 'outline',
  },
}

export const Ghost: Story = {
  args: {
    children: 'Button',
    variant: 'ghost',
  },
}

export const Link: Story = {
  args: {
    children: 'Button',
    variant: 'link',
  },
}

export const Small: Story = {
  args: {
    children: 'Button',
    size: 'sm',
  },
}

export const Large: Story = {
  args: {
    children: 'Button',
    size: 'lg',
  },
}

export const Icon: Story = {
  args: {
    children: '⭐',
    size: 'icon',
  },
}

export const AllVariants: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-4">
      <div className="flex gap-4 items-center">
        <Button variant="default">Primary</Button>
        <Button variant="secondary">Secondary</Button>
        <Button variant="destructive">Destructive</Button>
        <Button variant="success">Success</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="outline">Outline</Button>
        <Button variant="ghost">Ghost</Button>
        <Button variant="link">Link</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button size="sm">Small</Button>
        <Button size="default">Default</Button>
        <Button size="lg">Large</Button>
        <Button size="icon">⭐</Button>
      </div>
    </div>
  ),
}

export const WithBrutalistShadows: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <h3 className="text-lg font-medium">Brutalist Shadow System</h3>
      <div className="flex gap-4 items-center">
        <Button variant="default" className="shadow-sm">shadow-sm</Button>
        <Button variant="secondary" className="shadow-md">shadow-md</Button>
        <Button variant="success" className="shadow-lg">shadow-lg</Button>
        <Button variant="destructive" className="shadow-xl">shadow-xl</Button>
      </div>
      <div className="flex gap-4 items-center">
        <Button variant="outline">Hover for shadows</Button>
        <Button variant="default">Click for press effect</Button>
      </div>
    </div>
  ),
}