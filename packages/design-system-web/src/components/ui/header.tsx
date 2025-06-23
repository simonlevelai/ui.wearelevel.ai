import * as React from 'react'
import { cn } from '../../lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const headerVariants = cva(
  'flex items-center bg-background text-foreground transition-all',
  {
    variants: {
      variant: {
        default: 'border-b border-border shadow-sm',
        elevated: 'border-b border-border shadow-md',
        sticky: 'sticky top-0 z-50 border-b border-border shadow-sm backdrop-blur-sm bg-background/90',
        transparent: 'bg-transparent border-0',
      },
      size: {
        default: 'h-16 px-6',
        sm: 'h-12 px-4',
        lg: 'h-20 px-8',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
    },
  }
)

export interface HeaderProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof headerVariants> {}

const Header = React.forwardRef<HTMLElement, HeaderProps>(
  ({ className, variant, size, ...props }, ref) => (
    <header
      ref={ref}
      className={cn(headerVariants({ variant, size, className }))}
      {...props}
    />
  )
)
Header.displayName = 'Header'

const HeaderBrand = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-2 font-display text-xl font-bold', className)}
    {...props}
  />
))
HeaderBrand.displayName = 'HeaderBrand'

const HeaderNav = React.forwardRef<
  HTMLElement,
  React.HTMLAttributes<HTMLElement>
>(({ className, ...props }, ref) => (
  <nav
    ref={ref}
    className={cn('flex items-center gap-6 ml-auto', className)}
    {...props}
  />
))
HeaderNav.displayName = 'HeaderNav'

const HeaderNavItem = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement> & {
    active?: boolean
  }
>(({ className, active, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      'text-sm font-medium transition-colors hover:text-primary',
      active && 'text-primary',
      !active && 'text-muted-foreground',
      className
    )}
    {...props}
  />
))
HeaderNavItem.displayName = 'HeaderNavItem'

const HeaderActions = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex items-center gap-4 ml-auto', className)}
    {...props}
  />
))
HeaderActions.displayName = 'HeaderActions'

const HeaderDivider = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('mx-4 h-6 w-px bg-border', className)}
    {...props}
  />
))
HeaderDivider.displayName = 'HeaderDivider'

export {
  Header,
  HeaderBrand,
  HeaderNav,
  HeaderNavItem,
  HeaderActions,
  HeaderDivider,
  headerVariants,
}