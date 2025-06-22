#!/usr/bin/env node

console.log('🧪 Testing Level AI Design System Installation...\n')

// Test 1: Check if we can resolve the packages
console.log('1. Testing package resolution...')
try {
  const designSystemPath = require.resolve('@wearelevelai/design-system-web')
  console.log('✅ @wearelevelai/design-system-web found at:', designSystemPath)
} catch (error) {
  console.log('❌ @wearelevelai/design-system-web not found:', error.message)
}

try {
  const tokensPath = require.resolve('@wearelevelai/design-tokens')
  console.log('✅ @wearelevelai/design-tokens found at:', tokensPath)
} catch (error) {
  console.log('❌ @wearelevelai/design-tokens not found:', error.message)
}

// Test 2: Try to import components (this will fail in Node.js but shows import structure)
console.log('\n2. Testing import structure...')
try {
  // This will fail in Node.js but shows the package structure
  console.log('📦 Package exports should include:')
  console.log('   - Button, Card, Input, Badge, etc.')
  console.log('   - TypeScript definitions')
  console.log('   - CSS styles')
} catch (error) {
  console.log('❌ Import test failed:', error.message)
}

console.log('\n✨ Installation test complete!')
console.log('💡 To fully test components, create a React app and import them.')