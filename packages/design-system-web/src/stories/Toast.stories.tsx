import type { Meta, StoryObj } from '@storybook/react'
import { Button } from '../components/ui/button'
import { useToast } from '../components/ui/use-toast'
import { Toaster } from '../components/ui/toaster'
import { ToastAction } from '../components/ui/toast'

const ToastDemo = () => {
  const { toast } = useToast()

  return (
    <div className="flex flex-col gap-4 items-center">
      <Button
        onClick={() => {
          toast({
            title: "Scheduled: Catch up",
            description: "Friday, February 10, 2023 at 5:57 PM",
          })
        }}
      >
        Show Toast
      </Button>
      <Toaster />
    </div>
  )
}

const meta = {
  title: 'Components/Toast',
  component: ToastDemo,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ToastDemo>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {}

export const AllVariants: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <div className="flex flex-col gap-4 items-center">
        <div className="flex gap-2 flex-wrap justify-center">
          <Button
            onClick={() => {
              toast({
                title: "Default notification",
                description: "This is a default toast message.",
              })
            }}
          >
            Default
          </Button>

          <Button
            variant="destructive"
            onClick={() => {
              toast({
                variant: "destructive",
                title: "Error notification",
                description: "Something went wrong. Please try again.",
              })
            }}
          >
            Destructive
          </Button>

          <Button
            variant="success"
            onClick={() => {
              toast({
                variant: "success",
                title: "Success!",
                description: "Your action was completed successfully.",
              })
            }}
          >
            Success
          </Button>

          <Button
            variant="secondary"
            onClick={() => {
              toast({
                variant: "warning",
                title: "Warning",
                description: "Please review before proceeding.",
              })
            }}
          >
            Warning
          </Button>
        </div>
        <Toaster />
      </div>
    )
  },
}

export const WithAction: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <div className="flex flex-col gap-4 items-center">
        <Button
          onClick={() => {
            toast({
              title: "Undo action",
              description: "You deleted 1 item.",
              action: <ToastAction altText="Undo">Undo</ToastAction>,
            })
          }}
        >
          Toast with Action
        </Button>
        <Toaster />
      </div>
    )
  },
}

export const SimpleToast: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <div className="flex flex-col gap-4 items-center">
        <Button
          onClick={() => {
            toast({
              description: "Your message has been sent.",
            })
          }}
        >
          Simple Toast
        </Button>
        <Toaster />
      </div>
    )
  },
}

export const LongContent: Story = {
  render: () => {
    const { toast } = useToast()

    return (
      <div className="flex flex-col gap-4 items-center">
        <Button
          onClick={() => {
            toast({
              title: "Update available",
              description: "A new software update is available. Would you like to download and install it now? The update includes bug fixes and performance improvements.",
            })
          }}
        >
          Long Content Toast
        </Button>
        <Toaster />
      </div>
    )
  },
}