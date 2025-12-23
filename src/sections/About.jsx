import { Box, Heading, Text, VStack, Container } from '@chakra-ui/react'

const About = () => {
  return (
    <Box id="about" py={20}>
      <Container maxW="container.lg">
        <VStack gap={8} align="flex-start">
          <Heading as="h2" fontSize="3xl" color="teal.400">
            About Me
          </Heading>
          <VStack gap={4} align="flex-start">
            <Text fontSize="lg" color="gray.300">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. I started coding when I was like 12 or something, messing around with random stuff on the internet. Fast forward to today and I've built everything from janky scripts to actual production systems.
            </Text>
            <Text fontSize="lg" color="gray.300">
              When I'm not writing code, you can find me doing whatever people do when they're not writing code. Probably thinking about writing code. Or eating tacos. Both are valid life choices.
            </Text>
            <Text fontSize="lg" color="gray.300">
              I believe in building things that actually work and don't make users want to throw their computers out the window. Simple philosophy, really.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default About
