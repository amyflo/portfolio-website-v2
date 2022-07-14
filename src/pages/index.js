import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import {
  Box,
  Container,
  GridItem,
  Heading,
  SimpleGrid,
  Grid,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react"

const BlogPage = ({ data }) => {
  return (
    <Layout>
      <Container mt="24" mb="24" maxW="container.lg">
        <Heading lineHeight="130%" size="xl" fontWeight={400}>
          Amy is a designer and developer obssessed with design systems,
          decision-making, and the brain. She studies psychology and computer
          science at Stanford. Currently, she works on a frontend team at{" "}
          <a href="https://www.accenture.com/us-en/about/accenture-song-index">
            Accenture Song
          </a>
          .
        </Heading>
      </Container>
      <Container maxW="container.xl">
        {data.allMdx.nodes.map(node => (
          <Box
            mb="12"
            className="homecard"
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
          >
            <article key={node.id}>
              <SimpleGrid columns={[1, 1, 2]} spacing={[3, 6, 12]}>
                <GridItem>
                  <GatsbyImage
                    layout="fullWidth"
                    image={getImage(node.frontmatter.hero_image)}
                    alt={node.frontmatter.hero_image_alt}
                  />
                </GridItem>
                <GridItem mb="12" padding={[0, 4, 8]}>
                  <Heading size="lg">
                    <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
                  </Heading>
                  <Text mb="4">{node.frontmatter.description}</Text>

                  <Stack
                    direction={["column", "row"]}
                    spacing={4}
                    align="center"
                  >
                    <Button colorScheme="blue">
                      <Link to={`/${node.slug}`}>Read case study</Link>
                    </Button>
                    <Button colorScheme="blue" variant="outline">
                      <a href={node.frontmatter.external_link}>
                        <Text>{node.frontmatter.external_title}</Text>
                      </a>
                    </Button>
                  </Stack>
                </GridItem>
              </SimpleGrid>
            </article>
          </Box>
        ))}
      </Container>
    </Layout>
  )
}

export const query = graphql`
  query {
    allMdx(sort: { fields: frontmatter___date, order: DESC }) {
      nodes {
        frontmatter {
          external_link
          external_title
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
