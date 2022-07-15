import React from "react"
import Layout from "../components/layout"
import { Container, Text, Heading, SimpleGrid } from "@chakra-ui/react"
import Seo from "../components/seo"

export default function About() {
  return (
    <Layout>
      <Seo
        description="Amy is a designer and developer obssessed with design systems,
          decision-making, and the brain. She studies psychology and computer
          science at Stanford."
        lang="en"
        title="About"
      />
      <Container mt="24" mb="24" maxW="container.lg">
        <Heading lineHeight="130%" size="lg" fontWeight={400}>
          Amy loves design. She studies computer science and psychology at
          Stanford, graduating in June 2024. Amy likes puzzles, especially rubix
          cubes. She likes breaking things down and seeing how they fit.
        </Heading>
        <Heading lineHeight="130%" size="lg" fontWeight={400}>
          Amy loves code; she is wrestling with the ethics of a technological
          world. Amy loves thinking about the brain. What can the brain tell us
          about technology? What can technology tell us about the brain? Amy is
          attempting to answer both questions through her research at Stanford
          in virtual reality at the{" "}
          <a
            target="_blank"
            rel="noreferrer"
            href=" https://memorylab.stanford.edu/"
          >
            Stanford Memory Lab.
          </a>
        </Heading>

        <Heading lineHeight="130%" size="md" fontWeight={400}>
          she/her/hers – 
          <a
            target="_blank"
            rel="noreferrer"
            href=" mailto:amyflo@stanford.edu"
          >
            amyflo@stanford.edu
          </a>
        </Heading>

        <Heading lineHeight="130%" mb={12} size="lg" fontWeight={400}></Heading>
        <hr />
        <SimpleGrid mb={4} mt={4} columns={[1, 1, 4]} gap="4">
          <h3>I am...</h3>
          <Text>
            working on healthcare design systems and frontend development at{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href=" https://www.accenture.com/us-en/about/accenture-song-index"
            >
              Accenture Song
            </a>{" "}
            this summer with a focus on product management.
          </Text>
          <Text>
            building this site using GraphQL, Gatsby, React, ChakraUI, and a
            little bit of luck. I taught myself web development to build this
            site and others.
          </Text>
          <Text>
            a TA for{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href=" https://cs106a.stanford.edu/"
            >
              CS106A (Python)
            </a>{" "}
            and{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href=" https://cs106b.stanford.edu/"
            >
              CS106B
            </a>{" "}
            (C++), where I teach weekly sections on introductory programming
            fundamentals for Stanford's largest course.
          </Text>

          <h3>I was...</h3>
          <Text>
            previously at
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href=" https://techhistory.stanford.edu/"
            >
              Federal Reserve Board
            </a>
            <br />
            <a target="_blank" rel="noreferrer" href=" https://lenovo.com">
              Lenovo
            </a>
            <br />
            <a target="_blank" rel="noreferrer" href=" https://50p1.com">
              50+1 Strategies
            </a>
            <br />
            <a target="_blank" rel="noreferrer" href=" https://www.census.gov/">
              the U.S. Census Bureau
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href=" https://www.codingitforward.com/"
            >
              Coding it Forward
            </a>
            <br />
            <a
              target="_blank"
              rel="noreferrer"
              href=" https://beam.stanford.edu/"
            >
              Stanford Career Education
            </a>
            .
          </Text>

          <Text>
            a researcher on tech culture at the{" "}
            <a
              target="_blank"
              rel="noreferrer"
              href=" https://techhistory.stanford.edu/"
            >
              Tech History Project.
            </a>{" "}
            Talk to me about Silicon Valley, startups, Stanford, and the social
            impacts of a technological world.
          </Text>
          <Text>
            a Resident Assistant for a Squirtle-themed all-sophomore dorm. I
            learned about friendship, charcuterie boards, and planning a
            150-person yacht party.
          </Text>

          <h3>I will be...</h3>
          <Text>
            studying abroad at Oxford in the fall quarter, where I will
            hopefully live out my Gryffindor dreams and try to fake a good
            British accent.
          </Text>
          <Text>
            looking for opportunities in UX engineering, UX design, product
            design, and frontend development roles for Summer 2023.
          </Text>
          <Text>
            learning about web applications, game design, design thinking,
            computer systems, and virtual reality in the next school year.
          </Text>
        </SimpleGrid>
      </Container>
      <Container maxW="container.xl"></Container>
    </Layout>
  )
}
