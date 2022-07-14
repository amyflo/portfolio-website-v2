import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"
import "../components/layout.module.css"
import { Container, Box, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import Seo from "../components/seo"

function AboutCard({ title, desc, ...rest }) {
  return (
    <Box {...rest}>
      <Heading style={{ fontWeight: 400 }} size="md">
        {title}
      </Heading>
      <Text>{desc}</Text>
    </Box>
  )
}

const BlogPost = ({ data }) => {
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout>
      <Seo
        description={data.mdx.frontmatter.description}
        lang="en"
        meta=""
        title={data.mdx.frontmatter.title}
      />

      <Container maxW="container.xl">
        <Heading
          mt="12"
          style={{ fontWeight: 400 }}
          textStyle="h2"
          mb="12"
          size="xl"
        >
          {data.mdx.frontmatter.description}
        </Heading>
        <SimpleGrid mb="4" columns={[null, 3, null]} spacing={3}>
          <AboutCard title="Role" desc={data.mdx.frontmatter.role} />
          <AboutCard title="Team" desc={data.mdx.frontmatter.team} />
          <AboutCard title="Tools" desc={data.mdx.frontmatter.tools} />
        </SimpleGrid>
        <GatsbyImage
          style={{ margin: "auto" }}
          layout="fullWidth"
          image={image}
          alt={data.mdx.frontmatter.hero_image_alt}
        />
      </Container>
      <Container maxW="container.lg">
        <MDXRenderer localImages={data.mdx.frontmatter.embeddedImagesLocal}>
          {data.mdx.body}
        </MDXRenderer>
      </Container>
    </Layout>
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

export default BlogPost
