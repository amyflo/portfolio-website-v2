import * as React from "react"
import { useStaticQuery, graphql } from "gatsby"
import "./layout.module.css"
import theme from "./theme"
import ScrollToTop from "react-scroll-to-top";
import { ChakraProvider } from "@chakra-ui/react"

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
      <ScrollToTop width="40"/>
      <title>
        {pageTitle} | {data.site.siteMetadata.title}
      </title>
      {/* <header>{data.site.siteMetadata.title}</header> */}
      {/* <nav>
        <ul className={navLinks}>
          <li className={navLinkItem}>
            <Link to="/" className={navLinkText}>
              Home
            </Link>
          </li>
          <li className={navLinkItem}>
            <Link to="/about" className={navLinkText}>
              About
            </Link>
          </li>
        </ul>
      </nav> */}
      <main>
        <h1>{pageTitle}</h1>
        {children}
      </main>
    </ChakraProvider>
  )
}

export default Layout
