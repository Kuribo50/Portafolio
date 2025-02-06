/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        // Colores base para tu portafolio:
        'background': '#f5f5dc',  // Beige claro de fondo
        'text': '#202224',        // Texto en negro
        'primary': '#556b2f',     // Verde musgo principal
        // Colores llamativos para acentos y derivaciones:
        'accent': '#8fbc8f',      // Verde claro
        'secondary': '#6b8e23',   // Verde oliva oscuro
        'highlight': '#deb887',   // Beige brillante
        'border': '#dcdcdc',      // Gris claro para bordes
        'glass': 'rgba(245, 245, 220, 0.6)' // Efecto sutil tipo vidrio translúcido
      },
      fontFamily: {
        'montserrat': ['Montserrat', 'sans-serif'], // Tipografía Montserrat
        'jersey': ['"Jersey 10"', 'sans-serif'], // Tipografía Jersey 10
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
            textShadow: '0 0 5px #556b2f, 0 0 10px #556b2f, 0 0 15px #556b2f',
            boxShadow: '0 0 5px #556b2f, 0 0 10px #556b2f'
          },
          'to': { 
            textShadow: '0 0 10px #556b2f, 0 0 20px #556b2f, 0 0 30px #556b2f',
            boxShadow: '0 0 10px #556b2f, 0 0 20px #556b2f'
          }
        }
      },
      backgroundImage: {
        // Ejemplo de imagen de fondo o patrón; puedes reemplazar la ruta según corresponda
        'pattern': "url('/pattern.png')",
        // Fondo con textura de arrugas
        'wrinkled': "url('/wrinkled-texture.png')",
        // Degradado que combina verde musgo y beige claro
        'gradient': 'linear-gradient(135deg, #556b2f 0%, #f5f5dc 100%)'
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
