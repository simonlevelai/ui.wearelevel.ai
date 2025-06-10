import type { Meta, StoryObj } from '@storybook/react'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'

const meta = {
  title: 'Components/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => (
    <Avatar>
      <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
      <AvatarFallback>CN</AvatarFallback>
    </Avatar>
  ),
}

export const WithFallback: Story = {
  args: {},
  render: () => (
    <Avatar>
      <AvatarImage src="/broken-image.jpg" alt="User" />
      <AvatarFallback>JD</AvatarFallback>
    </Avatar>
  ),
}

export const Sizes: Story = {
  args: {},
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="h-8 w-8">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-xs">SM</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback>MD</AvatarFallback>
      </Avatar>
      <Avatar className="h-12 w-12">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-lg">LG</AvatarFallback>
      </Avatar>
      <Avatar className="h-16 w-16">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="text-xl">XL</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const CustomColors: Story = {
  args: {},
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar>
        <AvatarFallback className="bg-sunshine text-earthstone">LA</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-terragreen text-paledawn">AI</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-amberglow text-earthstone">DS</AvatarFallback>
      </Avatar>
      <Avatar>
        <AvatarFallback className="bg-sunsetcoral text-earthstone">UI</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const Group: Story = {
  args: {},
  render: () => (
    <div className="flex -space-x-3">
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://i.pravatar.cc/150?u=1" alt="User 1" />
        <AvatarFallback>U1</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://i.pravatar.cc/150?u=2" alt="User 2" />
        <AvatarFallback>U2</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarImage src="https://i.pravatar.cc/150?u=3" alt="User 3" />
        <AvatarFallback>U3</AvatarFallback>
      </Avatar>
      <Avatar className="border-2 border-background">
        <AvatarFallback>+5</AvatarFallback>
      </Avatar>
    </div>
  ),
}

export const WithStatus: Story = {
  args: {},
  render: () => (
    <div className="flex items-center gap-4">
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?u=4" alt="Online user" />
          <AvatarFallback>ON</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-terragreen border-2 border-background" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?u=5" alt="Away user" />
          <AvatarFallback>AW</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-sunshine border-2 border-background" />
      </div>
      <div className="relative">
        <Avatar>
          <AvatarImage src="https://i.pravatar.cc/150?u=6" alt="Busy user" />
          <AvatarFallback>BS</AvatarFallback>
        </Avatar>
        <span className="absolute bottom-0 right-0 h-3 w-3 rounded-full bg-sunsetcoral border-2 border-background" />
      </div>
    </div>
  ),
}

export const Square: Story = {
  args: {},
  render: () => (
    <div className="flex items-center gap-4">
      <Avatar className="rounded-md">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="rounded-md">SQ</AvatarFallback>
      </Avatar>
      <Avatar className="rounded-lg">
        <AvatarImage src="https://github.com/shadcn.png" alt="@shadcn" />
        <AvatarFallback className="rounded-lg">RD</AvatarFallback>
      </Avatar>
    </div>
  ),
}