#!/bin/bash

echo "🔴 LIVE Level AI Design System Package Test"
echo "==========================================="

# Colors
RED='\033[0;31m'
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
BLUE='\033[0;34m'
NC='\033[0m'

# Check if GitHub token is set
if [ -z "$GITHUB_TOKEN" ]; then
    echo -e "${RED}❌ ERROR: GITHUB_TOKEN environment variable not set${NC}"
    echo -e "${YELLOW}Please run: export GITHUB_TOKEN=your_github_token_here${NC}"
    echo -e "${YELLOW}Get token from: https://github.com/settings/tokens${NC}"
    exit 1
fi

echo -e "${GREEN}✅ GitHub token detected${NC}"
echo

# Create temporary test directory
TEST_DIR="temp-package-test-$$"
mkdir "$TEST_DIR"
cd "$TEST_DIR"

echo -e "${BLUE}📦 Testing in temporary directory: $TEST_DIR${NC}"

# Create .npmrc with token
cat > .npmrc << EOF
@wearelevelai:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=\${GITHUB_TOKEN}
EOF

# Create package.json
cat > package.json << 'EOF'
{
  "name": "levelai-package-test",
  "version": "1.0.0",
  "type": "module",
  "dependencies": {}
}
EOF

echo -e "${BLUE}🔍 Testing @wearelevelai/design-system-web installation...${NC}"
if npm install @wearelevelai/design-system-web; then
    echo -e "${GREEN}✅ @wearelevelai/design-system-web installed successfully!${NC}"
    
    # Check version
    VERSION=$(npm list @wearelevelai/design-system-web --depth=0 2>/dev/null | grep @wearelevelai/design-system-web | grep -o '@[^[:space:]]*')
    echo -e "${BLUE}📋 Version: $VERSION${NC}"
    
    # Test import structure
    echo -e "${BLUE}🔍 Testing package structure...${NC}"
    if [ -f "node_modules/@wearelevelai/design-system-web/dist/index.js" ]; then
        echo -e "${GREEN}✅ Main build file exists${NC}"
    else
        echo -e "${RED}❌ Main build file missing${NC}"
    fi
    
    if [ -f "node_modules/@wearelevelai/design-system-web/dist/index.d.ts" ]; then
        echo -e "${GREEN}✅ TypeScript definitions exist${NC}"
    else
        echo -e "${RED}❌ TypeScript definitions missing${NC}"
    fi
    
    if [ -f "node_modules/@wearelevelai/design-system-web/dist/styles.css" ]; then
        echo -e "${GREEN}✅ CSS styles exist${NC}"
    else
        echo -e "${RED}❌ CSS styles missing${NC}"
    fi
    
else
    echo -e "${RED}❌ Failed to install @wearelevelai/design-system-web${NC}"
    echo -e "${YELLOW}Check your GitHub token permissions include 'read:packages'${NC}"
fi

echo
echo -e "${BLUE}🔍 Testing @wearelevelai/design-tokens installation...${NC}"
if npm install @wearelevelai/design-tokens; then
    echo -e "${GREEN}✅ @wearelevelai/design-tokens installed successfully!${NC}"
    
    # Check version
    VERSION=$(npm list @wearelevelai/design-tokens --depth=0 2>/dev/null | grep @wearelevelai/design-tokens | grep -o '@[^[:space:]]*')
    echo -e "${BLUE}📋 Version: $VERSION${NC}"
    
else
    echo -e "${RED}❌ Failed to install @wearelevelai/design-tokens${NC}"
fi

echo
echo -e "${BLUE}📊 Package Information:${NC}"
echo "----------------------------------------"
npm list --depth=0 2>/dev/null || true

echo
echo -e "${BLUE}🔍 Testing Node.js import...${NC}"
cat > test-import.mjs << 'EOF'
try {
  // Test if we can resolve the package
  const packagePath = await import.meta.resolve('@wearelevelai/design-system-web');
  console.log('✅ Package resolved at:', packagePath);
  
  // Try to read package.json
  import fs from 'fs';
  import path from 'path';
  
  const packageJsonPath = path.join(process.cwd(), 'node_modules/@wearelevelai/design-system-web/package.json');
  if (fs.existsSync(packageJsonPath)) {
    const packageJson = JSON.parse(fs.readFileSync(packageJsonPath, 'utf8'));
    console.log('✅ Package version:', packageJson.version);
    console.log('✅ Package name:', packageJson.name);
    console.log('✅ Main entry:', packageJson.main);
    console.log('✅ Module entry:', packageJson.module);
    console.log('✅ Types entry:', packageJson.types);
  }
  
} catch (error) {
  console.log('❌ Import test failed:', error.message);
}
EOF

node test-import.mjs

echo
echo -e "${BLUE}🧹 Cleaning up test directory...${NC}"
cd ..
rm -rf "$TEST_DIR"

echo
echo -e "${GREEN}🎉 Live package test complete!${NC}"
echo
echo -e "${YELLOW}Next steps:${NC}"
echo -e "1. ${BLUE}Run the integration test: ./test-installation/create-test-app.sh${NC}"
echo -e "2. ${BLUE}Enable GitHub Pages for Storybook${NC}"
echo -e "3. ${BLUE}Test in a real Level AI project${NC}"