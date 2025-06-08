// Design tokens for Level AI Design System
// Auto-generated from Style Dictionary

export interface LevelAITokens {
  color: {
    brand: {
      earthstone: string;
      paledawn: string;
      sunsetcoral: string;
      sunshine: string;
      amberglow: string;
      terragreen: string;
      verdantspring: string;
    };
    semantic: {
      primary: string;
      secondary: string;
      success: string;
      warning: string;
      error: string;
      foreground: string;
      background: string;
    };
  };
  font: {
    family: {
      sans: string;
      display: string;
    };
    size: {
      xs: string;
      sm: string;
      base: string;
      lg: string;
      xl: string;
      '2xl': string;
      '3xl': string;
    };
    weight: {
      normal: string;
      medium: string;
      semibold: string;
      bold: string;
      extrabold: string;
    };
  };
  spacing: {
    [key: string]: string;
  };
  radius: {
    none: string;
    sm: string;
    base: string;
    md: string;
    lg: string;
    full: string;
  };
}

// Token values - will be populated by build process
export const tokens: LevelAITokens = {
  color: {
    brand: {
      earthstone: '#293f3b',
      paledawn: '#ffffdc',
      sunsetcoral: '#ff7f7a',
      sunshine: '#feda00',
      amberglow: '#ff9012',
      terragreen: '#296b42',
      verdantspring: '#94da18',
    },
    semantic: {
      primary: '#feda00',
      secondary: '#ff9012',
      success: '#296b42',
      warning: '#ff9012',
      error: '#ff7f7a',
      foreground: '#293f3b',
      background: '#ffffdc',
    },
  },
  font: {
    family: {
      sans: 'DM Sans, system-ui, sans-serif',
      display: 'Concert One, system-ui, sans-serif',
    },
    size: {
      xs: '0.75rem',
      sm: '0.875rem',
      base: '1rem',
      lg: '1.125rem',
      xl: '1.25rem',
      '2xl': '1.5rem',
      '3xl': '1.875rem',
    },
    weight: {
      normal: '400',
      medium: '500',
      semibold: '600',
      bold: '700',
      extrabold: '800',
    },
  },
  spacing: {
    '0': '0',
    '1': '0.25rem',
    '2': '0.5rem',
    '3': '0.75rem',
    '4': '1rem',
    '5': '1.25rem',
    '6': '1.5rem',
    '8': '2rem',
    '10': '2.5rem',
    '12': '3rem',
    '16': '4rem',
  },
  radius: {
    none: '0',
    sm: '0.25rem',
    base: '0.5rem',
    md: '0.75rem',
    lg: '1rem',
    full: '9999px',
  },
}

export default tokens

// Utility functions for token usage
export const getColor = (path: string): string => {
  const keys = path.split('.')
  let value: any = tokens.color
  
  for (const key of keys) {
    value = value[key]
    if (!value) return ''
  }
  
  return value
}

export const getSpacing = (key: string): string => {
  return tokens.spacing[key] || '0'
}

export const getFontSize = (size: keyof typeof tokens.font.size): string => {
  return tokens.font.size[size]
}

export const getRadius = (size: keyof typeof tokens.radius): string => {
  return tokens.radius[size]
}