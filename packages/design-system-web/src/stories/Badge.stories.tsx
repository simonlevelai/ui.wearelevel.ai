import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../components/ui/badge'

const meta = {
  title: 'Components/Badge',
  component: Badge,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    children: 'Badge',
  },
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'secondary', 'destructive', 'success', 'warning', 'outline', 'ghost'],
    },
    size: {
      control: 'select',
      options: ['sm', 'default', 'lg'],
    },
  },
} satisfies Meta<typeof Badge>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    children: 'Default',
  },
}

export const Secondary: Story = {
  args: {
    variant: 'secondary',
    children: 'Secondary',
  },
}

export const Destructive: Story = {
  args: {
    variant: 'destructive',
    children: 'Destructive',
  },
}

export const Outline: Story = {
  args: {
    variant: 'outline',
    children: 'Outline',
  },
}

export const Success: Story = {
  args: {
    variant: 'success',
    children: 'Success',
  },
}

export const Warning: Story = {
  args: {
    variant: 'warning',
    children: 'Warning',
  },
}

export const Ghost: Story = {
  args: {
    variant: 'ghost',
    children: 'Ghost',
  },
}

export const AllVariants: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>Default</Badge>
      <Badge variant="secondary">Secondary</Badge>
      <Badge variant="destructive">Destructive</Badge>
      <Badge variant="success">Success</Badge>
      <Badge variant="warning">Warning</Badge>
      <Badge variant="outline">Outline</Badge>
      <Badge variant="ghost">Ghost</Badge>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex flex-wrap items-center gap-4">
      <div className="flex flex-col items-center gap-2">
        <Badge size="sm">Small</Badge>
        <span className="text-xs text-muted-foreground">Small</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Badge size="default">Default</Badge>
        <span className="text-xs text-muted-foreground">Default</span>
      </div>
      <div className="flex flex-col items-center gap-2">
        <Badge size="lg">Large</Badge>
        <span className="text-xs text-muted-foreground">Large</span>
      </div>
    </div>
  ),
}

export const WithIcon: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge>
        <svg
          className="mr-1 h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M5 13l4 4L19 7"
          />
        </svg>
        Verified
      </Badge>
      <Badge variant="destructive">
        <svg
          className="mr-1 h-3 w-3"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
          />
        </svg>
        Critical
      </Badge>
    </div>
  ),
}

export const StatusBadges: Story = {
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Badge variant="success">Active</Badge>
      <Badge variant="warning">Pending</Badge>
      <Badge variant="destructive">Expired</Badge>
      <Badge variant="secondary">Draft</Badge>
      <Badge variant="outline">Archived</Badge>
    </div>
  ),
}

export const CountBadges: Story = {
  render: () => (
    <div className="flex items-center gap-4">
      <span className="text-sm">Notifications</span>
      <Badge>9</Badge>
      <span className="text-sm">Messages</span>
      <Badge variant="destructive">99+</Badge>
    </div>
  ),
}

export const BrutalistShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-6">
      <h3 className="text-lg font-display font-bold">Badge System with Brutalist Shadows</h3>
      
      <div className="space-y-4">
        <div>
          <h4 className="text-sm font-medium mb-2">Status Indicators</h4>
          <div className="flex gap-2">
            <Badge variant="success" size="lg">✓ Verified Account</Badge>
            <Badge variant="warning" size="lg">⚠ Pending Review</Badge>
            <Badge variant="destructive" size="lg">✗ Access Denied</Badge>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Level AI Metrics</h4>
          <div className="flex gap-2">
            <Badge variant="default">Primary Model</Badge>
            <Badge variant="secondary">Backup Ready</Badge>
            <Badge variant="ghost">Draft Config</Badge>
          </div>
        </div>
        
        <div>
          <h4 className="text-sm font-medium mb-2">Interactive Badges</h4>
          <div className="flex gap-2">
            <Badge className="cursor-pointer hover:scale-105 transition-transform">Click Me</Badge>
            <Badge variant="outline" className="cursor-pointer hover:scale-105 transition-transform">Hover Effect</Badge>
          </div>
        </div>
      </div>
    </div>
  ),
}