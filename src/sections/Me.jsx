import { Box, Heading, Text, Button, VStack, HStack, Container, Link } from '@chakra-ui/react'

const Me = () => {
  return (
    <Box id="home" minH="100vh">
      <Container maxW="container.lg" pt={32}>
        <VStack gap={6} align="flex-start">
          <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold">
            Sebastian Remar
          </Heading>
          <Text fontSize="lg" color="gray.400" maxW="lg">
            Generalist Software Engineer passionate about solving problems.
          </Text>
          <HStack gap={4} pt={6}>
            <Link href="#projects">
              <Button colorPalette="teal" size="lg">
                View My Work
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" colorPalette="teal" size="lg">
                Contact Me
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Me
