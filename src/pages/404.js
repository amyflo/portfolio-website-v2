import * as React from "react"

import Layout from "../components/layout"
import Seo from "../components/seo"
import { Button, Text, Heading, Container } from "@chakra-ui/react"
import { Link } from "gatsby"

export default function NotFoundPage() {
  return (
    <Layout>
      <Container mt="24" mb="24" maxW="container.lg">
        <Seo title="404: Not found" />

        <Heading lineHeight="130%" size="lg" fontWeight={400}>
          Oops! We can't find that page.
        </Heading>
        <Text>
          But hey, it's okay to feel lost. It happens to the best of us.
        </Text>
        <Button colorScheme="blue">
          <Link to="/">Go back to home</Link>
        </Button>
      </Container>
    </Layout>
  )
}
