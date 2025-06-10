import type { Meta, StoryObj } from '@storybook/react'
import { useState } from 'react'
import { 
  Calculator,
  Calendar,
  CreditCard,
  Settings,
  Smile,
  User,
  Search,
  FileText,
  Home,
  MessageSquare,
  Bell,
} from 'lucide-react'
import { Button } from '../components/ui/button'
import {
  Command,
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
  CommandSeparator,
  CommandShortcut,
} from '../components/ui/command'

const meta = {
  title: 'Components/Command',
  component: Command,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Command>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => (
    <Command className="rounded-lg border shadow-md max-w-md">
      <CommandInput placeholder="Type a command or search..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Suggestions">
          <CommandItem>
            <Calendar className="mr-2 h-4 w-4" />
            <span>Calendar</span>
          </CommandItem>
          <CommandItem>
            <Smile className="mr-2 h-4 w-4" />
            <span>Search Emoji</span>
          </CommandItem>
          <CommandItem>
            <Calculator className="mr-2 h-4 w-4" />
            <span>Calculator</span>
          </CommandItem>
        </CommandGroup>
        <CommandSeparator />
        <CommandGroup heading="Settings">
          <CommandItem>
            <User className="mr-2 h-4 w-4" />
            <span>Profile</span>
            <CommandShortcut>⌘P</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <CreditCard className="mr-2 h-4 w-4" />
            <span>Billing</span>
            <CommandShortcut>⌘B</CommandShortcut>
          </CommandItem>
          <CommandItem>
            <Settings className="mr-2 h-4 w-4" />
            <span>Settings</span>
            <CommandShortcut>⌘S</CommandShortcut>
          </CommandItem>
        </CommandGroup>
      </CommandList>
    </Command>
  ),
}

export const Dialog: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = useState(false)

    return (
      <>
        <p className="text-sm text-muted-foreground mb-4">
          Press{" "}
          <kbd className="pointer-events-none inline-flex h-5 select-none items-center gap-1 rounded border bg-muted px-1.5 font-mono text-[10px] font-medium text-muted-foreground opacity-100">
            <span className="text-xs">⌘</span>J
          </kbd>
        </p>
        <Button
          variant="outline"
          onClick={() => setOpen(true)}
        >
          Open Command Dialog
        </Button>
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Type a command or search..." />
          <CommandList>
            <CommandEmpty>No results found.</CommandEmpty>
            <CommandGroup heading="Suggestions">
              <CommandItem onSelect={() => setOpen(false)}>
                <Calendar className="mr-2 h-4 w-4" />
                <span>Calendar</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <Smile className="mr-2 h-4 w-4" />
                <span>Search Emoji</span>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <Calculator className="mr-2 h-4 w-4" />
                <span>Calculator</span>
              </CommandItem>
            </CommandGroup>
            <CommandSeparator />
            <CommandGroup heading="Settings">
              <CommandItem onSelect={() => setOpen(false)}>
                <User className="mr-2 h-4 w-4" />
                <span>Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => setOpen(false)}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘S</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
      </>
    )
  },
}

