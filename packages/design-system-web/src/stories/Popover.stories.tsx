import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import { Popover, PopoverContent, PopoverTrigger } from '../components/ui/popover'

const meta = {
  title: 'Components/Popover',
  component: Popover,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Popover>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline">Open popover</Button>
      </PopoverTrigger>
      <PopoverContent>
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Dimensions</h4>
            <p className="text-sm text-muted-foreground">
              Set the dimensions for the layer.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="width">Width</Label>
              <Input
                id="width"
                defaultValue="100%"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxWidth">Max. width</Label>
              <Input
                id="maxWidth"
                defaultValue="300px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="height">Height</Label>
              <Input
                id="height"
                defaultValue="25px"
                className="col-span-2 h-8"
              />
            </div>
            <div className="grid grid-cols-3 items-center gap-4">
              <Label htmlFor="maxHeight">Max. height</Label>
              <Input
                id="maxHeight"
                defaultValue="none"
                className="col-span-2 h-8"
              />
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Positions: Story = {
  args: {},
  render: () => (
    <div className="grid grid-cols-3 gap-4">
      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Top</Button>
        </PopoverTrigger>
        <PopoverContent side="top">
          <p className="text-sm">Popover on top</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </PopoverTrigger>
        <PopoverContent side="bottom">
          <p className="text-sm">Popover on bottom</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Left</Button>
        </PopoverTrigger>
        <PopoverContent side="left">
          <p className="text-sm">Popover on left</p>
        </PopoverContent>
      </Popover>

      <Popover>
        <PopoverTrigger asChild>
          <Button variant="outline">Right</Button>
        </PopoverTrigger>
        <PopoverContent side="right">
          <p className="text-sm">Popover on right</p>
        </PopoverContent>
      </Popover>
    </div>
  ),
}

export const UserProfile: Story = {
  args: {},
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="ghost" className="px-2">
          <div className="flex items-center gap-2">
            <div className="h-8 w-8 rounded-full bg-sunshine flex items-center justify-center text-earthstone font-semibold">
              JD
            </div>
            <span>John Doe</span>
          </div>
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="flex items-center gap-4">
            <div className="h-12 w-12 rounded-full bg-sunshine flex items-center justify-center text-earthstone font-semibold text-lg">
              JD
            </div>
            <div className="space-y-1">
              <h4 className="text-sm font-semibold">John Doe</h4>
              <p className="text-sm text-muted-foreground">john.doe@levelai.com</p>
            </div>
          </div>
          <div className="border-t pt-3">
            <Button variant="ghost" className="w-full justify-start" size="sm">
              Profile Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start" size="sm">
              Account Settings
            </Button>
            <Button variant="ghost" className="w-full justify-start text-destructive" size="sm">
              Log out
            </Button>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}

export const Notifications: Story = {
  args: {},
  render: () => (
    <Popover>
      <PopoverTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
            />
          </svg>
          <span className="absolute -top-1 -right-1 h-3 w-3 rounded-full bg-sunsetcoral" />
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-80">
        <div className="grid gap-4">
          <div className="space-y-2">
            <h4 className="font-medium leading-none">Notifications</h4>
            <p className="text-sm text-muted-foreground">
              You have 3 unread messages.
            </p>
          </div>
          <div className="grid gap-2">
            <div className="grid gap-1 p-2 hover:bg-accent rounded-md cursor-pointer">
              <p className="text-sm font-medium">New comment on your post</p>
              <p className="text-xs text-muted-foreground">5 minutes ago</p>
            </div>
            <div className="grid gap-1 p-2 hover:bg-accent rounded-md cursor-pointer">
              <p className="text-sm font-medium">You have a new follower</p>
              <p className="text-xs text-muted-foreground">1 hour ago</p>
            </div>
            <div className="grid gap-1 p-2 hover:bg-accent rounded-md cursor-pointer">
              <p className="text-sm font-medium">Your report is ready</p>
              <p className="text-xs text-muted-foreground">2 hours ago</p>
            </div>
          </div>
        </div>
      </PopoverContent>
    </Popover>
  ),
}