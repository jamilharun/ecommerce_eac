/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      // gray: colors.gray,
      // 'white': '#ffffff',
      'EacColor': {
        'BlackPearl': '#03071E',
        'RedOxide': '#6a040f',
        'DeepFir': '#dc2F02',
        'TahitiGold': '#F48C06',
        'SelectiveYellow': '#FFBA08'
      },
    },
    fontFamily: {
      'poppins': 'Poppins, sans-serif',
    },
  },
  plugins: [],
}

