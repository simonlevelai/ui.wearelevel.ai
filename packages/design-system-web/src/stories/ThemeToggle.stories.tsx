import type { Meta, StoryObj } from '@storybook/react'
import { ThemeToggle, ThemeToggleWithText } from '../components/ui/theme-toggle'
import { ThemeProvider } from '../components/theme-provider'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '../components/ui/card'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Alert, AlertDescription, AlertTitle } from '../components/ui/alert'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '../components/ui/tabs'
import { Sun, Moon, AlertCircle, CheckCircle2 } from 'lucide-react'

const meta: Meta<typeof ThemeToggle> = {
  title: 'Components/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
        <Story />
      </ThemeProvider>
    ),
  ],
}

export default meta
type Story = StoryObj<typeof meta>

export const IconOnly: Story = {
  render: () => <ThemeToggle />,
}

export const WithText: Story = {
  render: () => <ThemeToggleWithText />,
}

export const ThemeShowcase: Story = {
  render: () => (
    <div className="space-y-8 w-[800px] p-6">
      {/* Theme Toggle */}
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold font-display text-foreground">Level AI Design System</h1>
        <div className="flex gap-2">
          <ThemeToggle />
          <ThemeToggleWithText />
        </div>
      </div>

      {/* Component Showcase */}
      <div className="grid grid-cols-2 gap-6">
        {/* Buttons */}
        <Card>
          <CardHeader>
            <CardTitle>Buttons</CardTitle>
            <CardDescription>All button variants in current theme</CardDescription>
          </CardHeader>
          <CardContent className="space-y-2">
            <div className="flex gap-2 flex-wrap">
              <Button variant="default">Primary</Button>
              <Button variant="secondary">Secondary</Button>
              <Button variant="success">Success</Button>
              <Button variant="destructive">Destructive</Button>
            </div>
            <div className="flex gap-2 flex-wrap">
              <Button variant="outline">Outline</Button>
              <Button variant="ghost">Ghost</Button>
              <Button variant="link">Link</Button>
            </div>
          </CardContent>
        </Card>

        {/* Form Elements */}
        <Card>
          <CardHeader>
            <CardTitle>Form Elements</CardTitle>
            <CardDescription>Input and form controls</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <Input placeholder="Enter your message..." />
            <Input placeholder="Disabled input" disabled />
            <div className="flex gap-2">
              <Button size="sm">Submit</Button>
              <Button size="sm" variant="outline">Cancel</Button>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Alerts */}
      <div className="grid grid-cols-2 gap-4">
        <Alert>
          <AlertCircle className="h-4 w-4" />
          <AlertTitle>Level AI System Update</AlertTitle>
          <AlertDescription>
            Your conversation analytics have been updated with new dark mode support.
          </AlertDescription>
        </Alert>
        
        <Alert variant="success">
          <CheckCircle2 className="h-4 w-4" />
          <AlertTitle>Theme Applied Successfully</AlertTitle>
          <AlertDescription>
            Dark mode preferences have been saved to your Level AI profile.
          </AlertDescription>
        </Alert>
      </div>

      {/* Tabs Demo */}
      <Tabs defaultValue="overview" className="w-full">
        <TabsList className="grid w-full grid-cols-3">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="analytics">Analytics</TabsTrigger>
          <TabsTrigger value="settings">Settings</TabsTrigger>
        </TabsList>
        <TabsContent value="overview" className="space-y-4">
          <Card>
            <CardHeader>
              <CardTitle>Conversation Overview</CardTitle>
              <CardDescription>Your Level AI dashboard in {typeof window !== 'undefined' && document.documentElement.classList.contains('dark') ? 'dark' : 'light'} mode</CardDescription>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-3 gap-4">
                <div className="text-center">
                  <div className="text-2xl font-bold text-primary">1,247</div>
                  <p className="text-sm text-muted-foreground">Total Conversations</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-success">94.2%</div>
                  <p className="text-sm text-muted-foreground">Satisfaction Score</p>
                </div>
                <div className="text-center">
                  <div className="text-2xl font-bold text-secondary">3.2s</div>
                  <p className="text-sm text-muted-foreground">Avg Response Time</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="analytics">
          <Card>
            <CardContent className="pt-6">
              <p className="text-muted-foreground">Analytics view with theme-aware charts and data visualization.</p>
            </CardContent>
          </Card>
        </TabsContent>
        <TabsContent value="settings">
          <Card>
            <CardContent className="pt-6">
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Dark Mode</span>
                  <ThemeToggle />
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-sm font-medium">Enhanced Theme Toggle</span>
                  <ThemeToggleWithText />
                </div>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  ),
}