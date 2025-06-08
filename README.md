# Level AI Design System

A comprehensive design system for Level AI applications, built with React, TypeScript, and Tailwind CSS.

## 🎯 Phase 1 Complete - Foundation & Validation

### ✅ What's Been Accomplished

**Infrastructure:**
- ✅ TurboRepo monorepo with pnpm workspaces
- ✅ TypeScript configuration and build system
- ✅ Tailwind CSS with Level AI brand tokens
- ✅ Basic CI/CD pipeline with GitHub Actions
- ✅ Jest testing framework setup

**Components Implemented:**
- ✅ **Button** - Multiple variants (primary, secondary, success, destructive, outline, ghost, link) with Level AI branding
- ✅ **Input** - Form input with Level AI styling and focus states  
- ✅ **Card** - Layout component with header, content, footer sections

**Documentation & Testing:**
- ✅ Storybook setup with accessibility addon
- ✅ Component stories for all implemented components
- ✅ Unit tests for Button and Input components
- ✅ Comprehensive CLAUDE.md for development guidance

### 🎨 Level AI Brand Colors

```css
earthstone: #293f3b      /* Primary dark */
paledawn: #ffffdc        /* Light background */
sunsetcoral: #ff7f7a     /* Accent coral */  
sunshine: #feda00        /* Primary yellow */
amberglow: #ff9012       /* Secondary orange */
terragreen: #296b42      /* Success green */
verdantspring: #94da18   /* Bright green */
```

### 🚀 Quick Start

```bash
# Install dependencies
pnpm install

# Build all packages
pnpm build

# Run Storybook
pnpm storybook --filter=@levelai/design-system-web

# Run tests
pnpm test --filter=@levelai/design-system-web
```

### 📦 Package Structure

```
packages/
├── design-system-web/     # React components for web
├── design-system-native/  # React Native components (planned)
└── design-tokens/         # Centralized design tokens (planned)
```

### 🧪 Component Usage

```tsx
import { Button, Input, Card, CardHeader, CardTitle, CardContent } from '@levelai/design-system-web'

// Level AI branded button
<Button variant="default">Primary Action</Button>
<Button variant="success">Success Action</Button>

// Input with Level AI styling
<Input placeholder="Enter your message..." />

// Card layout
<Card>
  <CardHeader>
    <CardTitle>Level AI Dashboard</CardTitle>
  </CardHeader>
  <CardContent>
    Your content here
  </CardContent>
</Card>
```

### 📋 Next Steps (Phase 2)

- [ ] Add 8-10 additional components (Modal, Alert, Table, Form elements)
- [ ] Implement theming system with dark mode support
- [ ] Set up cross-platform React Native components
- [ ] Add design token synchronization system
- [ ] Implement visual regression testing
- [ ] Create bundle size monitoring

### 🔗 Links

- [Development Plan](./DEVELOPMENT_PLAN.md)
- [Architecture Guide](./CLAUDE.md)
- Components: See Storybook for live examples

---

**Status:** Phase 1 Complete ✅ | **Next:** Phase 2 - Expansion & Integration