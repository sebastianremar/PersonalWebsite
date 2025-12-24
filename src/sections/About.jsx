import { Box, Heading, Text, VStack, Container, Button, Link } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const CAL_URL = import.meta.env.VITE_CAL_URL

const About = () => {
  const { t } = useTranslation()

  return (
    <Box id="about" py={20} bg="bg.sectionAlt">
      <Container maxW="container.lg">
        <VStack gap={8} align="flex-start">
          <Heading as="h2" fontSize="3xl" color="teal.400">
            {t('about.title')}
          </Heading>
          <VStack gap={4} align="flex-start">
            <Text fontSize="lg" color="text.secondary">
              {t('about.p1')}
            </Text>
            <Text fontSize="lg" color="text.secondary">
              {t('about.p2')}
            </Text>
            <Text fontSize="lg" color="text.secondary">
              {t('about.p3')}
            </Text>
            <Text fontSize="lg" color="text.secondary">
              {t('about.p4')}
            </Text>
            <Link href={CAL_URL} target="_blank">
              <Button colorPalette="teal" size="lg" mt={4}>
                {t('about.schedule')}
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default About
