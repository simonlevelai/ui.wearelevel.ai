# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is the Level AI design system monorepo (`ui.wearelevel.ai`) containing:
- **packages/design-system-web**: React components with Tailwind CSS + shadcn/ui (33 components)
- **packages/design-system-native**: React Native components with NativeWind
- **packages/design-tokens**: Centralized design tokens (colors, typography, spacing)

## Architecture

- **Monorepo**: TurboRepo + pnpm for fast, deterministic builds
- **Component Strategy**: shadcn/ui as base, customized with OKLCH color system
- **Styling**: Tailwind CSS + CSS custom properties with brutalist shadows
- **Color System**: OKLCH color space for perceptual uniformity and accessibility
- **Theming**: CSS custom properties enable dynamic light/dark theme switching
- **Documentation**: Storybook with accessibility checks built-in
- **CI/CD**: GitHub Actions for build, test, and automatic publishing

## Color System & CSS Architecture

The design system uses **OKLCH color space** with **CSS custom properties** for dynamic theming:

```css
/* CSS Custom Properties (styles.css) */
:root {
  --background: oklch(0.9664 0.0011 197.1385);    /* Light theme background */
  --foreground: oklch(0.3479 0.0286 181.9951);    /* Text color */
  --primary: oklch(0.8918 0.1838 96.9730);        /* Primary yellow */
  --secondary: oklch(0.7418 0.1569 23.8896);      /* Secondary orange */
  --destructive: oklch(0.7418 0.1569 23.8896);    /* Error/destructive */
  --shadow-md: 3px 3px 0px 0px hsl(0 0% 80.7843% / 1.00); /* Brutalist shadows */
}

.dark {
  --background: oklch(0.2497 0.0305 234.1628);    /* Dark theme background */
  --foreground: oklch(0.9306 0.0197 349.0785);    /* Dark theme text */
  --primary: oklch(0.9195 0.0801 87.6670);        /* Dark theme primary */
}
```

### Legacy Brand Colors (backward compatibility)
```javascript
colors: {
  earthstone: '#293f3b',     // Primary dark → mapped to --foreground
  paledawn: '#ffffdc',       // Light background → mapped to --background  
  sunsetcoral: '#ff7f7a',    // Accent coral → mapped to --destructive
  sunshine: '#feda00',       // Primary yellow → mapped to --primary
  amberglow: '#ff9012',      // Secondary orange → mapped to --secondary
  terragreen: '#296b42',     // Success green
  verdantspring: '#94da18',  // Bright green
}

fontFamily: {
  sans: ['"DM Sans"', 'sans-serif'],        // Body text
  display: ['"Concert One"', 'cursive'],    // Headlines
}
```

### Brutalist Shadow System
- `shadow-sm`: Border effect with subtle offset
- `shadow-md`: 3px offset brutalist shadow (default)
- `shadow-lg`: 4px offset for elevated elements
- `shadow-xl`: 5px offset for prominent elements

All interactive components include press animations:
```css
active:translate-x-[1px] active:translate-y-[1px] active:shadow-sm
```

## Component Library

The design system includes 33 production-ready React components:

### Core Components
- **Button** - 7 variants (default, destructive, outline, secondary, ghost, link, success)
- **Input** - with validation states and sizing
- **Textarea** - multiline text input with error states
- **Label** - accessible form labels

### Layout & Display
- **Card** - container with header, content, and footer sections
- **Badge** - status indicators with 6 variants
- **Table** - data display with sorting capabilities
- **Skeleton** - loading state placeholders
- **Accordion** - collapsible content sections

### Interactive Components
- **Dialog/Modal** - accessible modal dialogs
- **Select/Dropdown** - custom dropdown menus
- **Checkbox** - with indeterminate state
- **RadioGroup** - single choice selections
- **Switch/Toggle** - on/off controls
- **Tabs** - tabbed navigation
- **Progress** - progress indicators

### Feedback & Utilities
- **Alert** - 4 variants for notifications
- **Toast** - temporary notifications with actions
- **Tooltip** - contextual help tooltips
- **ThemeToggle** - dark/light mode switcher

### Extended Components
- **Avatar** - user/profile images with fallback
- **Separator** - visual dividers
- **Breadcrumb** - navigation path display
- **Pagination** - page navigation controls
- **Slider** - range input control
- **Popover** - floating content panels
- **Sheet** - slide-out drawers/panels
- **HoverCard** - content on hover

### Advanced Components
- **Carousel** - image/content slider with auto-play
- **Calendar** - date selection with range support
- **DatePicker** - single and range date pickers
- **Command** - searchable command palette
- **DataTable** - advanced table with sorting/filtering

## Development Commands

```bash
# Install dependencies
pnpm install

# Start development for all packages
pnpm dev

# Build all packages
pnpm build

# Run Storybook
pnpm storybook

# Run tests
pnpm test

# Add new shadcn/ui component (in design-system-web)
cd packages/design-system-web
npx shadcn-ui@latest add [component-name]

# Generate design tokens (in design-tokens package)
cd packages/design-tokens
pnpm build
```

## Component Development Workflow

1. **Add new components**: Use shadcn/ui as starting point, customize with Level AI tokens
2. **Create stories**: Every component needs a Storybook story with accessibility checks
3. **Test**: Components should work in both web and native contexts
4. **Export**: Add to package index files for external consumption

