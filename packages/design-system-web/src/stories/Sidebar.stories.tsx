import type { Meta, StoryObj } from '@storybook/react'
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupLabel,
  SidebarItem,
  SidebarLink,
} from '../components/ui/sidebar'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Button } from '../components/ui/button'
import { useState } from 'react'
import { Home, MessageSquare, BarChart3, ChevronLeft, ChevronRight, Activity, AlertCircle } from 'lucide-react'

const meta: Meta<typeof Sidebar> = {
  title: 'Components/Sidebar',
  component: Sidebar,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    side: {
      control: 'select',
      options: ['left', 'right'],
    },
    size: {
      control: 'select',
      options: ['default', 'compact', 'wide'],
    },
    collapsible: {
      control: 'boolean',
    },
    collapsed: {
      control: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="flex h-screen bg-background">
      <Sidebar>
        <SidebarHeader>
          <h2 className="text-xl font-display font-bold">Level AI</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Main</SidebarGroupLabel>
            <SidebarItem>
              <SidebarLink href="#" active>
                <Home className="w-4 h-4" />
                Dashboard
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="#">
                <MessageSquare className="w-4 h-4" />
                Conversations
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="#">
                <BarChart3 className="w-4 h-4" />
                Analytics
              </SidebarLink>
            </SidebarItem>
          </SidebarGroup>
          <SidebarGroup>
            <SidebarGroupLabel>Settings</SidebarGroupLabel>
            <SidebarItem>
              <SidebarLink href="#">Team</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="#">Integrations</SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="#">Billing</SidebarLink>
            </SidebarItem>
          </SidebarGroup>
        </SidebarContent>
        <SidebarFooter>
          <div className="flex items-center gap-3">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">John Doe</p>
              <p className="text-xs text-muted-foreground">john@levelai.com</p>
            </div>
          </div>
        </SidebarFooter>
      </Sidebar>
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-display font-bold mb-4">Dashboard</h1>
        <p>Your main content goes here.</p>
      </main>
    </div>
  ),
}

export const RightSide: Story = {
  render: () => (
    <div className="flex h-screen bg-background">
      <main className="flex-1 p-8">
        <h1 className="text-3xl font-display font-bold mb-4">Dashboard</h1>
        <p>Your main content goes here.</p>
      </main>
      <Sidebar side="right">
        <SidebarHeader>
          <h2 className="text-xl font-display font-bold">Activity</h2>
        </SidebarHeader>
        <SidebarContent>
          <SidebarGroup>
            <SidebarGroupLabel>Recent</SidebarGroupLabel>
            <SidebarItem>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sidebar-accent">
                <MessageSquare className="w-4 h-4 text-primary" />
                <div>
                  <p className="text-sm font-medium">New conversation</p>
                  <p className="text-xs text-muted-foreground">2 minutes ago</p>
                </div>
              </div>
            </SidebarItem>
            <SidebarItem>
              <div className="flex items-center gap-3 p-3 rounded-lg hover:bg-sidebar-accent">
                <AlertCircle className="w-4 h-4 text-destructive" />
                <div>
                  <p className="text-sm font-medium">Quality alert</p>
                  <p className="text-xs text-muted-foreground">15 minutes ago</p>
                </div>
              </div>
            </SidebarItem>
          </SidebarGroup>
        </SidebarContent>
      </Sidebar>
    </div>
  ),
}

export const Collapsible: Story = {
  render: () => {
    const [collapsed, setCollapsed] = useState(false)
    
    return (
      <div className="flex h-screen bg-background">
        <Sidebar collapsible collapsed={collapsed}>
          <SidebarHeader className="justify-between">
            {!collapsed && <h2 className="text-xl font-display font-bold">Level AI</h2>}
            <Button
              variant="ghost"
              size="sm"
              onClick={() => setCollapsed(!collapsed)}
              className="ml-auto"
            >
              {collapsed ? <ChevronRight className="w-4 h-4" /> : <ChevronLeft className="w-4 h-4" />}
            </Button>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              {!collapsed && <SidebarGroupLabel>Main</SidebarGroupLabel>}
              <SidebarItem>
                <SidebarLink href="#" active>
                  <Home className="w-5 h-5" />
                  {!collapsed && <span>Dashboard</span>}
                </SidebarLink>
              </SidebarItem>
              <SidebarItem>
                <SidebarLink href="#">
                  <MessageSquare className="w-5 h-5" />
                  {!collapsed && <span>Conversations</span>}
                </SidebarLink>
              </SidebarItem>
              <SidebarItem>
                <SidebarLink href="#">
                  <BarChart3 className="w-5 h-5" />
                  {!collapsed && <span>Analytics</span>}
                </SidebarLink>
              </SidebarItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        <main className="flex-1 p-8">
          <h1 className="text-3xl font-display font-bold mb-4">Collapsible Sidebar</h1>
          <p>Click the arrow in the sidebar to toggle collapse state.</p>
        </main>
      </div>
    )
  },
}

export const AllSizes: Story = {
  render: () => (
    <div className="flex gap-8 p-8 h-screen bg-background">
      <div className="flex gap-4">
        <Sidebar size="compact" className="h-[600px]">
          <SidebarHeader>
            <h2 className="text-sm font-bold">Compact</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarItem>
              <SidebarLink href="#" className="justify-center">
                <Home className="w-5 h-5" />
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="#" className="justify-center">
                <MessageSquare className="w-5 h-5" />
              </SidebarLink>
            </SidebarItem>
            <SidebarItem>
              <SidebarLink href="#" className="justify-center">
                <BarChart3 className="w-5 h-5" />
              </SidebarLink>
            </SidebarItem>
          </SidebarContent>
        </Sidebar>
        
        <Sidebar size="default" className="h-[600px]">
          <SidebarHeader>
            <h2 className="text-lg font-bold">Default Size</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Navigation</SidebarGroupLabel>
              <SidebarItem>
                <SidebarLink href="#">Dashboard</SidebarLink>
              </SidebarItem>
              <SidebarItem>
                <SidebarLink href="#">Conversations</SidebarLink>
              </SidebarItem>
              <SidebarItem>
                <SidebarLink href="#">Analytics</SidebarLink>
              </SidebarItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
        
        <Sidebar size="wide" className="h-[600px]">
          <SidebarHeader>
            <h2 className="text-xl font-bold">Wide Sidebar</h2>
          </SidebarHeader>
          <SidebarContent>
            <SidebarGroup>
              <SidebarGroupLabel>Extended Navigation</SidebarGroupLabel>
              <SidebarItem>
                <SidebarLink href="#">
                  <Home className="w-5 h-5 mr-3" />
                  <span>Dashboard Overview</span>
                </SidebarLink>
              </SidebarItem>
              <SidebarItem>
                <SidebarLink href="#">
                  <MessageSquare className="w-5 h-5 mr-3" />
                  <span>Customer Conversations</span>
                </SidebarLink>
              </SidebarItem>
              <SidebarItem>
                <SidebarLink href="#">
                  <BarChart3 className="w-5 h-5 mr-3" />
                  <span>Analytics & Reports</span>
                </SidebarLink>
              </SidebarItem>
            </SidebarGroup>
          </SidebarContent>
        </Sidebar>
      </div>
    </div>
  ),
}