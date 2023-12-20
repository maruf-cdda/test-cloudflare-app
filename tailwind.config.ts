/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-light": "var(--primary-light)",
        "primary-dark": "var(--primary-dark)",
        "primary-text-black": "var(--primary-text-light)",
        "primary-btn": "var(--primary-btn)",
        "primary-btn-text": "var(--primary-btn-color)",
        "light-blue": "var(--light-blue)",
      },
      // backgroundImage: {
      //   lineBg: "url('/assets/BG.svg')",
      // },
    },
  },
  plugins: [],
};
