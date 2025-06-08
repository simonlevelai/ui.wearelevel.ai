import type { Meta, StoryObj } from '@storybook/react'
import { Checkbox } from '../components/ui/checkbox'

const meta: Meta<typeof Checkbox> = {
  title: 'Components/Checkbox',
  component: Checkbox,
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
      <Checkbox id="terms" />
      <label
        htmlFor="terms"
        className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
      >
        Accept terms and conditions
      </label>
    </div>
  ),
}

export const Checked: Story = {
  render: () => (
    <div className="flex items-center space-x-2">
      <Checkbox id="checked" defaultChecked />
      <label htmlFor="checked" className="text-sm font-medium leading-none">
        This is already checked
      </label>
    </div>
  ),
}

export const Disabled: Story = {
  render: () => (
    <div className="space-y-4">
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled" disabled />
        <label htmlFor="disabled" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Disabled checkbox
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <Checkbox id="disabled-checked" disabled defaultChecked />
        <label htmlFor="disabled-checked" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
          Disabled and checked
        </label>
      </div>
    </div>
  ),
}

export const LevelAIUseCase: Story = {
  render: () => (
    <div className="space-y-6 w-[400px]">
      <div>
        <h3 className="text-lg font-semibold mb-4 font-display text-earthstone">
          Conversation Settings
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="auto-assign" defaultChecked />
            <label htmlFor="auto-assign" className="text-sm font-medium">
              Auto-assign conversations to available agents
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="sentiment-analysis" defaultChecked />
            <label htmlFor="sentiment-analysis" className="text-sm font-medium">
              Enable real-time sentiment analysis
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="escalation" />
            <label htmlFor="escalation" className="text-sm font-medium">
              Automatic escalation for negative sentiment
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="transcription" defaultChecked />
            <label htmlFor="transcription" className="text-sm font-medium">
              Save conversation transcripts
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 font-display text-earthstone">
          Notification Preferences
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="email-alerts" defaultChecked />
            <label htmlFor="email-alerts" className="text-sm font-medium">
              Email alerts for urgent conversations
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="slack-integration" />
            <label htmlFor="slack-integration" className="text-sm font-medium">
              Slack notifications for team updates
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="daily-summary" defaultChecked />
            <label htmlFor="daily-summary" className="text-sm font-medium">
              Daily performance summary
            </label>
          </div>
        </div>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 font-display text-earthstone">
          AI Model Features
        </h3>
        <div className="space-y-3">
          <div className="flex items-center space-x-2">
            <Checkbox id="suggested-responses" defaultChecked />
            <label htmlFor="suggested-responses" className="text-sm font-medium">
              AI-powered response suggestions
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="conversation-summary" />
            <label htmlFor="conversation-summary" className="text-sm font-medium">
              Automatic conversation summaries
            </label>
          </div>
          <div className="flex items-center space-x-2">
            <Checkbox id="intent-detection" defaultChecked />
            <label htmlFor="intent-detection" className="text-sm font-medium">
              Customer intent detection
            </label>
          </div>
        </div>
      </div>
    </div>
  ),
}