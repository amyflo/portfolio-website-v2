import React from "react"
import { useState } from "react"
import "./layout.module.css"
import {
  useColorMode,
  Box,
  Switch,
  Stack,
  Flex,
  Button,
  Container,
  IconButton,
  Text,
  Center,
  Heading,
  Spacer,
} from "@chakra-ui/react"
import { Link } from "gatsby"

export default function Footer() {
  const { colorMode, toggleColorMode } = useColorMode()
  const isDark = colorMode === "dark"
  const bgColor = { light: "white", dark: "gray.800" }
  const [display, changeDisplay] = useState("none")
  return (
    <Container size="container.md" mb="12">
      <Center></Center>
    </Container>
  )
}
