import tailwindcssMotion from "tailwindcss-motion";
/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,scss,ts}'],
    important: true,
    theme: { extend: {
      colors: {
        primary: {
          100: '#e6f1ff',
          200: '#bdd4ff',
          800: '#1e40af',
        }
      }
    } },
    fontFamily:  {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Poppins'],
      'body': ['"Roboto"'],
    },
    plugins: [tailwindcssMotion],
    darkMode: 'selector',
  };
