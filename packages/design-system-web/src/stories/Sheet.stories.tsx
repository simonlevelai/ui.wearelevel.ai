import type { Meta, StoryObj } from '@storybook/react'
import { X } from 'lucide-react'
import { Button } from '../components/ui/button'
import { Input } from '../components/ui/input'
import { Label } from '../components/ui/label'
import {
  Sheet,
  SheetClose,
  SheetContent,
  SheetDescription,
  SheetFooter,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from '../components/ui/sheet'

const meta = {
  title: 'Components/Sheet',
  component: Sheet,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Sheet>

export default meta
type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {},
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline">Open Sheet</Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Edit profile</SheetTitle>
          <SheetDescription>
            Make changes to your profile here. Click save when you're done.
          </SheetDescription>
        </SheetHeader>
        <div className="grid gap-4 py-4">
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="name" className="text-right">
              Name
            </Label>
            <Input id="name" value="Pedro Duarte" className="col-span-3" />
          </div>
          <div className="grid grid-cols-4 items-center gap-4">
            <Label htmlFor="username" className="text-right">
              Username
            </Label>
            <Input id="username" value="@peduarte" className="col-span-3" />
          </div>
        </div>
        <SheetFooter>
          <SheetClose asChild>
            <Button type="submit">Save changes</Button>
          </SheetClose>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}

export const Sides: Story = {
  args: {},
  render: () => (
    <div className="grid grid-cols-2 gap-4">
      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Left</Button>
        </SheetTrigger>
        <SheetContent side="left">
          <SheetHeader>
            <SheetTitle>Left Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the left.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Right</Button>
        </SheetTrigger>
        <SheetContent side="right">
          <SheetHeader>
            <SheetTitle>Right Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the right.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Top</Button>
        </SheetTrigger>
        <SheetContent side="top">
          <SheetHeader>
            <SheetTitle>Top Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the top.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>

      <Sheet>
        <SheetTrigger asChild>
          <Button variant="outline">Bottom</Button>
        </SheetTrigger>
        <SheetContent side="bottom">
          <SheetHeader>
            <SheetTitle>Bottom Sheet</SheetTitle>
            <SheetDescription>
              This sheet slides in from the bottom.
            </SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  ),
}

export const MobileMenu: Story = {
  args: {},
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="ghost" size="icon">
          <svg
            className="h-6 w-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </Button>
      </SheetTrigger>
      <SheetContent side="left" className="w-[300px] sm:w-[400px]">
        <SheetHeader>
          <SheetTitle>Menu</SheetTitle>
        </SheetHeader>
        <nav className="flex flex-col space-y-4 mt-8">
          <a href="#" className="text-lg font-medium hover:text-primary">
            Home
          </a>
          <a href="#" className="text-lg font-medium hover:text-primary">
            Products
          </a>
          <a href="#" className="text-lg font-medium hover:text-primary">
            Analytics
          </a>
          <a href="#" className="text-lg font-medium hover:text-primary">
            Settings
          </a>
        </nav>
      </SheetContent>
    </Sheet>
  ),
}

export const ShoppingCart: Story = {
  args: {},
  render: () => (
    <Sheet>
      <SheetTrigger asChild>
        <Button variant="outline" size="icon" className="relative">
          <svg
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
            />
          </svg>
          <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-sunshine text-xs text-earthstone flex items-center justify-center">
            3
          </span>
        </Button>
      </SheetTrigger>
      <SheetContent>
        <SheetHeader>
          <SheetTitle>Shopping Cart</SheetTitle>
          <SheetDescription>
            You have 3 items in your cart
          </SheetDescription>
        </SheetHeader>
        <div className="mt-8 space-y-4">
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded bg-muted" />
            <div className="flex-1">
              <h4 className="text-sm font-semibold">Product Name</h4>
              <p className="text-sm text-muted-foreground">$19.99</p>
            </div>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded bg-muted" />
            <div className="flex-1">
              <h4 className="text-sm font-semibold">Another Product</h4>
              <p className="text-sm text-muted-foreground">$29.99</p>
            </div>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <div className="flex items-center space-x-4">
            <div className="h-16 w-16 rounded bg-muted" />
            <div className="flex-1">
              <h4 className="text-sm font-semibold">Third Product</h4>
              <p className="text-sm text-muted-foreground">$39.99</p>
            </div>
            <Button variant="ghost" size="icon">
              <X className="h-4 w-4" />
            </Button>
          </div>
        </div>
        <SheetFooter className="mt-8">
          <div className="w-full space-y-4">
            <div className="flex justify-between text-lg font-semibold">
              <span>Total</span>
              <span>$89.97</span>
            </div>
            <Button className="w-full" size="lg">
              Checkout
            </Button>
          </div>
        </SheetFooter>
      </SheetContent>
    </Sheet>
  ),
}