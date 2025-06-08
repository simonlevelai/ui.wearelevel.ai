import type { Meta, StoryObj } from '@storybook/react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'

const meta: Meta<typeof Tabs> = {
  title: 'Components/Tabs',
  component: Tabs,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <Tabs defaultValue="account" className="w-[400px]">
      <TabsList className="grid w-full grid-cols-2">
        <TabsTrigger value="account">Account</TabsTrigger>
        <TabsTrigger value="password">Password</TabsTrigger>
      </TabsList>
      <TabsContent value="account">
        <Card>
          <CardHeader>
            <CardTitle>Account</CardTitle>
            <CardDescription>
              Make changes to your account here. Click save when you're done.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="name" className="text-sm font-medium">Name</label>
              <Input id="name" defaultValue="Pedro Duarte" />
            </div>
            <div className="space-y-1">
              <label htmlFor="username" className="text-sm font-medium">Username</label>
              <Input id="username" defaultValue="@peduarte" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      <TabsContent value="password">
        <Card>
          <CardHeader>
            <CardTitle>Password</CardTitle>
            <CardDescription>
              Change your password here. After saving, you'll be logged out.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="space-y-1">
              <label htmlFor="current" className="text-sm font-medium">Current password</label>
              <Input id="current" type="password" />
            </div>
            <div className="space-y-1">
              <label htmlFor="new" className="text-sm font-medium">New password</label>
              <Input id="new" type="password" />
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}

export const LevelAIDashboard: Story = {
  render: () => (
    <Tabs defaultValue="overview" className="w-[800px]">
      <TabsList className="grid w-full grid-cols-4">
        <TabsTrigger value="overview">Overview</TabsTrigger>
        <TabsTrigger value="conversations">Conversations</TabsTrigger>
        <TabsTrigger value="analytics">Analytics</TabsTrigger>
        <TabsTrigger value="settings">Settings</TabsTrigger>
      </TabsList>
      
      <TabsContent value="overview" className="space-y-4">
        <div className="grid grid-cols-3 gap-4">
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Total Conversations</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-sunshine">1,247</div>
              <p className="text-xs text-muted-foreground">+12% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Satisfaction Score</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-terragreen">94.2%</div>
              <p className="text-xs text-muted-foreground">+2.1% from last month</p>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className="pb-2">
              <CardTitle className="text-sm font-medium">Avg Response Time</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold text-amberglow">3.2s</div>
              <p className="text-xs text-muted-foreground">-0.8s from last month</p>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="conversations" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>Recent Conversations</CardTitle>
            <CardDescription>Your team's latest customer interactions</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">Customer Support - High Priority</p>
                  <p className="text-sm text-muted-foreground">Started 5 minutes ago</p>
                </div>
                <Button size="sm" variant="outline">View</Button>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">Sales Inquiry - Follow-up</p>
                  <p className="text-sm text-muted-foreground">Started 15 minutes ago</p>
                </div>
                <Button size="sm" variant="outline">View</Button>
              </div>
              <div className="flex items-center justify-between border-b pb-2">
                <div>
                  <p className="font-medium">Technical Support - Resolved</p>
                  <p className="text-sm text-muted-foreground">Completed 1 hour ago</p>
                </div>
                <Button size="sm" variant="success">Resolved</Button>
              </div>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
      
      <TabsContent value="analytics" className="space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <Card>
            <CardHeader>
              <CardTitle>Sentiment Analysis</CardTitle>
              <CardDescription>Customer sentiment trends over time</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Positive</span>
                  <span className="text-sm font-medium text-terragreen">68%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Neutral</span>
                  <span className="text-sm font-medium">24%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Negative</span>
                  <span className="text-sm font-medium text-sunsetcoral">8%</span>
                </div>
              </div>
            </CardContent>
          </Card>
          <Card>
            <CardHeader>
              <CardTitle>Top Topics</CardTitle>
              <CardDescription>Most discussed conversation topics</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="space-y-2">
                <div className="flex justify-between items-center">
                  <span className="text-sm">Billing Questions</span>
                  <span className="text-sm font-medium">32%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Technical Issues</span>
                  <span className="text-sm font-medium">28%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Product Inquiries</span>
                  <span className="text-sm font-medium">21%</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-sm">Feature Requests</span>
                  <span className="text-sm font-medium">19%</span>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </TabsContent>
      
      <TabsContent value="settings" className="space-y-4">
        <Card>
          <CardHeader>
            <CardTitle>AI Configuration</CardTitle>
            <CardDescription>Configure your Level AI settings</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <label htmlFor="model" className="text-sm font-medium">AI Model</label>
              <Input id="model" defaultValue="Level AI Custom Model v2.1" />
            </div>
            <div className="space-y-2">
              <label htmlFor="response-time" className="text-sm font-medium">Max Response Time (seconds)</label>
              <Input id="response-time" type="number" defaultValue="5" />
            </div>
            <div className="space-y-2">
              <label htmlFor="confidence" className="text-sm font-medium">Confidence Threshold</label>
              <Input id="confidence" type="number" defaultValue="0.85" step="0.01" />
            </div>
            <div className="flex gap-2">
              <Button>Save Settings</Button>
              <Button variant="outline">Reset to Defaults</Button>
            </div>
          </CardContent>
        </Card>
      </TabsContent>
    </Tabs>
  ),
}