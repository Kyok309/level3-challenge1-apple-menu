/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        'tablet': '734px',
        'laptop': '833px',
        'desktop': '1068px',
        'tabletMax': {'max': '833px'},
      },
      fontFamily: {
        sfProDisplay: ['sfProDisplay', 'sans-serif'],
        sfProDisplaySemibold: ['sfProDisplaySemibold', 'sans-serif'],
        sfProText: ['sfProText', 'sans-serif'],
        sfProTextLight: ['sfProTextLight', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
