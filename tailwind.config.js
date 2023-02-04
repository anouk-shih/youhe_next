// eslint-disable-next-line import/no-extraneous-dependencies
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./src/**/*.tsx", "./src/**/**/*.tsx", ".src/**/*.sass"],
  theme: {
    extend: {
      animation: {
        "jump-left": "jump-left .5s ease-in-out 1",
        "jump-right": "jump-right .5s ease-in-out 1",
      },
      keyframes: {
        "jump-left": {
          "100%": {
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
            transform: "translateX(-250%)",
          },
          "0%": {
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
            transform: "translateX(0)",
          },
        },
        "jump-right": {
          "100%": {
            "animation-timing-function": "cubic-bezier(0.8, 0, 1, 1)",
            transform: "translateX(250%)",
          },
          "0%": {
            "animation-timing-function": "cubic-bezier(0, 0, 0.2, 1)",
            transform: "translateX(0)",
          },
        },
      },
      spacing: {
        auto: "auto",
        "1/2": "50%",
        "1/3": "33.333333%",
        "2/3": "66.666667%",
        "1/4": "25%",
        "2/4": "50%",
        "3/4": "75%",
        "1/5": "20%",
        "2/5": "40%",
        "3/5": "60%",
        "4/5": "80%",
        "1/6": "16.666667%",
        "5/6": "83.333333%",
        "1/7": "14.28571%",
        "2/7": "28.57142%",
        "3/7": "42.85714%",
        "4/7": "57.14285%",
        "5/7": "71.42857%",
        "6/7": "85.71428%",
        "1/10": "10%",
        "3/10": "30%",
        "7/10": "70%",
        "9/10": "90%",
        "95/100": "95%",
        full: "100%",
      },
      colors: {
        primary: "#E7FCBF",
        theme: "#4EA64C",
        secondary: "#F7DE83",
      },
      minHeight: (theme, { negative }) => ({
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxHeight: (theme, { negative }) => ({
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      minWidth: (theme, { negative }) => ({
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      maxWidth: (theme, { negative }) => ({
        ...theme("spacing"),
        ...negative(theme("spacing")),
      }),
      fontSize: {},
      fontFamily: {
        sans: ["Noto Sans TC", ...defaultTheme.fontFamily.sans],
      },
      zIndex: {
        1: "1",
        100: "100",
      },
    },
    variants: {
      extend: {
        transform: ["group-hover", "hover"],
        translate: ["group-hover"],
      },
    },
  },
  plugins: [],
};
