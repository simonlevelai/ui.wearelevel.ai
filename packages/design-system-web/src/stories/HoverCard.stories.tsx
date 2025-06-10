import type { Meta, StoryObj } from '@storybook/react'
import { CalendarDays } from 'lucide-react'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import { HoverCard, HoverCardContent, HoverCardTrigger } from '../components/ui/hover-card'

const meta = {
  title: 'Components/HoverCard',
  component: HoverCard,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof HoverCard>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="link">@levelai</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <div className="flex justify-between space-x-4">
          <Avatar>
            <AvatarImage src="https://github.com/vercel.png" />
            <AvatarFallback>LA</AvatarFallback>
          </Avatar>
          <div className="space-y-1">
            <h4 className="text-sm font-semibold">@levelai</h4>
            <p className="text-sm">
              The AI platform for customer service excellence.
            </p>
            <div className="flex items-center pt-2">
              <CalendarDays className="mr-2 h-4 w-4 opacity-70" />
              <span className="text-xs text-muted-foreground">
                Joined December 2021
              </span>
            </div>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const UserProfile: Story = {
  args: {},
  render: () => (
    <div className="flex gap-4">
      <HoverCard>
        <HoverCardTrigger asChild>
          <a href="#" className="text-sm font-medium underline">
            John Doe
          </a>
        </HoverCardTrigger>
        <HoverCardContent>
          <div className="flex gap-4">
            <Avatar>
              <AvatarImage src="https://i.pravatar.cc/150?u=john" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">John Doe</h4>
              <p className="text-sm text-muted-foreground">
                Senior Software Engineer
              </p>
              <div className="flex items-center pt-2">
                <span className="text-xs text-muted-foreground">
                  john.doe@levelai.com
                </span>
              </div>
            </div>
          </div>
        </HoverCardContent>
      </HoverCard>
      
      <span className="text-sm text-muted-foreground">commented on your PR</span>
    </div>
  ),
}

export const ProductPreview: Story = {
  args: {},
  render: () => (
    <HoverCard>
      <HoverCardTrigger asChild>
        <Button variant="outline">Level AI Analytics</Button>
      </HoverCardTrigger>
      <HoverCardContent className="w-80">
        <div className="space-y-2">
          <div className="h-32 w-full rounded bg-gradient-to-br from-sunshine to-amberglow" />
          <h4 className="text-sm font-semibold">Level AI Analytics</h4>
          <p className="text-sm text-muted-foreground">
            Real-time insights into customer interactions with AI-powered sentiment analysis 
            and conversation intelligence.
          </p>
          <div className="flex items-center gap-4 pt-2 text-xs text-muted-foreground">
            <span>✓ Real-time monitoring</span>
            <span>✓ Custom reports</span>
          </div>
        </div>
      </HoverCardContent>
    </HoverCard>
  ),
}

export const Positions: Story = {
  args: {},
  render: () => (
    <div className="grid grid-cols-2 gap-8">
      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Hover (Top)</Button>
        </HoverCardTrigger>
        <HoverCardContent side="top">
          <p className="text-sm">This card appears on top</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Hover (Bottom)</Button>
        </HoverCardTrigger>
        <HoverCardContent side="bottom">
          <p className="text-sm">This card appears on bottom</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Hover (Left)</Button>
        </HoverCardTrigger>
        <HoverCardContent side="left">
          <p className="text-sm">This card appears on left</p>
        </HoverCardContent>
      </HoverCard>

      <HoverCard>
        <HoverCardTrigger asChild>
          <Button variant="outline">Hover (Right)</Button>
        </HoverCardTrigger>
        <HoverCardContent side="right">
          <p className="text-sm">This card appears on right</p>
        </HoverCardContent>
      </HoverCard>
    </div>
  ),
}

export const WithDelay: Story = {
  args: {},
  render: () => (
    <HoverCard openDelay={700} closeDelay={300}>
      <HoverCardTrigger asChild>
        <Button variant="outline">Delayed hover (700ms)</Button>
      </HoverCardTrigger>
      <HoverCardContent>
        <p className="text-sm">
          This hover card has a 700ms open delay and 300ms close delay.
        </p>
      </HoverCardContent>
    </HoverCard>
  ),
}