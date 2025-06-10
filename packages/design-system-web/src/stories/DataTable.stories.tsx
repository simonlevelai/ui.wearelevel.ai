import type { Meta, StoryObj } from '@storybook/react'
import { Badge } from '../components/ui/badge'
import { Button } from '../components/ui/button'
import { DataTable, DataTableColumn } from '../components/ui/data-table'

const meta = {
  title: 'Components/DataTable',
  component: DataTable,
  parameters: {
    layout: 'padded',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof DataTable>

export default meta
type Story = StoryObj<typeof meta>

// Sample data types
interface User {
  id: number
  name: string
  email: string
  role: string
  status: 'active' | 'inactive' | 'pending'
  lastLogin: string
  performance: number
}

interface Conversation {
  id: number
  customer: string
  agent: string
  channel: string
  sentiment: 'positive' | 'neutral' | 'negative'
  duration: number
  resolution: 'resolved' | 'escalated' | 'pending'
  timestamp: string
}

// Sample data
const userData: User[] = [
  {
    id: 1,
    name: "John Doe",
    email: "john.doe@levelai.com",
    role: "Senior Agent",
    status: "active",
    lastLogin: "2024-01-15",
    performance: 92
  },
  {
    id: 2,
    name: "Jane Smith",
    email: "jane.smith@levelai.com",
    role: "Agent",
    status: "active",
    lastLogin: "2024-01-14",
    performance: 88
  },
  {
    id: 3,
    name: "Mike Johnson",
    email: "mike.johnson@levelai.com",
    role: "Team Lead",
    status: "inactive",
    lastLogin: "2024-01-10",
    performance: 95
  },
  {
    id: 4,
    name: "Sarah Wilson",
    email: "sarah.wilson@levelai.com",
    role: "Agent",
    status: "pending",
    lastLogin: "2024-01-13",
    performance: 76
  },
  {
    id: 5,
    name: "David Brown",
    email: "david.brown@levelai.com",
    role: "Senior Agent",
    status: "active",
    lastLogin: "2024-01-15",
    performance: 90
  }
]

const conversationData: Conversation[] = [
  {
    id: 1,
    customer: "Alice Johnson",
    agent: "John Doe",
    channel: "chat",
    sentiment: "positive",
    duration: 12.5,
    resolution: "resolved",
    timestamp: "2024-01-15 14:30"
  },
  {
    id: 2,
    customer: "Bob Smith",
    agent: "Jane Smith",
    channel: "voice",
    sentiment: "neutral",
    duration: 8.2,
    resolution: "resolved",
    timestamp: "2024-01-15 13:45"
  },
  {
    id: 3,
    customer: "Carol Davis",
    agent: "Mike Johnson",
    channel: "email",
    sentiment: "negative",
    duration: 15.7,
    resolution: "escalated",
    timestamp: "2024-01-15 12:20"
  },
  {
    id: 4,
    customer: "Daniel Wilson",
    agent: "Sarah Wilson",
    channel: "chat",
    sentiment: "positive",
    duration: 6.8,
    resolution: "resolved",
    timestamp: "2024-01-15 11:15"
  }
]

export const Default: Story = {
  args: {
    data: userData,
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role' },
      { key: 'status', header: 'Status' },
      { key: 'lastLogin', header: 'Last Login' },
    ] as DataTableColumn<User>[],
  },
}

export const WithCustomRendering: Story = {
  args: {
    data: userData,
    columns: [
      { 
        key: 'name', 
        header: 'Name',
        width: '200px'
      },
      { 
        key: 'email', 
        header: 'Email' 
      },
      { 
        key: 'role', 
        header: 'Role',
        filterable: true
      },
      { 
        key: 'status', 
        header: 'Status',
        render: (value: string) => {
          const variants = {
            active: 'success',
            inactive: 'secondary',
            pending: 'warning'
          } as const
          return <Badge variant={variants[value as keyof typeof variants]}>{value}</Badge>
        }
      },
      { 
        key: 'performance', 
        header: 'Performance',
        render: (value: number) => (
          <div className="flex items-center gap-2">
            <div className="w-16 bg-secondary rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${value}%` }}
              />
            </div>
            <span className="text-sm font-medium">{value}%</span>
          </div>
        )
      }
    ] as DataTableColumn<User>[],
  },
}

export const ConversationAnalytics: Story = {
  args: {
    data: conversationData,
    columns: [
      { 
        key: 'id', 
        header: 'ID',
        width: '80px'
      },
      { 
        key: 'customer', 
        header: 'Customer' 
      },
      { 
        key: 'agent', 
        header: 'Agent',
        filterable: true
      },
      { 
        key: 'channel', 
        header: 'Channel',
        render: (value: string) => {
          const colors = {
            chat: 'bg-sunshine text-earthstone',
            voice: 'bg-terragreen text-paledawn',
            email: 'bg-amberglow text-earthstone'
          } as const
          return (
            <span className={`px-2 py-1 rounded-full text-xs font-medium ${colors[value as keyof typeof colors]}`}>
              {value}
            </span>
          )
        }
      },
      { 
        key: 'sentiment', 
        header: 'Sentiment',
        render: (value: string) => {
          const variants = {
            positive: 'success',
            neutral: 'secondary',
            negative: 'destructive'
          } as const
          return <Badge variant={variants[value as keyof typeof variants]}>{value}</Badge>
        }
      },
      { 
        key: 'duration', 
        header: 'Duration (min)',
        render: (value: number) => `${value}m`
      },
      { 
        key: 'resolution', 
        header: 'Resolution',
        render: (value: string) => {
          const variants = {
            resolved: 'success',
            escalated: 'warning',
            pending: 'secondary'
          } as const
          return <Badge variant={variants[value as keyof typeof variants]}>{value}</Badge>
        }
      }
    ] as DataTableColumn<Conversation>[],
    onRowClick: (row) => {
      alert(`Clicked conversation ${row.id} with ${row.customer}`)
    }
  },
}

export const FullFeatures: Story = {
  args: {
    data: userData,
    columns: [
      { 
        key: 'name', 
        header: 'Name',
        width: '200px'
      },
      { 
        key: 'email', 
        header: 'Email' 
      },
      { 
        key: 'role', 
        header: 'Role',
        filterable: true
      },
      { 
        key: 'status', 
        header: 'Status',
        filterable: true,
        render: (value: string) => {
          const variants = {
            active: 'success',
            inactive: 'secondary',
            pending: 'warning'
          } as const
          return <Badge variant={variants[value as keyof typeof variants]}>{value}</Badge>
        }
      },
      { 
        key: 'lastLogin', 
        header: 'Last Login' 
      },
      { 
        key: 'performance', 
        header: 'Performance',
        render: (value: number) => (
          <div className="flex items-center gap-2">
            <div className="w-16 bg-secondary rounded-full h-2">
              <div 
                className="bg-primary h-2 rounded-full transition-all"
                style={{ width: `${value}%` }}
              />
            </div>
            <span className="text-sm font-medium">{value}%</span>
          </div>
        )
      },
      {
        key: 'id',
        header: 'Actions',
        sortable: false,
        render: (_, row: User) => (
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm">Edit</Button>
            <Button variant="ghost" size="sm">View</Button>
          </div>
        )
      }
    ] as DataTableColumn<User>[],
    searchable: true,
    sortable: true,
    filterable: true,
    pagination: true,
    pageSize: 5
  },
}

export const LargeDataset: Story = {
  args: {
    data: Array.from({ length: 100 }, (_, i) => ({
      id: i + 1,
      name: `User ${i + 1}`,
      email: `user${i + 1}@levelai.com`,
      role: ['Agent', 'Senior Agent', 'Team Lead', 'Manager'][Math.floor(Math.random() * 4)],
      status: ['active', 'inactive', 'pending'][Math.floor(Math.random() * 3)] as 'active' | 'inactive' | 'pending',
      lastLogin: `2024-01-${String(Math.floor(Math.random() * 15) + 1).padStart(2, '0')}`,
      performance: Math.floor(Math.random() * 40) + 60
    })),
    columns: [
      { key: 'name', header: 'Name' },
      { key: 'email', header: 'Email' },
      { key: 'role', header: 'Role', filterable: true },
      { 
        key: 'status', 
        header: 'Status',
        filterable: true,
        render: (value: string) => {
          const variants = {
            active: 'success',
            inactive: 'secondary',
            pending: 'warning'
          } as const
          return <Badge variant={variants[value as keyof typeof variants]}>{value}</Badge>
        }
      },
      { key: 'lastLogin', header: 'Last Login' },
      { 
        key: 'performance', 
        header: 'Performance',
        render: (value: number) => `${value}%`
      }
    ] as DataTableColumn<any>[],
    pageSize: 20
  },
}