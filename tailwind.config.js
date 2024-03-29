/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      backgroundImage: {
        'hero-pattern': "url('/src/Assets/hero.jpg')",
        'org-pattern': "url('/src/Assets/organizationHero.jpg')",
        'commingSoon-pattern': "url('/src/Assets/coming.avif')",
      }
    },
  },
  plugins: [require("daisyui")],
}
