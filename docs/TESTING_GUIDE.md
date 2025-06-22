# Level AI Design System Testing Guide

Complete testing procedures for validating the Level AI Design System across different scenarios.

## 🧪 Quick Test Suite

### 1. Package Installation Test (2 minutes)

```bash
# In your project directory
./test-installation/validate-installation.sh
```

**Expected**: 14+ tests passing, with clear indicators for any issues.

### 2. Manual Package Installation (5 minutes)

```bash
# Set up authentication
export GITHUB_TOKEN=your_github_token_here
echo '@wearelevelai:registry=https://npm.pkg.github.com
//npm.pkg.github.com/:_authToken=${GITHUB_TOKEN}' > .npmrc

# Test installation
npm install @wearelevelai/design-system-web
npm install @wearelevelai/design-tokens

# Verify installation
node -e "console.log(require('@wearelevelai/design-system-web/package.json').version)"
```

**Expected**: Version `1.0.4` or higher printed.

### 3. Full Integration Test (10 minutes)

```bash
# Create complete test app
./test-installation/create-test-app.sh
cd levelai-ds-test-app

# Set up and run
export GITHUB_TOKEN=your_github_token_here
npm run install-ds
npm run test-ds
```

**Expected**: Complete React app with all Level AI components working.

## 🎯 Component Testing Checklist

### Visual Tests
- [ ] **OKLCH Colors**: Perceptually uniform colors display correctly
- [ ] **Brutalist Shadows**: 3px offset shadows visible on elevated components
- [ ] **Press Animations**: Buttons translate 1px on press
- [ ] **Typography**: DM Sans for body, Concert One for display text
- [ ] **Spacing**: Consistent spacing scale throughout
- [ ] **Border Radius**: Rounded corners using design token values

### Functional Tests
- [ ] **Button Variants**: All 7 variants (default, secondary, outline, ghost, destructive, link, success) work
- [ ] **Input States**: Focus, error, disabled states function correctly
- [ ] **Theme Switching**: Dark/light mode toggle works
- [ ] **Responsive**: Components work on mobile, tablet, desktop
- [ ] **Accessibility**: Screen reader compatibility, keyboard navigation
- [ ] **TypeScript**: Autocomplete and type checking work

### Integration Tests
- [ ] **Next.js**: Works with Next.js 13+ app directory
- [ ] **Vite**: Works with Vite React apps
- [ ] **Tailwind**: CSS classes don't conflict
- [ ] **Bundle Size**: Tree shaking works correctly
- [ ] **SSR**: Server-side rendering compatible

## 🔧 Troubleshooting Tests

### Package Installation Issues

**Problem**: `npm error 401 Unauthorized`
```bash
# Test fix
echo $GITHUB_TOKEN  # Should show your token
npm logout
npm login --registry=https://npm.pkg.github.com
```

**Problem**: `Module not found`
```bash
# Test resolution
npm ls @wearelevelai/design-system-web
npm cache clean --force
npm install
```

### Component Styling Issues

**Problem**: Components not styled
```bash
# Check CSS import
grep -r "@wearelevelai/design-system-web/styles.css" src/
```

**Problem**: Tailwind conflicts
```bash
# Check Tailwind config includes package paths
grep -A 5 "content:" tailwind.config.js
```

### Build Issues

**Problem**: TypeScript errors
```bash
# Check type definitions
npm ls @types/react @types/react-dom
npx tsc --noEmit
```

## 📊 Performance Testing

### Bundle Size Test
```bash
# Analyze bundle
npm install -g webpack-bundle-analyzer
npm run build
npx webpack-bundle-analyzer dist/static/js/*.js
```

**Expected**: Design system components should tree-shake, only used components in bundle.

### Runtime Performance Test
```bash
# Lighthouse test
npm install -g lighthouse
lighthouse http://localhost:3000 --only-categories=performance
```

**Expected**: Performance score >90 with design system components.

## 🌐 Cross-Browser Testing

### Supported Browsers
- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

### OKLCH Color Support Test
```javascript
// Browser console test
const testElement = document.createElement('div')
testElement.style.color = 'oklch(0.7 0.15 180)'
document.body.appendChild(testElement)
const computed = getComputedStyle(testElement).color
console.log('OKLCH supported:', computed.includes('oklch') || computed.includes('rgb'))
```

**Expected**: OKLCH colors render correctly or fallback to RGB.

## 🎨 Visual Regression Testing

### Storybook Visual Testing
```bash
# Build Storybook
npm run build-storybook

# Visual comparison (if Chromatic is set up)
npx chromatic --project-token=your_project_token
```

### Manual Visual Testing
1. Open Storybook: https://wearelevelai.github.io/ui.wearelevel.ai/
2. Test each component in light/dark modes
3. Verify Level AI branding is consistent
4. Check responsive behavior

## 🚀 Deployment Testing

### GitHub Packages Test
```bash
# Check package is published
npm view @wearelevelai/design-system-web
npm view @wearelevelai/design-tokens
```

### Storybook Deployment Test
```bash
# Check Storybook is live
curl -I https://wearelevelai.github.io/ui.wearelevel.ai/
```

### Documentation Test
```bash
# Check Confluence documentation exists
echo "Manual check: Visit ui.wearelevel.ai Confluence space"
echo "Verify: Getting Started and Component docs are accessible"
```

## 📋 Team Testing Protocol

### For New Level AI Projects
1. Follow Getting Started guide in Confluence
2. Run integration test in project
3. Implement 3-5 components from design system
4. Report any issues via GitHub Issues

### For Existing Level AI Projects
1. Create feature branch
2. Install design system packages
3. Replace existing components gradually
4. Test in staging environment
5. Monitor for regressions

### For Design System Contributors
1. Run full test suite before PRs
2. Add Storybook stories for new components
3. Update documentation
4. Test in 2+ Level AI applications

## 🎯 Success Criteria

A successful test should demonstrate:

✅ **Installation**: Packages install without errors  
✅ **Import**: Components import and render correctly  
✅ **Styling**: OKLCH colors and brutalist design visible  
✅ **Functionality**: Interactive components work properly  
✅ **Performance**: No significant bundle size increase  
✅ **Accessibility**: WCAG compliance maintained  
✅ **Documentation**: Clear guidance available  
✅ **Integration**: Works with existing Level AI tech stack  

## 📞 Support

- **Issues**: https://github.com/wearelevelai/ui.wearelevel.ai/issues
- **Documentation**: ui.wearelevel.ai Confluence space
- **Storybook**: https://wearelevelai.github.io/ui.wearelevel.ai/
- **Slack**: #design-system (Level AI workspace)

Ready to test the future of Level AI interfaces! 🚀