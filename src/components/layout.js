import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.module.css"
import theme from "./theme"
import ScrollToTop from "react-scroll-to-top"
import { ChakraProvider, Container } from "@chakra-ui/react"
import { Navigation } from "./nav"

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <ChakraProvider theme={theme}>
      <ScrollToTop
        style={{ backgroundColor: "#1a202c70", boxShadow: "none" }}
        color="white"
        width="40"
      />
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>

      <Navigation />
      {children}
    </ChakraProvider>
  )
}

export default Layout
