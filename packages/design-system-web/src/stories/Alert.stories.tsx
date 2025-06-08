import type { Meta, StoryObj } from '@storybook/react'
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert'
import { AlertCircle, AlertTriangle, CheckCircle2, Info } from 'lucide-react'

const meta: Meta<typeof Alert> = {
  title: 'Components/Alert',
  component: Alert,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'destructive', 'success', 'warning'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Alert>
      <Info className="h-4 w-4" />
      <AlertTitle>Level AI System Update</AlertTitle>
      <AlertDescription>
        Your conversation analytics dashboard has been updated with new features.
      </AlertDescription>
    </Alert>
  ),
}

export const Destructive: Story = {
  render: () => (
    <Alert variant="destructive">
      <AlertCircle className="h-4 w-4" />
      <AlertTitle>Error</AlertTitle>
      <AlertDescription>
        Failed to connect to the Level AI server. Please check your connection and try again.
      </AlertDescription>
    </Alert>
  ),
}

export const Success: Story = {
  render: () => (
    <Alert variant="success">
      <CheckCircle2 className="h-4 w-4" />
      <AlertTitle>Success!</AlertTitle>
      <AlertDescription>
        Your AI model has been successfully deployed and is ready to handle conversations.
      </AlertDescription>
    </Alert>
  ),
}

export const Warning: Story = {
  render: () => (
    <Alert variant="warning">
      <AlertTriangle className="h-4 w-4" />
      <AlertTitle>Warning</AlertTitle>
      <AlertDescription>
        Your API usage is approaching the monthly limit. Consider upgrading your plan.
      </AlertDescription>
    </Alert>
  ),
}

export const SimpleAlert: Story = {
  args: {
    variant: 'default',
  },
  render: (args) => (
    <Alert {...args}>
      <AlertDescription>
        This is a simple alert without a title or icon.
      </AlertDescription>
    </Alert>
  ),
}

export const MultipleAlerts: Story = {
  render: () => (
    <div className="space-y-4 w-[400px]">
      <Alert>
        <Info className="h-4 w-4" />
        <AlertTitle>New Feature Available</AlertTitle>
        <AlertDescription>
          Sentiment analysis is now available in your dashboard.
        </AlertDescription>
      </Alert>
      
      <Alert variant="success">
        <CheckCircle2 className="h-4 w-4" />
        <AlertTitle>Training Complete</AlertTitle>
        <AlertDescription>
          Your custom model finished training with 98.5% accuracy.
        </AlertDescription>
      </Alert>
      
      <Alert variant="warning">
        <AlertTriangle className="h-4 w-4" />
        <AlertTitle>High Volume Detected</AlertTitle>
        <AlertDescription>
          Conversation volume is 150% above average. Consider scaling resources.
        </AlertDescription>
      </Alert>
      
      <Alert variant="destructive">
        <AlertCircle className="h-4 w-4" />
        <AlertTitle>Integration Failed</AlertTitle>
        <AlertDescription>
          Unable to connect to Slack. Please check your API credentials.
        </AlertDescription>
      </Alert>
    </div>
  ),
}