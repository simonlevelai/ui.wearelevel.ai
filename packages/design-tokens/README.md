# Level AI Design Tokens

Centralized design tokens for the Level AI design system, providing consistent colors, typography, spacing, and more across all platforms.

## Installation

```bash
# Install via GitHub Packages
npm install @wearelevelai/design-tokens

# Or with pnpm
pnpm add @wearelevelai/design-tokens
```

### Registry Configuration

Add this to your `.npmrc` file:

```
@wearelevelai:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN
```

## Features

- 🎨 **OKLCH Color System** - Perceptually uniform color space
- 🌗 **Light/Dark Themes** - Automatic theme support
- 📏 **Consistent Spacing** - Standardized spacing scale
- 🔤 **Typography Scale** - Font sizes and weights
- 🔄 **Cross-Platform** - Works with web and native
- 📦 **Multiple Formats** - CSS, SCSS, JSON, JS exports

## Usage

### TypeScript/JavaScript

```typescript
import { tokens, getColor, getSpacing } from '@wearelevelai/design-tokens'

// Access color tokens
const primaryColor = tokens.color.semantic.primary // '#feda00'
const backgroundColor = getColor('semantic.background') // '#ffffdc'

// Access spacing tokens
const spacing = getSpacing('4') // '1rem'
```

### CSS Custom Properties

```css
@import '@wearelevelai/design-tokens/css';

.my-component {
  background-color: var(--background);
  color: var(--foreground);
  padding: var(--spacing-4);
}
```

### SCSS Variables

```scss
@import '@wearelevelai/design-tokens/scss';

.my-component {
  background-color: $color-semantic-background;
  color: $color-semantic-foreground;
  padding: $spacing-4;
}
```

### JSON Data

```javascript
import tokens from '@wearelevelai/design-tokens/json'

console.log(tokens.color.light.primary.value) // 'oklch(0.8918 0.1838 96.9730)'
```

## Token Structure

### Colors

#### OKLCH Colors (Recommended)
```typescript
// Light theme
tokens.color.light.background    // oklch(0.9664 0.0011 197.1385)
tokens.color.light.foreground    // oklch(0.3479 0.0286 181.9951)
tokens.color.light.primary       // oklch(0.8918 0.1838 96.9730)

// Dark theme
tokens.color.dark.background     // oklch(0.2497 0.0305 234.1628)
tokens.color.dark.foreground     // oklch(0.9306 0.0197 349.0785)
tokens.color.dark.primary        // oklch(0.9195 0.0801 87.6670)
```

#### Legacy Brand Colors
```typescript
tokens.color.brand.sunshine      // #feda00
tokens.color.brand.earthstone    // #293f3b
tokens.color.brand.paledawn      // #ffffdc
tokens.color.brand.sunsetcoral   // #ff7f7a
tokens.color.brand.amberglow     // #ff9012
tokens.color.brand.terragreen    // #296b42
tokens.color.brand.verdantspring // #94da18
```

### Typography

```typescript
// Font families
tokens.font.family.sans          // 'DM Sans, system-ui, sans-serif'
tokens.font.family.display       // 'Concert One, system-ui, sans-serif'

// Font sizes
tokens.font.size.xs              // '0.75rem'
tokens.font.size.sm              // '0.875rem'
tokens.font.size.base            // '1rem'
tokens.font.size.lg              // '1.125rem'
tokens.font.size.xl              // '1.25rem'
tokens.font.size['2xl']          // '1.5rem'
tokens.font.size['3xl']          // '1.875rem'

// Font weights
tokens.font.weight.normal        // '400'
tokens.font.weight.medium        // '500'
tokens.font.weight.semibold      // '600'
tokens.font.weight.bold          // '700'
tokens.font.weight.extrabold     // '800'
```

### Spacing

```typescript
tokens.spacing['0']              // '0'
tokens.spacing['1']              // '0.25rem'
tokens.spacing['2']              // '0.5rem'
tokens.spacing['3']              // '0.75rem'
tokens.spacing['4']              // '1rem'
tokens.spacing['5']              // '1.25rem'
tokens.spacing['6']              // '1.5rem'
tokens.spacing['8']              // '2rem'
tokens.spacing['10']             // '2.5rem'
tokens.spacing['12']             // '3rem'
tokens.spacing['16']             // '4rem'
```

### Border Radius

```typescript
tokens.radius.none               // '0'
tokens.radius.sm                 // '0.25rem'
tokens.radius.base               // '0.5rem'
tokens.radius.md                 // '0.75rem'
tokens.radius.lg                 // '1rem'
tokens.radius.full               // '9999px'
```

## Utility Functions

### getColor(path: string)
Safely access nested color tokens:

```typescript
import { getColor } from '@levelai/design-tokens'

const primary = getColor('brand.sunshine')        // '#feda00'
const background = getColor('semantic.background') // '#ffffdc'
```

### getSpacing(key: string)
Get spacing values with fallback:

```typescript
import { getSpacing } from '@levelai/design-tokens'

const padding = getSpacing('4')    // '1rem'
const margin = getSpacing('8')     // '2rem'
const invalid = getSpacing('999')  // '0' (fallback)
```

### getFontSize(size: string)
Access font sizes safely:

```typescript
import { getFontSize } from '@levelai/design-tokens'

const body = getFontSize('base')   // '1rem'
const heading = getFontSize('2xl') // '1.5rem'
```

### getRadius(size: string)
Get border radius values:

```typescript
import { getRadius } from '@levelai/design-tokens'

const button = getRadius('md')     // '0.75rem'
const circle = getRadius('full')   // '9999px'
```

## Platform Usage

### Tailwind CSS

```javascript
// tailwind.config.js
import { tokens } from '@levelai/design-tokens'

export default {
  theme: {
    colors: {
      // Map to semantic tokens
      primary: 'var(--primary)',
      background: 'var(--background)',
      foreground: 'var(--foreground)',
      
      // Direct brand colors
      sunshine: tokens.color.brand.sunshine,
      earthstone: tokens.color.brand.earthstone,
    },
    fontFamily: {
      sans: tokens.font.family.sans.split(', '),
      display: tokens.font.family.display.split(', '),
    },
    spacing: tokens.spacing,
    borderRadius: tokens.radius,
  }
}
```

### React Native (NativeWind)

```typescript
import { tokens } from '@levelai/design-tokens'

const styles = {
  container: {
    backgroundColor: tokens.color.semantic.background,
    padding: tokens.spacing['4'],
  },
  text: {
    color: tokens.color.semantic.foreground,
    fontSize: tokens.font.size.base,
    fontFamily: tokens.font.family.sans,
  }
}
```

## Development

```bash
# Install dependencies
pnpm install

# Build tokens
pnpm build

# Watch for changes
pnpm dev
```

## Token Generation

Tokens are generated from JSON source files using Style Dictionary:

```
tokens/
├── colors.json      # Color definitions
├── typography.json  # Font families, sizes, weights
└── spacing.json     # Spacing and sizing scales
```

## Migration Guide

When migrating from legacy brand colors to OKLCH:

```diff
- background-color: #ffffdc;
+ background-color: oklch(0.9664 0.0011 197.1385);

- color: var(--sunshine);
+ color: var(--primary);
```

See the [Migration Guide](../../docs/MIGRATION_GUIDE.md) for complete details.

## License

MIT © Level AI

## Support

For issues and feature requests, visit our [GitHub repository](https://github.com/wearelevelai/ui.wearelevel.ai).