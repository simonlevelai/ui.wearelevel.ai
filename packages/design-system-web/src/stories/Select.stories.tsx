import type { Meta, StoryObj } from '@storybook/react'
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
} from '../components/ui/select'

const meta: Meta<typeof Select> = {
  title: 'Components/Select',
  component: Select,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select a framework" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="react">React</SelectItem>
        <SelectItem value="vue">Vue</SelectItem>
        <SelectItem value="angular">Angular</SelectItem>
        <SelectItem value="svelte">Svelte</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const WithGroups: Story = {
  render: () => (
    <Select>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Select AI model..." />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>OpenAI Models</SelectLabel>
          <SelectItem value="gpt-4">GPT-4</SelectItem>
          <SelectItem value="gpt-3.5-turbo">GPT-3.5 Turbo</SelectItem>
          <SelectItem value="gpt-3.5">GPT-3.5</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Anthropic Models</SelectLabel>
          <SelectItem value="claude-3-opus">Claude 3 Opus</SelectItem>
          <SelectItem value="claude-3-sonnet">Claude 3 Sonnet</SelectItem>
          <SelectItem value="claude-3-haiku">Claude 3 Haiku</SelectItem>
        </SelectGroup>
        <SelectSeparator />
        <SelectGroup>
          <SelectLabel>Custom Models</SelectLabel>
          <SelectItem value="level-ai-custom">Level AI Custom Model</SelectItem>
          <SelectItem value="fine-tuned">Fine-tuned Model</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  ),
}

export const Disabled: Story = {
  render: () => (
    <Select disabled>
      <SelectTrigger className="w-[280px]">
        <SelectValue placeholder="Disabled select" />
      </SelectTrigger>
      <SelectContent>
        <SelectItem value="option1">Option 1</SelectItem>
        <SelectItem value="option2">Option 2</SelectItem>
      </SelectContent>
    </Select>
  ),
}

export const LevelAIUseCase: Story = {
  render: () => (
    <div className="space-y-4 w-[320px]">
      <div>
        <label className="text-sm font-medium mb-2 block">Conversation Priority</label>
        <Select defaultValue="medium">
          <SelectTrigger>
            <SelectValue placeholder="Select priority..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="high">🔴 High Priority</SelectItem>
            <SelectItem value="medium">🟡 Medium Priority</SelectItem>
            <SelectItem value="low">🟢 Low Priority</SelectItem>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label className="text-sm font-medium mb-2 block">Department</label>
        <Select>
          <SelectTrigger>
            <SelectValue placeholder="Select department..." />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup>
              <SelectLabel>Customer Support</SelectLabel>
              <SelectItem value="support-l1">Level 1 Support</SelectItem>
              <SelectItem value="support-l2">Level 2 Support</SelectItem>
              <SelectItem value="support-manager">Support Manager</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Sales</SelectLabel>
              <SelectItem value="sales-rep">Sales Representative</SelectItem>
              <SelectItem value="sales-manager">Sales Manager</SelectItem>
              <SelectItem value="sales-director">Sales Director</SelectItem>
            </SelectGroup>
            <SelectSeparator />
            <SelectGroup>
              <SelectLabel>Technical</SelectLabel>
              <SelectItem value="tech-support">Technical Support</SelectItem>
              <SelectItem value="engineering">Engineering</SelectItem>
              <SelectItem value="devops">DevOps</SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
      
      <div>
        <label className="text-sm font-medium mb-2 block">Response Time SLA</label>
        <Select defaultValue="4h">
          <SelectTrigger>
            <SelectValue placeholder="Select SLA..." />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="15m">15 minutes</SelectItem>
            <SelectItem value="1h">1 hour</SelectItem>
            <SelectItem value="4h">4 hours</SelectItem>
            <SelectItem value="24h">24 hours</SelectItem>
            <SelectItem value="48h">48 hours</SelectItem>
          </SelectContent>
        </Select>
      </div>
    </div>
  ),
}