/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    // add font family to "extend" to extend the default font instead of replacing it
    extend: {
      fontFamily: {
        'alimama': ['AlimamaFangYuanTiVF-Square', 'helvetica'], // helvetica is a fallback font, in case the first font is not available
      },
      backgroundImage: {
        'linear-gradient': "linear-gradient(152deg, #899bf0 1%, #3f55e4 54%, #3f55e4 96%)",
      },
    }
  },
  plugins: [],
}

