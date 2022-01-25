const plugin = require('tailwindcss/plugin')

const backfaceVisibility = plugin(function({addUtilities}) {
  addUtilities({
    '.backface-visible': {
      'backface-visibility': 'visible',
    },
    '.backface-hidden': {
      'backface-visibility': 'hidden',
    }
  })
});
const rotateY = plugin(function ({ addUtilities }) {
  addUtilities({
    '.rotate-y-180': {
      transform: 'rotateY(180deg)',
    },
  })
})

const perspective = plugin(function({addUtilities}) {
  addUtilities({
    '.perspective-600': {
      'perspective': '600px',
    },
  })
});

const preserve3d = plugin(function({addUtilities}) {
  addUtilities({
    '.preserve-3d': {
      'transform-style': 'preserve-3d',
    },
  })
});



module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: '2rem',
    },    
  },
  plugins: [backfaceVisibility, rotateY, perspective, preserve3d],
}
