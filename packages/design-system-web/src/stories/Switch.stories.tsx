import type { Meta, StoryObj } from '@storybook/react'
import { Switch } from '../components/ui/switch'

const meta: Meta<typeof Switch> = {
  title: 'Components/Switch',
  component: Switch,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    disabled: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="switch" />
      <label htmlFor="switch" className="text-sm font-medium">
        Enable notifications
      </label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Switch id="switch-checked" defaultChecked />
      <label htmlFor="switch-checked" className="text-sm font-medium">
        This is enabled
      </label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Switch id="switch-disabled" disabled />
        <label htmlFor="switch-disabled" className="text-sm font-medium text-muted-foreground">
          Disabled switch
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Switch id="switch-disabled-checked" disabled defaultChecked />
        <label htmlFor="switch-disabled-checked" className="text-sm font-medium text-muted-foreground">
          Disabled and enabled
        </label>
      </div>
    </div>
  ),
}

export const LevelAIUseCase: Story = {
  render: () => (
    <div className="space-y-8 w-[500px]">
      <div>
        <h3 className="text-lg font-semibold mb-4 font-display text-earthstone">
          AI Features
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label htmlFor="ai-responses" className="text-sm font-medium">
                AI Response Suggestions
              </label>
              <p className="text-xs text-muted-foreground">
                Get AI-powered response suggestions during conversations
              </p>
            </div>
            <Switch id="ai-responses" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label htmlFor="sentiment" className="text-sm font-medium">
                Real-time Sentiment Analysis
              </label>
              <p className="text-xs text-muted-foreground">
                Monitor customer sentiment during live conversations
              </p>
            </div>
            <Switch id="sentiment" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label htmlFor="auto-summary" className="text-sm font-medium">
                Automatic Conversation Summaries
              </label>
              <p className="text-xs text-muted-foreground">
                Generate summaries at the end of conversations
              </p>
            </div>
            <Switch id="auto-summary" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 font-display text-earthstone">
          Notifications & Alerts
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label htmlFor="urgent-alerts" className="text-sm font-medium">
                Urgent Conversation Alerts
              </label>
              <p className="text-xs text-muted-foreground">
                Get notified immediately for high-priority conversations
              </p>
            </div>
            <Switch id="urgent-alerts" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label htmlFor="performance-reports" className="text-sm font-medium">
                Daily Performance Reports
              </label>
              <p className="text-xs text-muted-foreground">
                Receive daily email reports with key metrics
              </p>
            </div>
            <Switch id="performance-reports" defaultChecked />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label htmlFor="slack-integration" className="text-sm font-medium">
                Slack Integration
              </label>
              <p className="text-xs text-muted-foreground">
                Send notifications to your Slack workspace
              </p>
            </div>
            <Switch id="slack-integration" />
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 font-display text-earthstone">
          Privacy & Security
        </h3>
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label htmlFor="data-retention" className="text-sm font-medium">
                Extended Data Retention
              </label>
              <p className="text-xs text-muted-foreground">
                Keep conversation data for 2 years instead of 1 year
              </p>
            </div>
            <Switch id="data-retention" />
          </div>
          
          <div className="flex items-center justify-between">
            <div className="space-y-0.5">
              <label htmlFor="encryption" className="text-sm font-medium">
                End-to-End Encryption
              </label>
              <p className="text-xs text-muted-foreground">
                Enable enhanced encryption for sensitive conversations
              </p>
            </div>
            <Switch id="encryption" defaultChecked />
          </div>
        </div>
      </div>
    </div>
  ),
}