import type { Meta, StoryObj } from '@storybook/react'
import { Separator } from '../components/ui/separator'

const meta = {
  title: 'Components/Separator',
  component: Separator,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Separator>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => (
    <div className="w-96">
      <div className="space-y-1">
        <h4 className="text-sm font-medium leading-none">Level AI Design System</h4>
        <p className="text-sm text-muted-foreground">
          An open-source UI component library.
        </p>
      </div>
      <Separator className="my-4" />
      <div className="flex h-5 items-center space-x-4 text-sm">
        <div>Docs</div>
        <Separator orientation="vertical" />
        <div>Source</div>
        <Separator orientation="vertical" />
        <div>Support</div>
      </div>
    </div>
  ),
}

export const Horizontal: Story = {
  args: {
    orientation: 'horizontal',
  },
  render: (args) => (
    <div className="w-96 space-y-4">
      <p>Content above</p>
      <Separator {...args} />
      <p>Content below</p>
    </div>
  ),
}

export const Vertical: Story = {
  args: {
    orientation: 'vertical',
  },
  render: (args) => (
    <div className="flex h-5 items-center space-x-4 text-sm">
      <div>Item 1</div>
      <Separator {...args} />
      <div>Item 2</div>
      <Separator {...args} />
      <div>Item 3</div>
    </div>
  ),
}

export const CustomStyles: Story = {
  args: {},
  render: () => (
    <div className="w-96 space-y-4">
      <div>
        <p className="text-sm mb-2">Default</p>
        <Separator />
      </div>
      <div>
        <p className="text-sm mb-2">Thick</p>
        <Separator className="h-[2px]" />
      </div>
      <div>
        <p className="text-sm mb-2">Dashed</p>
        <Separator className="border-t-2 border-dashed border-border bg-transparent h-0" />
      </div>
      <div>
        <p className="text-sm mb-2">Colored</p>
        <Separator className="bg-sunshine" />
      </div>
    </div>
  ),
}