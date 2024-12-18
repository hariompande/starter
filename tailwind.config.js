/** @type {import('tailwindcss').Config} */

module.exports = {
    content: ['./src/**/*.{html,scss,ts}', './node_modules/@ds24/elements/**/*.mjs'],
    important: true,
    theme: { extend: {} },
    fontFamily:  {
      'sans': ['ui-sans-serif', 'system-ui'],
      'serif': ['ui-serif', 'Georgia'],
      'mono': ['ui-monospace', 'SFMono-Regular'],
      'display': ['Poppins'],
      'body': ['"Roboto"'],
    },
    plugins: [],
    darkMode: 'class',
  };
  