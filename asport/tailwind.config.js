/** @type {import('tailwindcss').Config} */
export default {
    darkMode: "class",
    content: ["./src/**/*.{html,js,jsx,tsx,ts}"],
    theme: {
      extend: {
        fontFamily: {
        display: ['"Playfair Display"', 'serif'],
        modern: ['"Poppins"', 'sans-serif'],
      },
      },
    },
  
    plugins: [],
  };
  