import type { Meta, StoryObj } from '@storybook/react'
import { Progress } from '../components/ui/progress'
import { useEffect, useState } from 'react'

const meta = {
  title: 'Components/Progress',
  component: Progress,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  args: {
    value: 60,
    className: 'w-[60%]',
  },
} satisfies Meta<typeof Progress>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    value: 60,
  },
}

export const Empty: Story = {
  args: {
    value: 0,
  },
}

export const Full: Story = {
  args: {
    value: 100,
  },
}

export const CustomSize: Story = {
  render: () => (
    <div className="space-y-4 w-80">
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Small (h-2)</p>
        <Progress value={33} className="h-2" />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Default (h-4)</p>
        <Progress value={66} className="h-4" />
      </div>
      <div className="space-y-2">
        <p className="text-sm text-muted-foreground">Large (h-6)</p>
        <Progress value={100} className="h-6" />
      </div>
    </div>
  ),
}

export const WithLabel: Story = {
  render: () => (
    <div className="w-80 space-y-2">
      <div className="flex justify-between text-sm">
        <span>Loading...</span>
        <span className="text-muted-foreground">75%</span>
      </div>
      <Progress value={75} />
    </div>
  ),
}

export const Animated: Story = {
  render: () => {
    const [progress, setProgress] = useState(0)

    useEffect(() => {
      const timer = setTimeout(() => setProgress(66), 500)
      return () => clearTimeout(timer)
    }, [])

    return (
      <div className="w-80">
        <Progress value={progress} className="w-full" />
      </div>
    )
  },
}

export const Interactive: Story = {
  render: () => {
    const [progress, setProgress] = useState(20)

    useEffect(() => {
      const interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) return 0
          return prev + 10
        })
      }, 1000)

      return () => clearInterval(interval)
    }, [])

    return (
      <div className="w-80 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Processing...</span>
          <span className="text-muted-foreground">{progress}%</span>
        </div>
        <Progress value={progress} />
      </div>
    )
  },
}

export const MultipleProgress: Story = {
  render: () => (
    <div className="w-80 space-y-4">
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>File 1</span>
          <span className="text-muted-foreground">100%</span>
        </div>
        <Progress value={100} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>File 2</span>
          <span className="text-muted-foreground">60%</span>
        </div>
        <Progress value={60} />
      </div>
      <div className="space-y-2">
        <div className="flex justify-between text-sm">
          <span>File 3</span>
          <span className="text-muted-foreground">30%</span>
        </div>
        <Progress value={30} />
      </div>
    </div>
  ),
}