## Key Files and Locations

- `packages/design-system-web/src/components/`: React components
- `packages/design-system-native/src/`: React Native components  
- `packages/design-tokens/tokens/`: Design token definitions
- `tailwind.config.js`: Shared Tailwind configuration
- `turbo.json`: Build pipeline configuration
- `.github/workflows/`: CI/CD automation

## Testing Strategy

- **Storybook**: Visual testing and component documentation
- **Jest + Testing Library**: Unit tests for component logic
- **Accessibility**: Built into Storybook with @storybook/addon-a11y

## Publishing

Packages are automatically published to GitHub Packages via semantic-release on version tags. Components are consumed as:

```typescript
import { Button } from '@levelai/design-system-web'
import { Button as NativeButton } from '@levelai/design-system-native'
```

## Tech Stack Compatibility Analysis

### ✅ Compatible Tool Combinations

- **TurboRepo + pnpm**: Excellent together, optimized for monorepos
- **React + Tailwind CSS**: Mature, well-supported combination
- **shadcn/ui + Tailwind**: Built specifically for this pairing
- **Storybook + Vite**: Fast builds, good DX for component development
- **NativeWind + React Native**: Brings Tailwind-like syntax to mobile

### ⚠️ Potential Compatibility Concerns

- **Style Dictionary + Tailwind**: Requires custom transforms for seamless integration
- **Design Tokens across platforms**: Manual sync needed between web/native token formats
- **shadcn/ui + Custom themes**: Some components may need significant customization

## Strengths

### Developer Experience

- **Rapid prototyping**: shadcn/ui provides production-ready components out of the box
- **Type safety**: TypeScript throughout the stack
- **Hot reloading**: Vite + Storybook for fast iteration
- **Unified tooling**: Single command to build/test all packages

### Maintainability

- **Design system consistency**: Centralized tokens prevent brand drift
- **Code sharing**: Monorepo enables shared utilities and configurations
- **Version coordination**: TurboRepo handles complex dependency graphs
- **Documentation**: Storybook serves as living style guide

### Performance

- **Tree shaking**: Modern bundling with optimal bundle sizes
- **Build caching**: TurboRepo's intelligent caching reduces CI times
- **CSS optimization**: Tailwind's purging removes unused styles

## Weaknesses

### Learning Curve

- **Multiple paradigms**: Teams need expertise in React, React Native, Tailwind, and Storybook
- **shadcn/ui complexity**: Copy-paste model requires understanding of underlying Radix primitives
- **Monorepo overhead**: Additional complexity in dependency management

### Platform Divergence Risk

- **Web vs Native gaps**: Not all Tailwind classes have NativeWind equivalents
- **Component API differences**: React Native constraints may force different APIs
- **Testing complexity**: Different testing strategies needed per platform

### Vendor Dependencies

- **shadcn/ui evolution**: Breaking changes in underlying Radix components
- **NativeWind maturity**: Relatively newer project compared to traditional React Native styling
- **Tailwind updates**: Major version changes may require significant migration

## Risks

### High Risk

- **NativeWind compatibility**: Limited support for complex Tailwind features
- **Design token sync**: Manual processes prone to human error
- **Bundle size growth**: Uncontrolled component library expansion

### Medium Risk

- **Migration complexity**: Moving existing Level AI apps to new design system
- **Performance regressions**: CSS-in-JS vs compiled CSS trade-offs
- **Team adoption**: Resistance to new tooling and workflows

### Low Risk

- **Build tool stability**: TurboRepo and pnpm are production-ready
- **React ecosystem**: Mature, stable foundation

## Recommendations

### Immediate Actions

1. **Prototype critical components first**: Button, Input, Card to validate the approach
2. **Set up automated token sync**: Use Style Dictionary with custom transforms for web/native
3. **Establish testing strategy**: Component tests + visual regression testing in Storybook
4. **Create migration guide**: Document how to adopt components in existing Level AI apps

### Architecture Improvements

1. **Add design token validation**: Ensure tokens work across all platforms before release
2. **Implement component composition patterns**: Enable easy customization without breaking changes
3. **Set up visual regression testing**: Chromatic or similar for catching UI changes
4. **Create bundle size monitoring**: Prevent performance regressions

### Long-term Considerations

1. **Evaluate Web Components**: Future-proof alternative that works across frameworks
2. **Consider design tool integration**: Figma tokens plugin for designer-developer handoff
3. **Plan for accessibility**: WCAG compliance testing and keyboard navigation
4. **Monitor ecosystem evolution**: Stay current with React Native styling solutions

### Risk Mitigation

- **Gradual rollout**: Start with new features, migrate existing ones incrementally  
- **Fallback strategies**: Keep existing styling approaches during transition
- **Team training**: Invest in upskilling developers on new toolchain
- **Documentation**: Comprehensive guides for common patterns and edge cases

## Notes

- Always use CSS custom properties (not hard-coded colors) in components
- Maintain consistency between web and native component APIs
- Use design tokens package to prevent drift between platforms
- Test components in consuming applications before major releases
- OKLCH colors provide better perceptual uniformity than HSL
- All interactive components should include press animations
- Use semantic color names (primary, secondary) instead of brand names

## Migration Information

See `/docs/MIGRATION_GUIDE.md` for detailed migration instructions from the legacy HSL system to the new OKLCH architecture.
