import * as React from "react"
import { Link, graphql } from "gatsby"
import Layout from "../components/layout"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Seo from "../components/seo"
import {
  Container,
  GridItem,
  Center,
  Heading,
  SimpleGrid,
  Text,
  Stack,
  Button,
} from "@chakra-ui/react"

export default function Index({ data }) {
  return (
    <Layout>
      <Seo
        description="Amy is a designer and developer obssessed with design systems,
          decision-making, and the brain. She studies psychology and computer
          science at Stanford."
        lang="en"
        title="Home"
      />
      <Container mt="24" mb="24" maxW="container.lg">
        <Heading lineHeight="130%" size="xl" fontWeight={400}>
          Amy is a designer and developer obssessed with design systems,
          decision-making, and the brain. She studies psychology and computer
          science at Stanford. Currently, she works on a frontend team at{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href=" https://www.accenture.com/us-en/about/accenture-song-index"
          >
            Accenture Song
          </a>
          .
        </Heading>
      </Container>
      <Container maxW="container.xl">
        {data.allMdx.nodes.map(node => (
          <article key={node.id}>
            <SimpleGrid mb="12" columns={[1, 1, 1, 2]} spacing={[0, 6, 12]}>
              <GridItem>
                <Center>
                  <GatsbyImage
                    layout="fullHeight"
                    objectFit={"cover"}
                    image={getImage(node.frontmatter.hero_image)}
                    alt={node.frontmatter.hero_image_alt}
                  />
                </Center>
              </GridItem>
              <GridItem mb="6" padding={[3, 3, 8]}>
                <Heading size="lg">
                  <Link to={`/${node.slug}`}>{node.frontmatter.title}</Link>
                </Heading>
                <p>{node.frontmatter.description}</p>

                <Stack
                  direction={["column", "column", "row"]}
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
