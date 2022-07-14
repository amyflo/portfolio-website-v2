import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"

const BlogPage = ({ data }) => {
  return (
    <Layout pageTitle="My Blog Posts">
      <SimpleGrid maxW="container.xl" columns={[null, 2, null]} spacing={10}>
        {data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <Box>
              <Link to={`/${node.slug}`}>
                <GatsbyImage
                  layout="fullWidth"
                  image={getImage(node.frontmatter.hero_image)}
                  alt={node.frontmatter.hero_image_alt}
                />
              </Link>
              <Heading>
                <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
              </Heading>
              <Text>{node.frontmatter.description}</Text>
            </Box>
          </article>
        ))}
      </SimpleGrid>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          date(formatString: "MMMM D, YYYY")
          title
          description
          hero_image_alt
          hero_image {
            childImageSharp {
              gatsbyImageData
            }
          }
        }
        id
        slug
      }
    }
  }
`

export default BlogPage
