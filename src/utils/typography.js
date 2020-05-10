import Typography from "typography"

const typography = new Typography({
  baseFontSize: "16px",
  baseLineHeight: 1.666,
  googleFonts: [
    {
      name: "Raleway",
      styles: ["400, 700, 900"],
    },
    {
      name: "Roboto",
      styles: ["400", "700"],
    },
  ],
  headerFontFamily: ["Raleway", "sans-serif"],
  bodyFontFamily: ["Roboto", "sans-serif"],
  // See below for the full list of options.
})

// Output CSS as string.
typography.toString()

// Or insert styles directly into the <head> (works well for client-only
// JS web apps.
typography.injectStyles()

export default typography
