import type { Meta, StoryObj } from '@storybook/react'
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from '../components/ui/table'
import { Button } from '../components/ui/button'

// Let's create a simple Badge component for the table
const SimpleBadge = ({ children, variant = 'default' }: { children: React.ReactNode, variant?: 'default' | 'success' | 'warning' | 'destructive' }) => {
  const variants = {
    default: 'bg-muted text-muted-foreground',
    success: 'bg-terragreen/10 text-terragreen',
    warning: 'bg-amberglow/10 text-amberglow',
    destructive: 'bg-sunsetcoral/10 text-sunsetcoral'
  }
  
  return (
    <span className={`inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium ${variants[variant]}`}>
      {children}
    </span>
  )
}

const meta: Meta<typeof Table> = {
  title: 'Components/Table',
  component: Table,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="w-[600px]">
      <Table>
        <TableCaption>A list of your recent invoices.</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead className="w-[100px]">Invoice</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Method</TableHead>
            <TableHead className="text-right">Amount</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">INV001</TableCell>
            <TableCell>Paid</TableCell>
            <TableCell>Credit Card</TableCell>
            <TableCell className="text-right">$250.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV002</TableCell>
            <TableCell>Pending</TableCell>
            <TableCell>PayPal</TableCell>
            <TableCell className="text-right">$150.00</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">INV003</TableCell>
            <TableCell>Unpaid</TableCell>
            <TableCell>Bank Transfer</TableCell>
            <TableCell className="text-right">$350.00</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}