export const SearchExample: Story = {
  args: {},
  render: () => {
    const [searchQuery, setSearchQuery] = useState("")
    const [selectedItem, setSelectedItem] = useState<string | null>(null)

    const items = [
      { id: 1, title: "Level AI Analytics", type: "product", description: "Real-time conversation insights" },
      { id: 2, title: "Agent Performance", type: "report", description: "Monthly performance metrics" },
      { id: 3, title: "Customer Satisfaction", type: "report", description: "CSAT scores and trends" },
      { id: 4, title: "Call Volume Analysis", type: "dashboard", description: "Peak hours and patterns" },
      { id: 5, title: "Sentiment Analysis", type: "feature", description: "Emotion detection in conversations" },
      { id: 6, title: "Quality Monitoring", type: "product", description: "Automated QA scoring" },
      { id: 7, title: "Coaching Insights", type: "feature", description: "AI-powered agent coaching" },
      { id: 8, title: "Integration Settings", type: "settings", description: "Configure third-party tools" },
    ]

    const filteredItems = items.filter(item =>
      item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      item.description.toLowerCase().includes(searchQuery.toLowerCase())
    )

    const getIcon = (type: string) => {
      switch (type) {
        case 'product': return <Home className="mr-2 h-4 w-4" />
        case 'report': return <FileText className="mr-2 h-4 w-4" />
        case 'dashboard': return <Calendar className="mr-2 h-4 w-4" />
        case 'feature': return <MessageSquare className="mr-2 h-4 w-4" />
        case 'settings': return <Settings className="mr-2 h-4 w-4" />
        default: return <Search className="mr-2 h-4 w-4" />
      }
    }

    return (
      <div className="space-y-4">
        <Command className="rounded-lg border shadow-md max-w-lg">
          <CommandInput 
            placeholder="Search Level AI products, reports, and features..." 
            value={searchQuery}
            onValueChange={setSearchQuery}
          />
          <CommandList>
            <CommandEmpty>
              <div className="text-center py-6">
                <Search className="mx-auto h-8 w-8 text-muted-foreground mb-2" />
                <p>No results found for "{searchQuery}"</p>
                <p className="text-sm text-muted-foreground">Try searching for products, reports, or features</p>
              </div>
            </CommandEmpty>
            
            {filteredItems.length > 0 && (
              <CommandGroup heading="Results">
                {filteredItems.map((item) => (
                  <CommandItem 
                    key={item.id}
                    onSelect={() => setSelectedItem(item.title)}
                  >
                    {getIcon(item.type)}
                    <div className="flex flex-col">
                      <span>{item.title}</span>
                      <span className="text-xs text-muted-foreground">{item.description}</span>
                    </div>
                  </CommandItem>
                ))}
              </CommandGroup>
            )}
          </CommandList>
        </Command>
        
        {selectedItem && (
          <div className="p-3 bg-accent rounded-lg text-sm">
            <strong>Selected:</strong> {selectedItem}
          </div>
        )}
      </div>
    )
  },
}

export const LevelAICommandPalette: Story = {
  args: {},
  render: () => {
    const [open, setOpen] = useState(false)
    const [selectedAction, setSelectedAction] = useState<string | null>(null)

    const handleSelect = (action: string) => {
      setSelectedAction(action)
      setOpen(false)
    }

    return (
      <div className="space-y-4">
        <div className="text-center">
          <Button onClick={() => setOpen(true)}>
            Open Level AI Command Palette
          </Button>
          <p className="text-sm text-muted-foreground mt-2">
            Quick access to all Level AI features
          </p>
        </div>
        
        <CommandDialog open={open} onOpenChange={setOpen}>
          <CommandInput placeholder="Search Level AI actions..." />
          <CommandList>
            <CommandEmpty>No actions found.</CommandEmpty>
            
            <CommandGroup heading="Navigation">
              <CommandItem onSelect={() => handleSelect("dashboard")}>
                <Home className="mr-2 h-4 w-4" />
                <span>Go to Dashboard</span>
                <CommandShortcut>⌘D</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("analytics")}>
                <Calendar className="mr-2 h-4 w-4" />
                <span>View Analytics</span>
                <CommandShortcut>⌘A</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("reports")}>
                <FileText className="mr-2 h-4 w-4" />
                <span>Generate Reports</span>
                <CommandShortcut>⌘R</CommandShortcut>
              </CommandItem>
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup heading="AI Features">
              <CommandItem onSelect={() => handleSelect("sentiment")}>
                <Smile className="mr-2 h-4 w-4" />
                <span>Sentiment Analysis</span>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("coaching")}>
                <MessageSquare className="mr-2 h-4 w-4" />
                <span>AI Coaching</span>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("quality")}>
                <Bell className="mr-2 h-4 w-4" />
                <span>Quality Monitoring</span>
              </CommandItem>
            </CommandGroup>
            
            <CommandSeparator />
            
            <CommandGroup heading="Account">
              <CommandItem onSelect={() => handleSelect("profile")}>
                <User className="mr-2 h-4 w-4" />
                <span>Edit Profile</span>
                <CommandShortcut>⌘P</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("billing")}>
                <CreditCard className="mr-2 h-4 w-4" />
                <span>Billing & Usage</span>
                <CommandShortcut>⌘B</CommandShortcut>
              </CommandItem>
              <CommandItem onSelect={() => handleSelect("settings")}>
                <Settings className="mr-2 h-4 w-4" />
                <span>Settings</span>
                <CommandShortcut>⌘,</CommandShortcut>
              </CommandItem>
            </CommandGroup>
          </CommandList>
        </CommandDialog>
        
        {selectedAction && (
          <div className="p-4 bg-sunshine/10 border border-sunshine rounded-lg">
            <div className="flex items-center gap-2">
              <span className="text-lg">✨</span>
              <span className="font-medium">Action Selected:</span>
              <span className="text-sm bg-sunshine text-earthstone px-2 py-1 rounded">
                {selectedAction}
              </span>
            </div>
          </div>
        )}
      </div>
    )
  },
}