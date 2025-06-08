import type { Meta, StoryObj } from '@storybook/react'
import { RadioGroup, RadioGroupItem } from '../components/ui/radio-group'

const meta: Meta<typeof RadioGroup> = {
  title: 'Components/RadioGroup',
  component: RadioGroup,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <RadioGroup defaultValue="option1">
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="option1" />
        <label htmlFor="option1" className="text-sm font-medium">
          Option 1
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="option2" />
        <label htmlFor="option2" className="text-sm font-medium">
          Option 2
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option3" id="option3" />
        <label htmlFor="option3" className="text-sm font-medium">
          Option 3
        </label>
      </div>
    </RadioGroup>
  ),
}

export const Disabled: Story = {
  render: () => (
    <RadioGroup defaultValue="option1" disabled>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option1" id="disabled1" />
        <label htmlFor="disabled1" className="text-sm font-medium text-muted-foreground">
          Disabled option 1
        </label>
      </div>
      <div className="flex items-center space-x-2">
        <RadioGroupItem value="option2" id="disabled2" />
        <label htmlFor="disabled2" className="text-sm font-medium text-muted-foreground">
          Disabled option 2
        </label>
      </div>
    </RadioGroup>
  ),
}

export const LevelAIUseCase: Story = {
  render: () => (
    <div className="space-y-8 w-[500px]">
      <div>
        <h3 className="text-lg font-semibold mb-4 font-display text-earthstone">
          AI Model Selection
        </h3>
        <RadioGroup defaultValue="gpt-4" className="space-y-3">
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="gpt-4" id="gpt-4" className="mt-1" />
            <div className="space-y-1">
              <label htmlFor="gpt-4" className="text-sm font-medium cursor-pointer">
                GPT-4 (Recommended)
              </label>
              <p className="text-xs text-muted-foreground">
                Best performance for complex conversations. Higher accuracy and context understanding.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="gpt-3.5" id="gpt-3.5" className="mt-1" />
            <div className="space-y-1">
              <label htmlFor="gpt-3.5" className="text-sm font-medium cursor-pointer">
                GPT-3.5 Turbo
              </label>
              <p className="text-xs text-muted-foreground">
                Faster responses with good accuracy. Ideal for high-volume conversations.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="claude" id="claude" className="mt-1" />
            <div className="space-y-1">
              <label htmlFor="claude" className="text-sm font-medium cursor-pointer">
                Claude 3 Sonnet
              </label>
              <p className="text-xs text-muted-foreground">
                Excellent reasoning capabilities. Great for nuanced customer interactions.
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="custom" id="custom" className="mt-1" />
            <div className="space-y-1">
              <label htmlFor="custom" className="text-sm font-medium cursor-pointer">
                Level AI Custom Model
              </label>
              <p className="text-xs text-muted-foreground">
                Fine-tuned model specific to your industry and use case.
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 font-display text-earthstone">
          Conversation Priority Level
        </h3>
        <RadioGroup defaultValue="medium" className="space-y-3">
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="urgent" id="urgent" />
            <div className="space-y-1">
              <label htmlFor="urgent" className="text-sm font-medium cursor-pointer text-sunsetcoral">
                🔴 Urgent (Response within 5 minutes)
              </label>
              <p className="text-xs text-muted-foreground">
                Immediate escalation to senior agents
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="high" id="high" />
            <div className="space-y-1">
              <label htmlFor="high" className="text-sm font-medium cursor-pointer text-amberglow">
                🟡 High (Response within 15 minutes)
              </label>
              <p className="text-xs text-muted-foreground">
                Priority queue for experienced agents
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="medium" id="medium" />
            <div className="space-y-1">
              <label htmlFor="medium" className="text-sm font-medium cursor-pointer">
                🟢 Medium (Response within 1 hour)
              </label>
              <p className="text-xs text-muted-foreground">
                Standard queue processing
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <RadioGroupItem value="low" id="low" />
            <div className="space-y-1">
              <label htmlFor="low" className="text-sm font-medium cursor-pointer text-muted-foreground">
                ⚪ Low (Response within 24 hours)
              </label>
              <p className="text-xs text-muted-foreground">
                Can be handled during off-peak hours
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>

      <div>
        <h3 className="text-lg font-semibold mb-4 font-display text-earthstone">
          Escalation Workflow
        </h3>
        <RadioGroup defaultValue="auto" className="space-y-3">
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="auto" id="auto" className="mt-1" />
            <div className="space-y-1">
              <label htmlFor="auto" className="text-sm font-medium cursor-pointer">
                Automatic Escalation
              </label>
              <p className="text-xs text-muted-foreground">
                AI automatically escalates based on sentiment and complexity
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="manual" id="manual" className="mt-1" />
            <div className="space-y-1">
              <label htmlFor="manual" className="text-sm font-medium cursor-pointer">
                Manual Escalation Only
              </label>
              <p className="text-xs text-muted-foreground">
                Agents decide when to escalate conversations
              </p>
            </div>
          </div>
          <div className="flex items-start space-x-3">
            <RadioGroupItem value="hybrid" id="hybrid" className="mt-1" />
            <div className="space-y-1">
              <label htmlFor="hybrid" className="text-sm font-medium cursor-pointer">
                Hybrid Approach
              </label>
              <p className="text-xs text-muted-foreground">
                AI suggests escalation, but agents make final decision
              </p>
            </div>
          </div>
        </RadioGroup>
      </div>
    </div>
  ),
}