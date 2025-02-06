/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        'background': '#ffffff', // Fondo blanco
        'text': '#0d0d0d',       // Texto oscuro
        'primary': '#002855',    // Azul marino profundo
        'accent': '#004080',     // Azul oscuro para acentos
        'secondary': '#001f3f',  // Azul casi negro para elementos secundarios
        'highlight': '#336699',  // Azul oscuro pero con más contraste
        'border': '#dee2e6',     // Gris claro para bordes
        'glass': 'rgba(255, 255, 255, 0.6)' // Efecto vidrio translúcido
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'],
        'jersey': ['"Jersey 10"', 'sans-serif'],
      },
      animation: {
        'marquee': 'marquee 20s linear infinite',
        'pulse': 'pulse 2s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'neon-glow': 'neon-glow 1.5s ease-in-out infinite alternate'
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-33.33%)' }
        },
        pulse: {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '.5' }
        },
        'neon-glow': {
          'from': { 
            textShadow: '0 0 5px #002855, 0 0 10px #002855, 0 0 15px #002855',
            boxShadow: '0 0 5px #002855, 0 0 10px #002855'
          },
          'to': { 
            textShadow: '0 0 10px #002855, 0 0 20px #002855, 0 0 30px #002855',
            boxShadow: '0 0 10px #002855, 0 0 20px #002855'
          }
        }
      },
      backgroundImage: {
        'pattern': "url('/pattern.png')",
        'wrinkled': "url('/wrinkled-texture.png')",
        'gradient': 'linear-gradient(135deg, #002855 0%, #ffffff 100%)'
      },
      backdropBlur: {
        xs: '2px',
      }
    }
  },
  plugins: [
    require('tailwindcss-filters'),
  ]
}
