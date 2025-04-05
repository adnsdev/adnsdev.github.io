/** @type {import('tailwindcss').Config} */

module.exports = {
    darkMode: "class",
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        animation: {
          'logo-cloud': 'scroll 20s linear infinite',
        },
       
        keyframes: {
          scroll: {
            from: { transform: 'translateX(0%)' },
            to: { transform: 'translateX(-100%)' },
          },
        },
      },
    },
    plugins: [],
  };


