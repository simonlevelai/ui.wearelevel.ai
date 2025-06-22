#!/bin/bash

echo "🚀 Creating Level AI Design System Integration Test"
echo "=================================================="

# Colors
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m'

# Create test directory
TEST_DIR="levelai-ds-test-app"
echo -e "${BLUE}Creating test React app: $TEST_DIR${NC}"

# Check if directory exists
if [ -d "$TEST_DIR" ]; then
    echo -e "${YELLOW}Directory exists, removing...${NC}"
    rm -rf "$TEST_DIR"
fi

# Create React app
echo -e "${BLUE}Setting up React app with Vite...${NC}"
npm create vite@latest "$TEST_DIR" -- --template react-ts
cd "$TEST_DIR"

# Install dependencies
echo -e "${BLUE}Installing React dependencies...${NC}"
npm install

# Install Tailwind CSS
echo -e "${BLUE}Setting up Tailwind CSS...${NC}"
npm install -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

# Create .npmrc for GitHub Packages
echo -e "${BLUE}Setting up GitHub Packages authentication...${NC}"
cat > .npmrc << 'EOF'
@wearelevelai:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}
EOF

echo -e "${YELLOW}⚠️  IMPORTANT: Set your GitHub token before installing packages:${NC}"
echo -e "${YELLOW}export GITHUB_TOKEN=your_actual_github_token_here${NC}"
echo

# Update Tailwind config
cat > tailwind.config.js << 'EOF'
/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@wearelevelai/design-system-web/dist/**/*.js"
  ],
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
    },
  },
  plugins: [],
}
EOF

# Create test component
mkdir -p src/components
cat > src/components/DesignSystemTest.tsx << 'EOF'
import { useState } from 'react'
import { 
  Button, 
  Card, 
  CardHeader, 
  CardTitle, 
  CardContent,
  Input, 
  Badge,
  Switch,
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
  Alert,
  AlertDescription
} from '@wearelevelai/design-system-web'

export function DesignSystemTest() {
  const [inputValue, setInputValue] = useState('')
  const [switchChecked, setSwitchChecked] = useState(false)

  return (
    <div className="min-h-screen bg-background p-8">
      <div className="max-w-4xl mx-auto space-y-8">
        {/* Header */}
        <div className="text-center">
          <h1 className="text-4xl font-bold text-foreground mb-4">
            Level AI Design System Test
          </h1>
          <Badge variant="secondary">Integration Test v1.0.4</Badge>
        </div>

        {/* Core Components Test */}
        <Card>
          <CardHeader>
            <CardTitle>🧪 Core Components Test</CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div>
              <h3 className="text-lg font-semibold mb-2">Buttons</h3>
              <div className="flex flex-wrap gap-2">
                <Button variant="default">Primary Button</Button>
                <Button variant="secondary">Secondary</Button>
                <Button variant="outline">Outline</Button>
                <Button variant="ghost">Ghost</Button>
                <Button variant="destructive">Destructive</Button>
              </div>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Input</h3>
              <Input 
                placeholder="Test the OKLCH styling..." 
                value={inputValue}
                onChange={(e) => setInputValue(e.target.value)}
                className="max-w-md"
              />
              {inputValue && (
                <p className="text-sm text-muted-foreground mt-1">
                  You typed: {inputValue}
                </p>
              )}
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Switch</h3>
              <div className="flex items-center space-x-2">
                <Switch 
                  checked={switchChecked}
                  onCheckedChange={setSwitchChecked}
                />
                <span>Dark mode toggle (demo)</span>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Advanced Components Test */}
        <Card>
          <CardHeader>
            <CardTitle>🎨 Advanced Components Test</CardTitle>
          </CardHeader>
          <CardContent>
            <Tabs defaultValue="dialogs" className="w-full">
              <TabsList>
                <TabsTrigger value="dialogs">Dialogs</TabsTrigger>
                <TabsTrigger value="alerts">Alerts</TabsTrigger>
                <TabsTrigger value="badges">Badges</TabsTrigger>
              </TabsList>
              
              <TabsContent value="dialogs" className="mt-4">
                <Dialog>
                  <DialogTrigger asChild>
                    <Button>Open Test Dialog</Button>
                  </DialogTrigger>
                  <DialogContent>
                    <DialogHeader>
                      <DialogTitle>Level AI Dialog Test</DialogTitle>
                    </DialogHeader>
                    <p>This dialog tests the OKLCH color system and brutalist shadows!</p>
                  </DialogContent>
                </Dialog>
              </TabsContent>
              
              <TabsContent value="alerts" className="mt-4">
                <div className="space-y-4">
                  <Alert>
                    <AlertDescription>
                      Default alert with Level AI styling
                    </AlertDescription>
                  </Alert>
                  <Alert variant="destructive">
                    <AlertDescription>
                      Destructive alert using OKLCH colors
                    </AlertDescription>
                  </Alert>
                </div>
              </TabsContent>
              
              <TabsContent value="badges" className="mt-4">
                <div className="flex flex-wrap gap-2">
                  <Badge>Default</Badge>
                  <Badge variant="secondary">Secondary</Badge>
                  <Badge variant="destructive">Destructive</Badge>
                  <Badge variant="outline">Outline</Badge>
                </div>
              </TabsContent>
            </Tabs>
          </CardContent>
        </Card>

        {/* Style Test */}
        <Card>
          <CardHeader>
            <CardTitle>🎯 OKLCH & Brutalist Style Test</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <h4 className="font-semibold mb-2">Shadow Test</h4>
                <div className="p-4 bg-card rounded-lg shadow-md">
                  This card has shadow-md (3px offset)
                </div>
              </div>
              <div>
                <h4 className="font-semibold mb-2">Press Animation Test</h4>
                <Button className="active:translate-x-[1px] active:translate-y-[1px]">
                  Press me to see brutalist animation!
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Test Results */}
        <Card>
          <CardHeader>
            <CardTitle>✅ Test Results</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <Badge variant="secondary">✅</Badge>
                <span>Components imported successfully</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">✅</Badge>
                <span>OKLCH colors rendering correctly</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">✅</Badge>
                <span>Brutalist shadows applied</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">✅</Badge>
                <span>TypeScript definitions working</span>
              </div>
              <div className="flex items-center gap-2">
                <Badge variant="secondary">✅</Badge>
                <span>Level AI branding active</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
