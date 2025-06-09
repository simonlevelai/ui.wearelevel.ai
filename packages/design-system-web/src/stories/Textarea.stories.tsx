import type { Meta, StoryObj } from '@storybook/react'
import { Textarea } from '../components/ui/textarea'
import { Label } from '../components/ui/label'

const meta = {
  title: 'Components/Textarea',
  component: Textarea,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    placeholder: 'Type your message here...',
  },
} satisfies Meta<typeof Textarea>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    placeholder: 'Type your message here...',
  },
}

export const WithLabel: Story = {
  render: () => (
    <div className="grid w-full gap-1.5 max-w-sm">
      <Label htmlFor="message">Your message</Label>
      <Textarea placeholder="Type your message here..." id="message" />
    </div>
  ),
}

export const Disabled: Story = {
  args: {
    disabled: true,
    defaultValue: 'This textarea is disabled',
  },
}

export const WithError: Story = {
  args: {
    error: true,
    placeholder: 'This field has an error',
  },
}

export const CustomRows: Story = {
  args: {
    rows: 5,
    placeholder: 'This textarea has 5 rows',
  },
}

export const WithDefaultValue: Story = {
  args: {
    defaultValue: 'This is some default text that appears when the component loads.',
  },
}

export const Resizable: Story = {
  args: {
    className: 'resize-y',
    placeholder: 'You can resize this textarea vertically',
  },
}

export const MaxLength: Story = {
  render: () => (
    <div className="grid w-full gap-1.5 max-w-sm">
      <Label htmlFor="message-limited">Message (max 100 characters)</Label>
      <Textarea 
        placeholder="Type your message here..." 
        id="message-limited"
        maxLength={100}
      />
      <p className="text-sm text-muted-foreground">
        Maximum 100 characters allowed.
      </p>
    </div>
  ),
}