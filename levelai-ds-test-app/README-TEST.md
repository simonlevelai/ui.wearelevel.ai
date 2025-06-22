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
