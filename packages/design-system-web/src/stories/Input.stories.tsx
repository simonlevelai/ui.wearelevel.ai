import type { Meta, StoryObj } from '@storybook/react'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'

const meta: Meta<typeof Input> = {
  title: 'Components/Input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'error', 'success', 'warning'],
    },
    type: {
      control: 'select',
      options: ['text', 'email', 'password', 'number', 'search', 'url'],
    },
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Enter text...',
  },
}

export const Email: Story = {
  args: {
    type: 'email',
    placeholder: 'Enter email...',
  },
}

export const Password: Story = {
  args: {
    type: 'password',
    placeholder: 'Enter password...',
  },
}

export const Disabled: Story = {
  args: {
    placeholder: 'Disabled input',
    disabled: true,
  },
}

export const WithValue: Story = {
  args: {
    value: 'Pre-filled value',
    placeholder: 'Enter text...',
  },
}

export const Error: Story = {
  args: {
    variant: 'error',
    placeholder: 'Enter valid email...',
    value: 'invalid-email',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    placeholder: 'Enter text...',
    value: 'Valid input!',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    placeholder: 'Enter text...',
    value: 'Check this input',
  },
}

export const AllVariants: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-4 w-80">
      <div>
        <Label htmlFor="default">Default</Label>
        <Input id="default" placeholder="Default input..." />
      </div>
      <div>
        <Label htmlFor="error">Error State</Label>
        <Input id="error" variant="error" placeholder="Error input..." value="invalid@" />
      </div>
      <div>
        <Label htmlFor="success">Success State</Label>
        <Input id="success" variant="success" placeholder="Success input..." value="valid@example.com" />
      </div>
      <div>
        <Label htmlFor="warning">Warning State</Label>
        <Input id="warning" variant="warning" placeholder="Warning input..." value="check this" />
      </div>
      <div>
        <Label htmlFor="disabled">Disabled</Label>
        <Input id="disabled" disabled placeholder="Disabled input..." />
      </div>
    </div>
  ),
}

export const FormExample: Story = {
  args: {},
  render: () => (
    <div className="flex flex-col gap-6 w-96 p-6 border border-border rounded-lg shadow-md">
      <h3 className="text-lg font-medium">Contact Form</h3>
      <div className="flex flex-col gap-4">
        <div>
          <Label htmlFor="name">Full Name</Label>
          <Input id="name" placeholder="John Doe" />
        </div>
        <div>
          <Label htmlFor="email-form">Email</Label>
          <Input id="email-form" type="email" variant="success" placeholder="john@example.com" value="john@example.com" />
        </div>
        <div>
          <Label htmlFor="phone">Phone</Label>
          <Input id="phone" variant="warning" placeholder="+1 (555) 123-4567" value="555-123" />
        </div>
        <div>
          <Label htmlFor="message">Message</Label>
          <Input id="message" variant="error" placeholder="Your message..." value="too short" />
        </div>
      </div>
    </div>
  ),
}