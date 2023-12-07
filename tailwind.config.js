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
      'white': '#ffffff',
      'EacColor': {
        'BlackPearl': '#03071E',
        'RedOxide': '#6a040f',
        'DeepFir': '#dc2F02',
        'TahitiGold': '#F48C06',
        'SelectiveYellow': '#FFBA08'
      },
      'red': {
        'LightApricot': '#FFD1A9',
        'LightSalmon': '#FF9E79',
        'Tomato': '#FB6D4C',
        'DarkPastelRed': '#C23B22',
        'DarkRed': '#8A0000',
        'Rosewood': '#580000'
      },
      'blueustom': '#266099',
      'articDaisy': '#ebe4c0',
      'CartoonViolence': '#d6162d',
      'AlluraRed':'#ed303c',
      'DarkLemonLime': '#76BA1B'
    },
    fontFamily: {
      'poppins': 'Poppins, sans-serif',
    },
    screens: {
      'sm' : '500',
      'md': [
        // Sidebar appears at 768px, so revert to `sm:` styles between 768px
        // and 868px, after which the main content area is wide enough again to
        // apply the `md:` styles.
        {'min': '668px', 'max': '767px'},
        {'min': '868px'}
      ],
      'lg': '1100px',
      'xl': '1400px',  
    }
  },
  plugins: [],
}

