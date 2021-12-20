module.exports = {
  purge: [
    './src/**/*.{js,jsx,ts,tsx}', 
    './public/index.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'heading' : ['"Barlow Condensed"','sans-serif'],
        'body' : ['Bellefair','serif']
      },
      colors: {
        primary : '#0B0D17',
        secondary : '#D0D6F9'
      },
      backgroundImage: {
        'home-desktop': "url('/src/assets/home/background-home-desktop.jpg')",
        'home-mobile': "url('/src/assets/home/background-home-mobile.jpg')",
        'home-tablet': "url('/src/assets/home/background-home-tablet.jpg')",

        'destination-desktop': "url('/src/assets/destination/background-destination-desktop.jpg')",
        'destination-mobile': "url('/src/assets/destination/background-destination-mobile.jpg')",
        'destination-tablet': "url('/src/assets/destination/background-destination-tablet.jpg')",

        'crew-desktop': "url('/src/assets/crew/background-crew-desktop.jpg')",
        'crew-mobile': "url('/src/assets/crew/background-crew-mobile.jpg')",
        'crew-tablet': "url('/src/assets/crew/background-crew-tablet.jpg')",
        
        'technology-desktop': "url('/src/assets/technology/background-technology-desktop.jpg')",
        'technology-mobile': "url('/src/assets/technology/background-technology-mobile.jpg')",
        'technology-tablet': "url('/src/assets/technology/background-technology-tablet.jpg')",
      },
      ringWidth: {
        '50': '50px'
      }
    }
  },
  variants: {
    extend: {
      borderWidth: ['hover'],
      ringWidth: ['hover'],
      ringColor: ['hover'],
      ringOpacity: ['hover'],
      transitionDuration: ['hover'],
    },
  },
  plugins: [],
}