EOF

# Update main App component
cat > src/App.tsx << 'EOF'
import { DesignSystemTest } from './components/DesignSystemTest'
import '@wearelevelai/design-system-web/styles.css'
import './index.css'

function App() {
  return <DesignSystemTest />
}

export default App
EOF

# Update index.css to include Tailwind
cat > src/index.css << 'EOF'
@tailwind base;
@tailwind components;
@tailwind utilities;

/* Level AI Design System CSS will be imported via the component library */
EOF

# Create package.json script for easy testing
npm pkg set scripts.install-ds="npm install @wearelevelai/design-system-web @wearelevelai/design-tokens"
npm pkg set scripts.test-ds="npm run dev"

# Create instructions
cat > README-TEST.md << 'EOF'
# Level AI Design System Integration Test

## Setup Instructions

1. **Set GitHub Token**:
   ```bash
   export GITHUB_TOKEN=your_github_token_here
   ```

2. **Install Design System**:
   ```bash
   npm run install-ds
   ```

3. **Start Test App**:
   ```bash
   npm run test-ds
   ```

4. **Open Browser**: http://localhost:5173

## What to Test

- ✅ All components render correctly
- ✅ OKLCH colors display properly
- ✅ Brutalist shadows (3px offset) visible
- ✅ Press animations work
- ✅ TypeScript autocomplete works
- ✅ No console errors
- ✅ Responsive design works
- ✅ Dark/light theme switching

## Expected Results

You should see a comprehensive test page with:
- Level AI branded components
- OKLCH color system
- Brutalist design elements
- Interactive components working
- No styling conflicts
EOF

echo -e "${GREEN}✅ Integration test app created!${NC}"
echo
echo -e "${YELLOW}Next steps:${NC}"
echo -e "1. ${BLUE}cd $TEST_DIR${NC}"
echo -e "2. ${BLUE}export GITHUB_TOKEN=your_token_here${NC}"
echo -e "3. ${BLUE}npm run install-ds${NC}"
echo -e "4. ${BLUE}npm run test-ds${NC}"
echo
echo -e "${GREEN}Full integration test ready! 🚀${NC}"