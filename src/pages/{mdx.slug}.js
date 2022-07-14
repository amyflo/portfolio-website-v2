import React from "react"
import { Link, graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import ScrollToTop from "react-scroll-to-top"
import {GatsbyImage, getImage} from "gatsby-plugin-image"
import { ChakraProvider, Container, Heading } from "@chakra-ui/react"
import Navigation from "../components/nav"
// import { GatsbyImage, getImage } from "gatsby-plugin-image"
// import Layout from "../components/layout"

export default function post({ data }) {
  let post = data.mdx
  return (
    <ChakraProvider>
      <ScrollToTop
        style={{ backgroundColor: "#1a202c70", boxShadow: "none" }}
        color="white"
        width="40"
      />
      <Navigation />
      <Container maxW="container.xl">
        <Heading
          mt="12"
          style={{ fontWeight: 400 }}
          textStyle="h2"
          mb="12"
          size="xl"
        >
          {post.frontmatter.description}
        </Heading>
        <GatsbyImage
          style={{ margin: "auto" }}
          layout="fullWidth"
          image={getImage(post.frontmatter.hero_image)}
          alt={post.frontmatter.hero_image_alt}
        />
      </Container>
      <Container maxW="container.lg">
      <MDXRenderer localImages={post.frontmatter.embeddedImagesLocal}>
        {post.body}
      </MDXRenderer>
      </Container>
    </ChakraProvider>
  )
}

export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        description
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
        role
        team
        tools
        hero_image {
          childImageSharp {
            gatsbyImageData
          }
        }
        embeddedImagesLocal {
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
  }
`
