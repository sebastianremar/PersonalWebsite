import { Box, Heading, Text, VStack, Container, Button, Link } from '@chakra-ui/react'

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
              I've been in the software game for about 5 years now, working at places like Amazon and Meta. Originally from Lima, Peru. Studied Mechanical and Aerospace Engineering, but ended up going the self-taught route into software.
            </Text>
            <Text fontSize="lg" color="gray.300">
              I'm a generalist. Scaling problems, latency issues, product decisions. I go where the problems are and figure it out.
            </Text>
            <Text fontSize="lg" color="gray.300">
              Outside of work, I spend time helping new grads and college students with career growth, sharing everything I've learned throughout my time in tech. If I can help someone skip a few of the mistakes I made, that's a win.
            </Text>
            <Text fontSize="lg" color="gray.300">
              When I'm not working, you'll probably find me traveling somewhere new or playing ping pong.
            </Text>
            <Link href="#" target="_blank">
              <Button colorPalette="teal" size="lg" mt={4}>
                Schedule a 1:1 with me!
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default About
