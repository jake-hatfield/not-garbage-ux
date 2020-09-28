module.exports = {
  theme: {
    extend: {
      colors: {
        black: {
          100: "#BEC0C2",
          200: "#7F7F81",
          300: "#696A6A",
          400: "#050505",
        },
      },
    },
  },
  corePlugins: {
    container: false,
  },
  plugins: [
    function({ addComponents }) {
      addComponents({
        ".container": {
          width: "100%",
          marginLeft: "auto",
          marginRight: "auto",
          paddingLeft: "1.5rem",
          paddingRight: "1.5rem",
          "@screen sm": {
            maxWidth: "640px",
            paddingLeft: "1rem",
            paddingRight: "1rem",
          },
          "@screen md": {
            maxWidth: "768px",
            paddingLeft: "1.25rem",
            paddingRight: "1.25rem",
          },
          "@screen lg": {
            maxWidth: "1024px",
            paddingLeft: "1.5rem",
            paddingRight: "1.5rem",
          },
          "@screen xl": {
            maxWidth: "1140px",
            paddingLeft: "2rem",
            paddingRight: "2rem",
          },
        },
      })
    },
  ],
}


// See https://tailwindcss.com/docs/configuration for details
