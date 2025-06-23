import type { Meta, StoryObj } from '@storybook/react'
import {
  Header,
  HeaderBrand,
  HeaderNav,
  HeaderNavItem,
  HeaderActions,
  HeaderDivider,
} from '../components/ui/header'
import { Button } from '../components/ui/button'
import { ThemeToggle } from '../components/ui/theme-toggle'
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar'
import { Input } from '../components/ui/input'
import { Bell } from 'lucide-react'

const meta: Meta<typeof Header> = {
  title: 'Components/Header',
  component: Header,
  parameters: {
    layout: 'fullscreen',
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'elevated', 'sticky', 'transparent'],
    },
    size: {
      control: 'select',
      options: ['default', 'sm', 'lg'],
    },
  },
}

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      <Header>
        <HeaderBrand>
          <span className="text-primary">Level</span> AI
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavItem href="#" active>Dashboard</HeaderNavItem>
          <HeaderNavItem href="#">Conversations</HeaderNavItem>
          <HeaderNavItem href="#">Analytics</HeaderNavItem>
          <HeaderNavItem href="#">Settings</HeaderNavItem>
        </HeaderNav>
        <HeaderActions>
          <ThemeToggle />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </HeaderActions>
      </Header>
      <main className="p-8">
        <h1 className="text-3xl font-display font-bold">Welcome to Level AI</h1>
        <p className="mt-4">Your main content goes here.</p>
      </main>
    </div>
  ),
}

export const WithSearch: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      <Header variant="elevated" size="lg">
        <HeaderBrand>
          <span className="text-primary">Level</span> AI
        </HeaderBrand>
        <div className="flex-1 max-w-md mx-8">
          <Input
            type="search"
            placeholder="Search conversations..."
            className="w-full"
          />
        </div>
        <HeaderActions>
          <Button variant="ghost" size="sm">Docs</Button>
          <Button variant="ghost" size="sm">Support</Button>
          <HeaderDivider />
          <ThemeToggle />
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </HeaderActions>
      </Header>
      <main className="p-8">
        <h1 className="text-3xl font-display font-bold">Search Header</h1>
        <p className="mt-4">Header with integrated search functionality.</p>
      </main>
    </div>
  ),
}

export const Sticky: Story = {
  render: () => (
    <div className="min-h-[150vh] bg-background">
      <Header variant="sticky">
        <HeaderBrand>
          <span className="text-primary">Level</span> AI
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavItem href="#" active>Home</HeaderNavItem>
          <HeaderNavItem href="#">Features</HeaderNavItem>
          <HeaderNavItem href="#">Pricing</HeaderNavItem>
          <HeaderNavItem href="#">About</HeaderNavItem>
        </HeaderNav>
        <HeaderActions>
          <Button variant="outline" size="sm">Sign In</Button>
          <Button size="sm">Get Started</Button>
        </HeaderActions>
      </Header>
      <main className="p-8">
        <h1 className="text-4xl font-display font-bold mb-4">Sticky Header</h1>
        <p className="mb-8">Scroll down to see the header stick to the top of the page.</p>
        <div className="space-y-4">
          {Array.from({ length: 50 }, (_, i) => (
            <p key={i}>
              This is paragraph {i + 1}. The header will remain visible as you scroll.
            </p>
          ))}
        </div>
      </main>
    </div>
  ),
}

export const Transparent: Story = {
  render: () => (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 to-secondary/20">
      <Header variant="transparent">
        <HeaderBrand>
          <span className="text-primary">Level</span> AI
        </HeaderBrand>
        <HeaderNav>
          <HeaderNavItem href="#" active>Dashboard</HeaderNavItem>
          <HeaderNavItem href="#">Analytics</HeaderNavItem>
        </HeaderNav>
        <HeaderActions>
          <Button variant="ghost">Settings</Button>
        </HeaderActions>
      </Header>
      <main className="p-8">
        <h1 className="text-4xl font-display font-bold">Transparent Header</h1>
        <p className="mt-4">The header blends with the background.</p>
      </main>
    </div>
  ),
}

export const AllSizes: Story = {
  render: () => (
    <div className="space-y-8 p-8 bg-background">
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Small Header</p>
        <Header size="sm" className="relative">
          <HeaderBrand>
            <span className="text-sm">Level AI</span>
          </HeaderBrand>
          <HeaderActions>
            <Button size="sm" variant="ghost">Menu</Button>
          </HeaderActions>
        </Header>
      </div>
      
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Default Header</p>
        <Header size="default" className="relative">
          <HeaderBrand>Level AI</HeaderBrand>
          <HeaderNav>
            <HeaderNavItem href="#" active>Home</HeaderNavItem>
            <HeaderNavItem href="#">About</HeaderNavItem>
          </HeaderNav>
          <HeaderActions>
            <Button variant="ghost">Sign In</Button>
          </HeaderActions>
        </Header>
      </div>
      
      <div>
        <p className="mb-2 text-sm text-muted-foreground">Large Header</p>
        <Header size="lg" className="relative">
          <HeaderBrand>
            <span className="text-2xl">Level AI</span>
          </HeaderBrand>
          <HeaderNav>
            <HeaderNavItem href="#" active>Dashboard</HeaderNavItem>
            <HeaderNavItem href="#">Conversations</HeaderNavItem>
            <HeaderNavItem href="#">Analytics</HeaderNavItem>
          </HeaderNav>
          <HeaderActions>
            <Button size="lg">Get Started</Button>
          </HeaderActions>
        </Header>
      </div>
    </div>
  ),
}

export const ComplexHeader: Story = {
  render: () => (
    <div className="min-h-screen bg-background">
      <Header variant="elevated" size="lg">
        <HeaderBrand>
          <div className="w-10 h-10 bg-primary rounded-lg flex items-center justify-center shadow-sm">
            <span className="text-primary-foreground font-bold">L</span>
          </div>
          <span className="ml-2">Level AI</span>
        </HeaderBrand>
        
        <HeaderNav>
          <HeaderNavItem href="#" active>Dashboard</HeaderNavItem>
          <HeaderNavItem href="#">
            Conversations
            <span className="ml-1 text-xs bg-destructive text-destructive-foreground px-1.5 py-0.5 rounded-full">
              3
            </span>
          </HeaderNavItem>
          <HeaderNavItem href="#">Analytics</HeaderNavItem>
          <HeaderNavItem href="#">Team</HeaderNavItem>
        </HeaderNav>
        
        <HeaderActions>
          <Button variant="ghost" size="sm">
            <Bell className="w-4 h-4" />
            <span className="sr-only">Notifications</span>
          </Button>
          <HeaderDivider />
          <div className="flex items-center gap-2">
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>JD</AvatarFallback>
            </Avatar>
            <div className="hidden md:block">
              <p className="text-sm font-medium leading-none">John Doe</p>
              <p className="text-xs text-muted-foreground">john@levelai.com</p>
            </div>
          </div>
        </HeaderActions>
      </Header>
      <main className="p-8">
        <h1 className="text-3xl font-display font-bold">Complex Header Example</h1>
        <p className="mt-4">A header with multiple interactive elements and user information.</p>
      </main>
    </div>
  ),
}