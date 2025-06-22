# Level AI Design System - Web Components

A comprehensive React component library built with Tailwind CSS, OKLCH color system, and brutalist design principles.

## Installation

```bash
# Install via GitHub Packages
npm install @wearelevelai/design-system-web

# Or with pnpm
pnpm add @wearelevelai/design-system-web
```

### Registry Configuration

Add this to your `.npmrc` file:

```
@wearelevelai:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## Quick Start

```jsx
import { Button, Card, Input } from '@wearelevelai/design-system-web'
import '@wearelevelai/design-system-web/styles.css'

function App() {
  return (
    <Card>
      <h1>Welcome to Level AI</h1>
      <Input placeholder="Enter your name" />
      <Button>Get Started</Button>
    </Card>
  )
}
```

## Features

- ✨ **33 Production-Ready Components** - Complete component library
- 🎨 **OKLCH Color System** - Perceptually uniform colors
- 🎯 **Brutalist Design** - Bold shadows and animations
- 🌗 **Dark Mode Support** - Automatic theme switching
- ♿ **Accessibility First** - WCAG compliant components
- 🔥 **TypeScript Support** - Full type definitions
- ⚡ **Tree Shakeable** - Import only what you need

## Components

### Core Components
- `Button` - Interactive buttons with 7 variants
- `Input` - Form inputs with validation states
- `Textarea` - Multiline text input
- `Label` - Accessible form labels

### Layout & Display
- `Card` - Content containers with variants
- `Badge` - Status indicators
- `Table` - Data display tables
- `Skeleton` - Loading placeholders
- `Accordion` - Collapsible content

### Interactive Components
- `Dialog` - Modal dialogs
- `Select` - Custom dropdowns
- `Checkbox` - Checkboxes with indeterminate state
- `RadioGroup` - Single choice selections
- `Switch` - Toggle controls
- `Tabs` - Tabbed navigation
- `Progress` - Progress indicators

### Advanced Components
- `Calendar` - Date selection
- `DatePicker` - Date input components
- `Command` - Command palette
- `DataTable` - Advanced data tables
- `Carousel` - Image/content sliders

## Styling

The design system uses CSS custom properties for theming:

```css
:root {
  --background: oklch(0.9664 0.0011 197.1385);
  --foreground: oklch(0.3479 0.0286 181.9951);
  --primary: oklch(0.8918 0.1838 96.9730);
  --shadow-md: 3px 3px 0px 0px hsl(0 0% 80.7843% / 1.00);
}
```

### Brutalist Shadows

Components feature distinctive 3px offset shadows:

```jsx
<Button className="shadow-md hover:shadow-lg">
  Brutalist Button
</Button>
```

### Press Animations

Interactive elements include press effects:

```jsx
<Button className="active:translate-x-[1px] active:translate-y-[1px]">
  Press Me
</Button>
```

## Customization

### Tailwind Configuration

```js
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        primary: 'var(--primary)',
        background: 'var(--background)',
        foreground: 'var(--foreground)',
      },
      boxShadow: {
        'md': 'var(--shadow-md)',
        'lg': 'var(--shadow-lg)',
      }
    }
  }
}
```

### Component Variants

Use `cva` for consistent component variants:

```jsx
import { cva } from 'class-variance-authority'

const buttonVariants = cva(
  'inline-flex items-center justify-center rounded-lg font-medium',
  {
    variants: {
      variant: {
        default: 'bg-primary text-primary-foreground shadow-md',
        outline: 'border border-input bg-background shadow-sm',
      }
    }
  }
)
```

## Development

```bash
# Install dependencies
pnpm install

# Start development
pnpm dev

# Build components
pnpm build

# Run Storybook
pnpm storybook

# Run tests
pnpm test
```

## Documentation

- [Storybook](https://ui-storybook.wearelevel.ai) - Interactive component docs
- [Migration Guide](../../docs/MIGRATION_GUIDE.md) - Upgrading from legacy colors
- [CLAUDE.md](../../CLAUDE.md) - Technical architecture

## License

MIT © Level AI

## Support

For issues and feature requests, visit our [GitHub repository](https://github.com/wearelevelai/ui.wearelevel.ai).