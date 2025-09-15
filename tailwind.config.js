module.exports = {
  content: [
    "./pages/*.{html,js}",
    "./index.html",
    "./components/*.{html,js}",
    "./src/**/*.{html,js}"
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: "#E8F1F5", // persian-blue-50
          100: "#C5D9E3", // persian-blue-100
          200: "#9FC0D1", // persian-blue-200
          300: "#79A7BF", // persian-blue-300
          400: "#5D8EAD", // persian-blue-400
          500: "#41759B", // persian-blue-500
          600: "#2D5F7A", // persian-blue-600 (secondary)
          700: "#1B4B66", // persian-blue-700 (primary)
          800: "#153D54", // persian-blue-800
          900: "#0F2F42", // persian-blue-900
          DEFAULT: "#1B4B66", // persian-blue-700
        },
        secondary: {
          50: "#EBF2F6", // secondary-blue-50
          100: "#CCDDE6", // secondary-blue-100
          200: "#ADC8D6", // secondary-blue-200
          300: "#8EB3C6", // secondary-blue-300
          400: "#6F9EB6", // secondary-blue-400
          500: "#5089A6", // secondary-blue-500
          600: "#417496", // secondary-blue-600
          700: "#2D5F7A", // secondary-blue-700
          800: "#244E63", // secondary-blue-800
          900: "#1B3D4C", // secondary-blue-900
          DEFAULT: "#2D5F7A", // secondary-blue-700
        },
        accent: {
          50: "#FBF8ED", // persian-gold-50
          100: "#F5EDCF", // persian-gold-100
          200: "#EFE2B1", // persian-gold-200
          300: "#E9D793", // persian-gold-300
          400: "#E3CC75", // persian-gold-400
          500: "#DDC157", // persian-gold-500
          600: "#D4AF37", // persian-gold-600
          700: "#B8962F", // persian-gold-700
          800: "#9C7D27", // persian-gold-800
          900: "#80641F", // persian-gold-900
          DEFAULT: "#D4AF37", // persian-gold-600
        },
        background: "#FEFDFB", // warm-cream
        surface: {
          DEFAULT: "#F8F6F3", // subtle-depth
          hover: "#F3F0EC", // surface-hover
          active: "#EDE9E4", // surface-active
        },
        text: {
          primary: "#1A1A1A", // high-contrast
          secondary: "#4A4A4A", // clear-hierarchy
          tertiary: "#6B6B6B", // text-tertiary
          disabled: "#9CA3AF", // gray-400
        },
        success: {
          50: "#E8F5E8", // green-50
          100: "#C8E6C9", // green-100
          500: "#4CAF50", // green-500
          700: "#2E7D32", // green-700
          DEFAULT: "#2E7D32", // green-700
        },
        warning: {
          50: "#FFF3E0", // orange-50
          100: "#FFE0B2", // orange-100
          500: "#FF9800", // orange-500
          600: "#F57C00", // orange-600
          DEFAULT: "#F57C00", // orange-600
        },
        error: {
          50: "#FFEBEE", // red-50
          100: "#FFCDD2", // red-100
          500: "#F44336", // red-500
          700: "#C62828", // red-700
          DEFAULT: "#C62828", // red-700
        },
      },
      fontFamily: {
        vazir: ['Vazirmatn', 'sans-serif'], // Persian font
        inter: ['Inter', 'sans-serif'], // Latin font
        sans: ['Vazirmatn', 'Inter', 'sans-serif'], // Default with Persian priority
      },
      fontSize: {
        'persian-xs': ['0.75rem', { lineHeight: '1.8' }],
        'persian-sm': ['0.875rem', { lineHeight: '1.8' }],
        'persian-base': ['1rem', { lineHeight: '1.8' }],
        'persian-lg': ['1.125rem', { lineHeight: '1.7' }],
        'persian-xl': ['1.25rem', { lineHeight: '1.6' }],
        'persian-2xl': ['1.5rem', { lineHeight: '1.5' }],
        'persian-3xl': ['1.875rem', { lineHeight: '1.4' }],
        'persian-4xl': ['2.25rem', { lineHeight: '1.3' }],
      },
      spacing: {
        'persian-xs': '0.5rem',
        'persian-sm': '0.75rem',
        'persian-md': '1rem',
        'persian-lg': '1.5rem',
        'persian-xl': '2rem',
        'persian-2xl': '3rem',
      },
      borderRadius: {
        'persian': '0.5rem',
        'persian-lg': '0.75rem',
        'persian-xl': '1rem',
      },
      boxShadow: {
        'persian': '0 4px 6px -1px rgba(27, 75, 102, 0.1), 0 2px 4px -1px rgba(27, 75, 102, 0.05)',
        'persian-lg': '0 10px 15px -3px rgba(27, 75, 102, 0.1), 0 4px 6px -2px rgba(27, 75, 102, 0.05)',
        'persian-xl': '0 20px 25px -5px rgba(27, 75, 102, 0.1), 0 10px 10px -5px rgba(27, 75, 102, 0.04)',
        'accent': '0 4px 6px -1px rgba(212, 175, 55, 0.2)',
        'accent-lg': '0 10px 15px -3px rgba(212, 175, 55, 0.2), 0 4px 6px -2px rgba(212, 175, 55, 0.1)',
      },
      animation: {
        'fade-in-up': 'fadeInUp 0.3s ease-out',
        'slide-in-right': 'slideInRight 0.3s ease-out',
        'pulse-gentle': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      transitionDuration: {
        'persian': '300ms',
      },
      transitionTimingFunction: {
        'persian': 'cubic-bezier(0.4, 0, 0.2, 1)',
      },
      letterSpacing: {
        'persian': '0.02em',
        'persian-wide': '0.04em',
      },
      lineHeight: {
        'persian': '1.8',
        'persian-heading': '1.4',
        'persian-tight': '1.3',
      },
    },
  },
  plugins: [
    function({ addUtilities }) {
      const newUtilities = {
        '.text-persian': {
          fontFamily: 'Vazirmatn, sans-serif',
          lineHeight: '1.8',
          letterSpacing: '0.02em',
        },
        '.heading-persian': {
          fontFamily: 'Vazirmatn, sans-serif',
          fontWeight: '600',
          lineHeight: '1.4',
        },
        '.transition-persian': {
          transition: 'all 0.3s ease-out',
        },
        '.rtl': {
          direction: 'rtl',
        },
        '.ltr': {
          direction: 'ltr',
        },
      }
      addUtilities(newUtilities)
    }
  ],
}