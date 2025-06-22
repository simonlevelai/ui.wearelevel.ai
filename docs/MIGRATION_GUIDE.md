# OKLCH Color System Migration Guide

This guide helps you migrate from the legacy HSL-based color system to the new OKLCH-based design system with brutalist shadows.

## Overview

The Level AI design system has been updated to use:
- **OKLCH color space** for perceptually uniform colors
- **CSS custom properties** for dynamic theming
- **Brutalist shadows** with 3px offsets
- **Improved animations** with press effects

## What Changed

### 1. Color System
- Moved from HSL to OKLCH color space
- Colors are now defined as CSS custom properties in `styles.css`
- Automatic light/dark theme switching via CSS

### 2. Shadow System
```css
/* Old */
shadow-sm: 0 1px 2px 0 rgb(0 0 0 / 0.05)

/* New - Brutalist style */
shadow-md: 3px 3px 0px 0px hsl(0 0% 80.7843% / 1.00)
```

### 3. Component Updates
All components now use:
- CSS custom properties for colors
- New shadow utilities
- Press animations on interactive elements

## Migration Steps

### Step 1: Update Tailwind Config

Replace hard-coded color values with CSS custom properties:

```javascript
// tailwind.config.js
colors: {
  // Map brand colors to CSS variables
  sunshine: 'var(--primary)',
  earthstone: 'var(--foreground)',
  paledawn: 'var(--background)',
  // ... other mappings
}
```

### Step 2: Update Component Classes

#### Before:
```jsx
<button className="bg-sunshine text-earthstone shadow-sm">
  Click me
</button>
```

#### After:
```jsx
<button className="bg-primary text-primary-foreground shadow-md hover:shadow-lg active:translate-x-[1px] active:translate-y-[1px]">
  Click me
</button>
```

### Step 3: Use Semantic Color Names

Instead of brand-specific colors, use semantic names:
- `primary` instead of `sunshine`
- `foreground` instead of `earthstone`
- `background` instead of `paledawn`
- `destructive` instead of `sunsetcoral`
- `secondary` instead of `amberglow`

### Step 4: Update Shadow Classes

Replace standard shadows with brutalist variants:
- `shadow-sm` → `shadow-sm` (updated with border effect)
- `shadow` → `shadow-md` (3px offset)
- `shadow-md` → `shadow-lg` (4px offset)
- `shadow-lg` → `shadow-xl` (5px offset)

### Step 5: Add Press Animations

For interactive elements, add press effects:
```jsx
className="... active:translate-x-[1px] active:translate-y-[1px] active:shadow-sm"
```

## Component-Specific Changes

### Button
- Now includes press animations by default
- Uses shadow-md for elevated appearance
- Variants updated with new color system

### Input/Textarea
- Validation states use new semantic colors
- Focus states have enhanced visibility
- Error states use destructive color

### Card
- New variants: default, elevated, flat, ghost
- Elevated variant uses shadow-lg
- Ghost variant for subtle containers

### Dialog/Modal
- Enhanced overlay with backdrop-blur
- Content uses shadow-xl for prominence
- Smooth enter/exit animations

### Table
- Wrapped in container with border and shadow
- Row hover states use muted color
- Border colors use opacity modifiers

## Design Tokens

The design tokens package now includes:
- OKLCH values for light/dark themes
- Legacy hex values for backward compatibility
- Organized by semantic purpose

### Using Design Tokens

```typescript
import { tokens } from '@levelai/design-tokens'

// Access OKLCH colors (from colors.json)
const background = 'oklch(0.9664 0.0011 197.1385)'

// Legacy brand colors still available
const sunshine = tokens.color.brand.sunshine // #feda00
```

## CSS Architecture

### styles.css Structure
```css
:root {
  /* Semantic colors */
  --background: oklch(0.9664 0.0011 197.1385);
  --foreground: oklch(0.3479 0.0286 181.9951);
  
  /* Shadows */
  --shadow-md: 3px 3px 0px 0px hsl(0 0% 80.7843% / 1.00);
}

.dark {
  /* Dark theme overrides */
  --background: oklch(0.2497 0.0305 234.1628);
  --foreground: oklch(0.9306 0.0197 349.0785);
}
```

## Breaking Changes

1. **Direct color references** - Replace `bg-sunshine` with `bg-primary`
2. **Shadow utilities** - Update shadow classes to new system
3. **Import paths** - No changes to import paths
4. **Component APIs** - No changes to component props

## Backward Compatibility

- Old color names are mapped to new values in Tailwind config
- Design tokens maintain legacy hex values
- No changes required for existing component usage

## Testing Your Migration

1. **Visual regression** - Check Storybook for component appearance
2. **Theme switching** - Verify dark mode works correctly
3. **Interactions** - Test press animations and hover states
4. **Cross-browser** - OKLCH is supported in modern browsers

## Troubleshooting

### Colors look different
OKLCH colors may appear slightly different due to improved color space. This is expected and provides better perceptual uniformity.

### Shadows not appearing
Ensure you're using the new shadow classes (shadow-md, shadow-lg) not the default Tailwind ones.

### Theme not switching
Check that CSS custom properties are properly loaded and not overridden by inline styles.

## Resources

- [OKLCH Color Space](https://oklch.com/)
- [CSS Custom Properties](https://developer.mozilla.org/en-US/docs/Web/CSS/--*)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)