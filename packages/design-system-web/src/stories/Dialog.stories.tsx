import type { Meta, StoryObj } from '@storybook/react'
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from '../components/ui/dialog'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

const meta: Meta<typeof Dialog> = {
  title: 'Components/Dialog',
  component: Dialog,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="default">Open Dialog</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Welcome to Level AI</DialogTitle>
          <DialogDescription>
            This is a Level AI dialog component. Make changes to your profile here.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="name" className="text-right text-sm font-medium">
              Name
            </label>
            <Input id="name" defaultValue="John Doe" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <label htmlFor="email" className="text-right text-sm font-medium">
              Email
            </label>
            <Input id="email" defaultValue="john@levelai.com" className="col-span-3" />
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="default">Save changes</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const AlertDialog: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="destructive">Delete Account</Button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle>Are you absolutely sure?</DialogTitle>
          <DialogDescription>
            This action cannot be undone. This will permanently delete your
            account and remove your data from Level AI servers.
          </DialogDescription>
        </DialogHeader>
        <DialogFooter>
          <Button variant="outline">Cancel</Button>
          <Button variant="destructive">Yes, delete account</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}

export const CustomContent: Story = {
  render: () => (
    <Dialog>
      <DialogTrigger asChild>
        <Button variant="success">View Analytics</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[625px]">
        <DialogHeader>
          <DialogTitle>Conversation Analytics</DialogTitle>
          <DialogDescription>
            Overview of your AI conversation performance this month.
          </DialogDescription>
        </DialogHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-2 gap-4">
            <div className="rounded-lg border border-earthstone/20 p-4">
              <div className="text-2xl font-bold text-sunshine">1,247</div>
              <p className="text-sm text-muted-foreground">Total Conversations</p>
            </div>
            <div className="rounded-lg border border-earthstone/20 p-4">
              <div className="text-2xl font-bold text-terragreen">94.2%</div>
              <p className="text-sm text-muted-foreground">Satisfaction Score</p>
            </div>
          </div>
          <div className="rounded-lg border border-earthstone/20 p-4">
            <div className="text-2xl font-bold text-amberglow">3.2s</div>
            <p className="text-sm text-muted-foreground">Average Response Time</p>
          </div>
        </div>
        <DialogFooter>
          <Button variant="outline">Export Report</Button>
          <Button variant="success">View Details</Button>
        </DialogFooter>
      </DialogContent>
    </Dialog>
  ),
}