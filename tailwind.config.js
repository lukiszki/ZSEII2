/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        mytheme: {

          "base-100": "#111827", // To jest kolor tła
          // możesz dodać więcej kolorów
        },
      },
    ],
  },
  plugins: [
    require('daisyui'),
  ],
}

