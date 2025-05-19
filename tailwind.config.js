module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  theme: {
    extend: {
      colors: {
        'main': '#0ea5e9', // Sky-500 as main color
        'main-light': '#38bdf8', // Sky-400 for hover states
        'main-dark': '#0284c7', // Sky-600 for active states
        'bg-main-color': '#1e293b59',
        'bg-dark-blue': '#0A0E1B80',
      },
      backgroundColor: {
        'main': '#0ea5e9', // Sky-500 as main background color
        'main-light': '#38bdf8', // Sky-400 for lighter background
        'main-dark': '#0284c7', // Sky-600 for darker background
      },
      borderColor: {
        'main': '#0ea5e9', // Sky-500 as main border color
        'main-light': '#38bdf8', // Sky-400 for lighter border
        'main-dark': '#0284c7', // Sky-600 for darker border
      },
      textColor: {
        'main': '#0ea5e9', // Sky-500 as main text color
        'main-light': '#38bdf8', // Sky-400 for lighter text
        'main-dark': '#0284c7', // Sky-600 for darker text
      },
      outlineColor: {
        'main': '#0ea5e9', // Sky-500 as main outline color
        'main-light': '#38bdf8', // Sky-400 for lighter outline
        'main-dark': '#0284c7', // Sky-600 for darker outline
      },
      boxShadow: {
        'main': '0 4px 6px -1px rgba(14, 165, 233, 0.1), 0 2px 4px -1px rgba(14, 165, 233, 0.06)', // Custom shadow with sky color
        'main-md': '0 6px 10px -1px rgba(14, 165, 233, 0.2), 0 4px 6px -1px rgba(14, 165, 233, 0.1)', // Medium shadow
        'main-lg': '0 10px 15px -3px rgba(14, 165, 233, 0.3), 0 4px 6px -2px rgba(14, 165, 233, 0.15)', // Large shadow
      },
      keyframes: {
        'type-in-header': {
          '0%': { opacity: '0', transform: 'translateX(-10px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
        underline: {
          '0%': { width: '0%' },
          '100%': { width: '100%' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-13px)' },
        },
      },
      animation: {
        'type-in-header': 'type-in-header 1s ease-out forwards',
        underline: 'underline 1s ease-out forwards',
        float: 'float 3s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};