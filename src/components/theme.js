import { extendTheme } from "@chakra-ui/react"

const theme = extendTheme({
  fonts: {
    heading: `elza-text, sans-serif`,
    body: `elza-text, sans-serif`,
  },
  textStyles: {
    h1: {
      fontWeight: "400",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
    h2: {
      fontWeight: "semibold",
      lineHeight: "110%",
      letterSpacing: "-2%",
    },
  },
})

export default theme
