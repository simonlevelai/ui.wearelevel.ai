import * as React from 'react'
import { cn } from '../../lib/utils'
import { cva, type VariantProps } from 'class-variance-authority'

const footerVariants = cva(
  'flex bg-background text-foreground transition-all',
  {
    variants: {
      variant: {
        default: 'border-t border-border',
        elevated: 'border-t border-border shadow-lg',
        minimal: 'border-0',
        sticky: 'sticky bottom-0 z-40 border-t border-border backdrop-blur-sm bg-background/90',
      },
      size: {
        default: 'min-h-[200px] py-12 px-6',
        sm: 'py-6 px-4',
        lg: 'min-h-[300px] py-16 px-8',
      },
      layout: {
        default: 'flex-col gap-8',
        centered: 'flex-col items-center text-center gap-8',
        inline: 'flex-row items-center justify-between',
      },
    },
    defaultVariants: {
      variant: 'default',
      size: 'default',
      layout: 'default',
    },
  }
)

export interface FooterProps
  extends React.HTMLAttributes<HTMLElement>,
    VariantProps<typeof footerVariants> {}

const Footer = React.forwardRef<HTMLElement, FooterProps>(
  ({ className, variant, size, layout, ...props }, ref) => (
    <footer
      ref={ref}
      className={cn(footerVariants({ variant, size, layout, className }))}
      {...props}
    />
  )
)
Footer.displayName = 'Footer'

const FooterContent = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('container mx-auto', className)}
    {...props}
  />
))
FooterContent.displayName = 'FooterContent'

const FooterSection = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('flex flex-col gap-4', className)}
    {...props}
  />
))
FooterSection.displayName = 'FooterSection'

const FooterGrid = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn('grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8', className)}
    {...props}
  />
))
FooterGrid.displayName = 'FooterGrid'

const FooterTitle = React.forwardRef<
  HTMLHeadingElement,
  React.HTMLAttributes<HTMLHeadingElement>
>(({ className, ...props }, ref) => (
  <h3
    ref={ref}
    className={cn('text-lg font-semibold mb-2', className)}
    {...props}
  />
))
FooterTitle.displayName = 'FooterTitle'

const FooterLink = React.forwardRef<
  HTMLAnchorElement,
  React.AnchorHTMLAttributes<HTMLAnchorElement>
>(({ className, ...props }, ref) => (
  <a
    ref={ref}
    className={cn(
      'text-sm text-muted-foreground hover:text-primary transition-colors',
      className
    )}
    {...props}
  />
))
FooterLink.displayName = 'FooterLink'

const FooterText = React.forwardRef<
  HTMLParagraphElement,
  React.HTMLAttributes<HTMLParagraphElement>
>(({ className, ...props }, ref) => (
  <p
    ref={ref}
    className={cn('text-sm text-muted-foreground', className)}
    {...props}
  />
))
FooterText.displayName = 'FooterText'

const FooterDivider = React.forwardRef<
  HTMLHRElement,
  React.HTMLAttributes<HTMLHRElement>
>(({ className, ...props }, ref) => (
  <hr
    ref={ref}
    className={cn('my-6 border-border', className)}
    {...props}
  />
))
FooterDivider.displayName = 'FooterDivider'

const FooterBottom = React.forwardRef<
  HTMLDivElement,
  React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
  <div
    ref={ref}
    className={cn(
      'flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground',
      className
    )}
    {...props}
  />
))
FooterBottom.displayName = 'FooterBottom'

export {
  Footer,
  FooterContent,
  FooterSection,
  FooterGrid,
  FooterTitle,
  FooterLink,
  FooterText,
  FooterDivider,
  FooterBottom,
  footerVariants,
}