export const LevelAIConversations: Story = {
  render: () => (
    <div className="w-[900px]">
      <Table>
        <TableCaption>Recent customer conversations managed by Level AI</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Conversation ID</TableHead>
            <TableHead>Customer</TableHead>
            <TableHead>Agent</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Sentiment</TableHead>
            <TableHead>Duration</TableHead>
            <TableHead className="text-right">Actions</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">#CONV-001</TableCell>
            <TableCell>Sarah Johnson</TableCell>
            <TableCell>Mike Chen</TableCell>
            <TableCell>
              <SimpleBadge variant="success">Resolved</SimpleBadge>
            </TableCell>
            <TableCell>
              <SimpleBadge variant="success">Positive</SimpleBadge>
            </TableCell>
            <TableCell>12m 34s</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">View</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#CONV-002</TableCell>
            <TableCell>David Wilson</TableCell>
            <TableCell>Emma Garcia</TableCell>
            <TableCell>
              <SimpleBadge variant="warning">In Progress</SimpleBadge>
            </TableCell>
            <TableCell>
              <SimpleBadge variant="default">Neutral</SimpleBadge>
            </TableCell>
            <TableCell>8m 15s</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">Join</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#CONV-003</TableCell>
            <TableCell>Lisa Rodriguez</TableCell>
            <TableCell>Alex Thompson</TableCell>
            <TableCell>
              <SimpleBadge variant="destructive">Escalated</SimpleBadge>
            </TableCell>
            <TableCell>
              <SimpleBadge variant="destructive">Negative</SimpleBadge>
            </TableCell>
            <TableCell>25m 47s</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">Review</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#CONV-004</TableCell>
            <TableCell>James Park</TableCell>
            <TableCell>AI Assistant</TableCell>
            <TableCell>
              <SimpleBadge variant="success">Resolved</SimpleBadge>
            </TableCell>
            <TableCell>
              <SimpleBadge variant="success">Positive</SimpleBadge>
            </TableCell>
            <TableCell>3m 22s</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">View</Button>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">#CONV-005</TableCell>
            <TableCell>Maria Gonzalez</TableCell>
            <TableCell>Kevin Li</TableCell>
            <TableCell>
              <SimpleBadge variant="warning">Waiting</SimpleBadge>
            </TableCell>
            <TableCell>
              <SimpleBadge variant="success">Positive</SimpleBadge>
            </TableCell>
            <TableCell>-</TableCell>
            <TableCell className="text-right">
              <Button variant="ghost" size="sm">Assign</Button>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}

export const AnalyticsTable: Story = {
  render: () => (
    <div className="w-[800px]">
      <Table>
        <TableCaption>AI Model Performance Analytics - Last 30 Days</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Model</TableHead>
            <TableHead>Conversations</TableHead>
            <TableHead>Avg. Response Time</TableHead>
            <TableHead>Satisfaction Score</TableHead>
            <TableHead>Resolution Rate</TableHead>
            <TableHead className="text-right">Cost/Conversation</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">GPT-4</TableCell>
            <TableCell>1,247</TableCell>
            <TableCell>2.3s</TableCell>
            <TableCell>
              <span className="text-terragreen font-medium">96.2%</span>
            </TableCell>
            <TableCell>
              <span className="text-terragreen font-medium">94.8%</span>
            </TableCell>
            <TableCell className="text-right">$0.08</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">GPT-3.5 Turbo</TableCell>
            <TableCell>3,891</TableCell>
            <TableCell>1.8s</TableCell>
            <TableCell>
              <span className="text-terragreen font-medium">93.7%</span>
            </TableCell>
            <TableCell>
              <span className="text-terragreen font-medium">91.2%</span>
            </TableCell>
            <TableCell className="text-right">$0.03</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Claude 3 Sonnet</TableCell>
            <TableCell>856</TableCell>
            <TableCell>2.1s</TableCell>
            <TableCell>
              <span className="text-terragreen font-medium">95.4%</span>
            </TableCell>
            <TableCell>
              <span className="text-terragreen font-medium">93.1%</span>
            </TableCell>
            <TableCell className="text-right">$0.06</TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Level AI Custom</TableCell>
            <TableCell>2,156</TableCell>
            <TableCell>1.5s</TableCell>
            <TableCell>
              <span className="text-sunshine font-medium">97.8%</span>
            </TableCell>
            <TableCell>
              <span className="text-sunshine font-medium">96.5%</span>
            </TableCell>
            <TableCell className="text-right">$0.05</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}

export const AgentPerformance: Story = {
  render: () => (
    <div className="w-[900px]">
      <Table>
        <TableCaption>Agent Performance Dashboard - This Week</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Agent</TableHead>
            <TableHead>Department</TableHead>
            <TableHead>Conversations</TableHead>
            <TableHead>Avg. Handle Time</TableHead>
            <TableHead>Customer Rating</TableHead>
            <TableHead>AI Assistance Used</TableHead>
            <TableHead className="text-right">Status</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          <TableRow>
            <TableCell className="font-medium">Emma Garcia</TableCell>
            <TableCell>Support L2</TableCell>
            <TableCell>89</TableCell>
            <TableCell>8m 12s</TableCell>
            <TableCell>
              <span className="text-terragreen font-medium">4.9/5.0</span>
            </TableCell>
            <TableCell>
              <span className="text-sunshine">78%</span>
            </TableCell>
            <TableCell className="text-right">
              <SimpleBadge variant="success">Online</SimpleBadge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Mike Chen</TableCell>
            <TableCell>Support L1</TableCell>
            <TableCell>156</TableCell>
            <TableCell>6m 45s</TableCell>
            <TableCell>
              <span className="text-terragreen font-medium">4.7/5.0</span>
            </TableCell>
            <TableCell>
              <span className="text-sunshine">82%</span>
            </TableCell>
            <TableCell className="text-right">
              <SimpleBadge variant="success">Online</SimpleBadge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Alex Thompson</TableCell>
            <TableCell>Technical</TableCell>
            <TableCell>67</TableCell>
            <TableCell>15m 33s</TableCell>
            <TableCell>
              <span className="text-terragreen font-medium">4.8/5.0</span>
            </TableCell>
            <TableCell>
              <span className="text-sunshine">65%</span>
            </TableCell>
            <TableCell className="text-right">
              <SimpleBadge variant="warning">Break</SimpleBadge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Kevin Li</TableCell>
            <TableCell>Sales</TableCell>
            <TableCell>34</TableCell>
            <TableCell>12m 18s</TableCell>
            <TableCell>
              <span className="text-terragreen font-medium">4.6/5.0</span>
            </TableCell>
            <TableCell>
              <span className="text-sunshine">91%</span>
            </TableCell>
            <TableCell className="text-right">
              <SimpleBadge variant="success">Online</SimpleBadge>
            </TableCell>
          </TableRow>
          <TableRow>
            <TableCell className="font-medium">Sarah Mitchell</TableCell>
            <TableCell>Support L2</TableCell>
            <TableCell>78</TableCell>
            <TableCell>9m 07s</TableCell>
            <TableCell>
              <span className="text-terragreen font-medium">4.8/5.0</span>
            </TableCell>
            <TableCell>
              <span className="text-sunshine">73%</span>
            </TableCell>
            <TableCell className="text-right">
              <SimpleBadge variant="default">Offline</SimpleBadge>
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  ),
}