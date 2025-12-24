import { Box, Heading, Text, VStack, Container, Icon } from '@chakra-ui/react'
import { FaHardHat } from 'react-icons/fa'

const Projects = () => {
  return (
    <Box id="projects" py={20}>
      <Container maxW="container.lg">
        <VStack gap={8} align="flex-start">
          <Heading as="h2" fontSize="3xl" color="teal.400">
            Projects
          </Heading>
          <VStack gap={4} align="center" w="100%" py={12}>
            <Icon as={FaHardHat} boxSize={60} color="icon.default" />
            <Text fontSize="2xl" color="text.subtitle" fontWeight="bold">
              Work in Progress
            </Text>
            <Text fontSize="lg" color="text.muted">
              Stay tuned! Projects coming 2026.
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Projects
