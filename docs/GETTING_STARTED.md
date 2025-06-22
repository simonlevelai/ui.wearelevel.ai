# Getting Started with Level AI Design System

## 🚀 Quick Setup (5 minutes)

### Step 1: GitHub Token Setup

1. **Create GitHub Token**: Go to [GitHub → Settings → Developer settings → Personal access tokens](https://github.com/settings/tokens)
2. **Generate new token** with these permissions:
   - `read:packages` (to install packages)
   - `repo` (if working with private repos)
3. **Copy the token** (you'll need it next)

### Step 2: Configure npm Registry

Create or update `.npmrc` in your project root:

```bash
# .npmrc
@wearelevelai:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=YOUR_GITHUB_TOKEN_HERE
```

**Replace `YOUR_GITHUB_TOKEN_HERE`** with your actual token.

### Step 3: Install Design System

```bash
# Install the main component library
npm install @wearelevelai/design-system-web

# Optional: Install design tokens
npm install @wearelevelai/design-tokens
```

### Step 4: Basic Usage

```jsx
// Import components
import { Button, Card, Input } from '@wearelevelai/design-system-web'

// Import styles (important!)
import '@wearelevelai/design-system-web/styles.css'

function App() {
  return (
    <Card>
      <h1>Level AI App</h1>
      <Input placeholder="Enter something..." />
      <Button>Get Started</Button>
    </Card>
  )
}
```

## 🎨 Available Components (33 total)

### Core Components
- `Button` - 7 variants with Level AI branding
- `Input` - Form inputs with validation
- `Card` - Content containers
- `Badge` - Status indicators

### Interactive
- `Dialog` - Modal dialogs
- `Select` - Custom dropdowns  
- `Checkbox` - Enhanced checkboxes
- `Switch` - Toggle controls
- `Tabs` - Tabbed navigation

### Advanced
- `Calendar` - Date selection
- `DataTable` - Advanced tables
- `Command` - Command palette
- `Carousel` - Content sliders

[See all components in Storybook](https://ui-storybook.wearelevel.ai)

## 🎯 Level AI Features

### OKLCH Color System
Perceptually uniform colors for better design consistency:
```css
/* Automatic light/dark themes */
background-color: var(--background);
color: var(--foreground);
```

### Brutalist Design
Distinctive 3px offset shadows and press animations:
```jsx
<Button className="shadow-md hover:shadow-lg">
  Press me!
</Button>
```

### TypeScript Support
Full type definitions included:
```typescript
import { ButtonProps } from '@wearelevelai/design-system-web'
```

## 🛠️ Integration Examples

### Next.js Setup
```jsx
// pages/_app.tsx
import '@wearelevelai/design-system-web/styles.css'
import type { AppProps } from 'next/app'

export default function App({ Component, pageProps }: AppProps) {
  return <Component {...pageProps} />
}
```

### Tailwind Integration
```js
// tailwind.config.js
module.exports = {
  content: [
    './src/**/*.{js,ts,jsx,tsx}',
    './node_modules/@wearelevelai/design-system-web/dist/**/*.js'
  ],
  // ... rest of config
}
```

### Vite Setup
```js
// vite.config.js
export default {
  optimizeDeps: {
    include: ['@wearelevelai/design-system-web']
  }
}
```

## 🔧 Troubleshooting

### "Package not found" Error
- Check your `.npmrc` file exists and has the correct token
- Verify token has `read:packages` permission
- Try `npm logout` then reinstall

### Components Not Styled
- Make sure you imported the CSS: `import '@wearelevelai/design-system-web/styles.css'`
- Check that Tailwind is configured to include the package files

### TypeScript Errors
- Ensure `@types/react` and `@types/react-dom` are installed
- Check TypeScript version compatibility (requires ≥4.5)

## 📞 Support

- **Storybook**: [Component docs and examples](https://ui-storybook.wearelevel.ai)
- **Issues**: [GitHub Issues](https://github.com/wearelevelai/ui.wearelevel.ai/issues)
- **Slack**: #design-system (Level AI workspace)

## 🚀 What's Next?

1. **Explore Storybook** - See all components in action
2. **Start small** - Replace a few existing components
3. **Join #design-system** - Share feedback and ask questions
4. **Contribute** - Help improve the system for everyone

Ready to build consistent, beautiful Level AI experiences! ✨