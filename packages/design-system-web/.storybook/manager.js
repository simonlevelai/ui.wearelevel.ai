import { addons } from '@storybook/manager-api'
import { themes } from '@storybook/theming'

addons.setConfig({
  theme: {
    ...themes.light,
    brandTitle: 'Level AI Design System',
    brandUrl: 'https://github.com/wearelevelai/ui.wearelevel.ai',
    brandImage: undefined,
    colorPrimary: '#feda00',
    colorSecondary: '#293f3b',
  },
})