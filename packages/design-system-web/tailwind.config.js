/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './src/**/*.{js,ts,jsx,tsx,mdx}',
    './src/**/*.stories.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        // Level AI Brand Colors
        earthstone: '#293f3b',
        paledawn: '#ffffdc', 
        sunsetcoral: '#ff7f7a',
        sunshine: '#feda00',
        amberglow: '#ff9012',
        terragreen: '#296b42',
        verdantspring: '#94da18',
        
        // Semantic color mappings
        border: 'hsl(var(--border))',
        input: 'hsl(var(--input))',
        ring: 'hsl(var(--ring))',
        background: 'hsl(var(--background))',
        foreground: 'hsl(var(--foreground))',
        primary: {
          DEFAULT: '#feda00', // sunshine
          foreground: '#293f3b', // earthstone
        },
        secondary: {
          DEFAULT: '#ff9012', // amberglow
          foreground: '#293f3b', // earthstone
        },
        destructive: {
          DEFAULT: '#ff7f7a', // sunsetcoral
          foreground: '#293f3b', // earthstone
        },
        success: {
          DEFAULT: '#296b42', // terragreen
          foreground: '#ffffdc', // paledawn
        },
        muted: {
          DEFAULT: 'hsl(var(--muted))',
          foreground: 'hsl(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'hsl(var(--accent))',
          foreground: 'hsl(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'hsl(var(--popover))',
          foreground: 'hsl(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'hsl(var(--card))',
          foreground: 'hsl(var(--card-foreground))',
        },
      },
      fontFamily: {
        sans: ['"DM Sans"', 'sans-serif'],
        display: ['"Concert One"', 'cursive'],
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
      },
    },
  },
  plugins: [require('tailwindcss-animate')],
}