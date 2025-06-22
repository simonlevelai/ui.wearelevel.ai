import type { Meta, StoryObj } from '@storybook/react'
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'

const meta: Meta<typeof Card> = {
  title: 'Components/Card',
  component: Card,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'flat', 'ghost'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Card className="w-[350px]">
      <CardHeader>
        <CardTitle>Level AI Dashboard</CardTitle>
        <CardDescription>Manage your AI conversations and analytics.</CardDescription>
      </CardHeader>
      <CardContent>
        <p>Welcome to your Level AI dashboard. Here you can monitor conversation quality, track performance metrics, and configure your AI settings.</p>
      </CardContent>
      <CardFooter className="flex justify-between">
        <Button variant="outline">Cancel</Button>
        <Button>Continue</Button>
      </CardFooter>
    </Card>
  ),
}

export const Simple: Story = {
  render: () => (
    <Card className="w-[300px]">
      <CardContent className="p-6">
        <p>A simple card with just content.</p>
      </CardContent>
    </Card>
  ),
}

export const WithActions: Story = {
  render: () => (
    <Card className="w-[400px]">
      <CardHeader>
        <CardTitle>Conversation Analytics</CardTitle>
        <CardDescription>View insights from your latest conversations.</CardDescription>
      </CardHeader>
      <CardContent>
        <div className="space-y-2">
          <div className="text-2xl font-bold text-primary">1,247</div>
          <p className="text-sm text-muted-foreground">Total conversations this month</p>
          <div className="text-2xl font-bold text-chart-2">94.2%</div>
          <p className="text-sm text-muted-foreground">Customer satisfaction score</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="success">View Detailed Report</Button>
      </CardFooter>
    </Card>
  ),
}

export const AllVariants: Story = {
  render: () => (
    <div className="grid grid-cols-2 gap-4 p-4">
      <Card variant="default" className="w-[280px]">
        <CardHeader>
          <CardTitle className="text-lg">Default Card</CardTitle>
          <CardDescription>Standard shadow with hover effect</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">This is the default card variant with medium shadow.</p>
        </CardContent>
      </Card>
      
      <Card variant="elevated" className="w-[280px]">
        <CardHeader>
          <CardTitle className="text-lg">Elevated Card</CardTitle>
          <CardDescription>Higher shadow for prominence</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">This card has a larger shadow for more elevation.</p>
        </CardContent>
      </Card>
      
      <Card variant="flat" className="w-[280px]">
        <CardHeader>
          <CardTitle className="text-lg">Flat Card</CardTitle>
          <CardDescription>No shadow, just border</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">This card has no shadow, just a clean border.</p>
        </CardContent>
      </Card>
      
      <Card variant="ghost" className="w-[280px]">
        <CardHeader>
          <CardTitle className="text-lg">Ghost Card</CardTitle>
          <CardDescription>Minimal styling</CardDescription>
        </CardHeader>
        <CardContent>
          <p className="text-sm">This card has no border or shadow.</p>
        </CardContent>
      </Card>
    </div>
  ),
}

export const BrutalistShowcase: Story = {
  render: () => (
    <div className="flex flex-col gap-6 p-8">
      <h3 className="text-xl font-display font-bold">Brutalist Shadow System</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <Card variant="default" className="w-full hover:translate-x-1 hover:translate-y-1 transition-transform">
          <CardHeader>
            <CardTitle>Interactive Card</CardTitle>
            <CardDescription>Hover to see the brutalist press effect</CardDescription>
          </CardHeader>
          <CardContent>
            <p>This card demonstrates the brutalist aesthetic with 3px offset shadows.</p>
          </CardContent>
          <CardFooter>
            <Button>Click Me</Button>
          </CardFooter>
        </Card>
        
        <Card variant="elevated" className="w-full">
          <CardHeader>
            <CardTitle>Dashboard Widget</CardTitle>
            <CardDescription>Elevated for importance</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex justify-between items-center">
                <span>Active Users</span>
                <span className="text-2xl font-bold text-primary">2,847</span>
              </div>
              <div className="flex justify-between items-center">
                <span>Response Time</span>
                <span className="text-lg font-semibold text-chart-2">1.2s</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  ),
}