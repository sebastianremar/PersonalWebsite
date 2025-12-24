import { Box, Heading, Text, VStack, Container, Icon } from '@chakra-ui/react'
import { FaHardHat } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const Projects = () => {
  const { t } = useTranslation()

  return (
    <Box id="projects" py={20} bg="bg.section">
      <Container maxW="container.lg">
        <VStack gap={8} align="flex-start">
          <Heading as="h2" fontSize="3xl" color="teal.400">
            {t('projects.title')}
          </Heading>
          <VStack gap={4} align="center" w="100%" py={12}>
            <Icon as={FaHardHat} boxSize={60} color="icon.default" />
            <Text fontSize="2xl" color="text.subtitle" fontWeight="bold">
              {t('projects.wip')}
            </Text>
            <Text fontSize="lg" color="text.muted">
              {t('projects.coming')}
            </Text>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Projects
