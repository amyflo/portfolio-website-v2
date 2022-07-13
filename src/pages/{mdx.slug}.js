import * as React from "react"
import { graphql } from "gatsby"
import { MDXRenderer } from "gatsby-plugin-mdx"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/layout"

const BlogPost = ({ data }) => {
  const { mdx } = data
  const { frontmatter, body } = mdx
  const image = getImage(data.mdx.frontmatter.hero_image)
  return (
    <Layout pageTitle={data.mdx.frontmatter.title}>
      <GatsbyImage
        image={image}
        alt={data.mdx.frontmatter.hero_image_alt}
      />
      <p>{data.mdx.frontmatter.date}</p>
      <MDXRenderer localImages={data.mdx.frontmatter.embeddedImagesLocal}>
        {data.mdx.body}
      </MDXRenderer>
    </Layout>
  )
}
export const query = graphql`
  query ($id: String) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
        hero_image_alt
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
