// /** @type {import('tailwindcss').Config} */
// module.exports = {
//   content: ['./index.html', './src/**/*.{js,jsx}'],
//   theme: {
//     extend: {
//       colors: {
//         primary: "#2563eb",
//         secondary: "#1e293b",
//         accent: "#3b82f6",
//         light: "#f8fafc",
//         card: "#ffffff",
//       },
//       boxShadow: {
//         soft: "0 4px 12px rgba(0,0,0,0.05)"
//       }
//     },
//   },
//   plugins: [],
// }


/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: "#0ea5e9",      // sky-500
        secondary: "#0f172a",    // slate-900
        accent: "#7c3aed",       // violet-600
        muted: "#64748b",
        surface: "#f8fafc"
      },
      boxShadow: {
        soft: "0 6px 18px rgba(12, 38, 63, 0.08)"
      },
      borderRadius: {
        xl: "1rem"
      }
    },
    fontFamily: {
      sans: ['Inter', 'ui-sans-serif', 'system-ui']
    }
  },
  plugins: [],
}
