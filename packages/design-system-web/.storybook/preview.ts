import type { Preview } from '@storybook/react'
import { themes } from '@storybook/theming'
import '../src/styles.css'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    backgrounds: {
      disable: true,
    },
    darkMode: {
      dark: { 
        ...themes.dark,
        appBg: '#0f1317',
        appContentBg: '#1a1f24',
        appBorderColor: '#293f3b',
        brandTitle: 'Level AI Design System',
        brandUrl: 'https://level.ai',
      },
      light: { 
        ...themes.normal,
        appBg: '#ffffdc',
        appContentBg: '#ffffff',
        appBorderColor: '#e5e7eb',
        brandTitle: 'Level AI Design System',
        brandUrl: 'https://level.ai',
      },
      stylePreview: true,
    },
  },
  globalTypes: {
    theme: {
      description: 'Global theme for components',
      defaultValue: 'light',
      toolbar: {
        title: 'Theme',
        icon: 'circlehollow',
        items: [
          { value: 'light', icon: 'circlehollow', title: 'Light' },
          { value: 'dark', icon: 'circle', title: 'Dark' },
        ],
        dynamicTitle: true,
      },
    },
  },
}

export default preview