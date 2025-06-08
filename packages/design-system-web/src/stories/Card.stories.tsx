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
          <div className="text-2xl font-bold text-sunshine">1,247</div>
          <p className="text-sm text-muted-foreground">Total conversations this month</p>
          <div className="text-2xl font-bold text-terragreen">94.2%</div>
          <p className="text-sm text-muted-foreground">Customer satisfaction score</p>
        </div>
      </CardContent>
      <CardFooter>
        <Button className="w-full" variant="success">View Detailed Report</Button>
      </CardFooter>
    </Card>
  ),
}