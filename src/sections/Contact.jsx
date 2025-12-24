import { Box, Heading, Text, VStack, Container, Button, Link } from '@chakra-ui/react'
import { FaEnvelope } from 'react-icons/fa'

const EMAIL = import.meta.env.VITE_EMAIL

const Contact = () => {
  return (
    <Box id="contact" py={20}>
      <Container maxW="container.lg">
        <VStack gap={8} align="flex-start">
          <Heading as="h2" fontSize="3xl" color="teal.400">
            Contact
          </Heading>
          <VStack gap={4} align="flex-start">
            <Text fontSize="lg" color="gray.300">
              Want to chat? Feel free to reach out.
            </Text>
            <Link href={`mailto:${EMAIL}`}>
              <Button colorPalette="teal" size="lg">
                <FaEnvelope />
                Email Me
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact
