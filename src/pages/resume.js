import React from "react"
import Layout from "../components/layout"
import { Container, AspectRatio } from "@chakra-ui/react"

export default function Resume() {
  return (
    <Layout>
      <Container maxW="container.xl">
        <h1>Resume</h1>

        <iframe
          class="responsive-iframe"
          title="Resume"
          width="100%"
          height="800px"
          src="https://drive.google.com/file/d/1gd2ReAsK08T-LJYuzyq6NZ4qYhV4EEkU/preview"
          allow="autoplay"
        ></iframe>
      </Container>
    </Layout>
  )
}
