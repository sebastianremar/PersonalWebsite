import { Box, Heading, Text, VStack, Container, Button, Link } from '@chakra-ui/react'
import { FaEnvelope } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const EMAIL = import.meta.env.VITE_EMAIL

const Contact = () => {
  const { t } = useTranslation()

  return (
    <Box id="contact" py={20} bg="bg.section">
      <Container maxW="container.lg">
        <VStack gap={8} align="flex-start">
          <Heading as="h2" fontSize="3xl" color="teal.400">
            {t('contact.title')}
          </Heading>
          <VStack gap={4} align="flex-start">
            <Text fontSize="lg" color="text.secondary">
              {t('contact.description')}
            </Text>
            <Link href={`mailto:${EMAIL}`}>
              <Button colorPalette="teal" size="lg">
                <FaEnvelope />
                {t('contact.emailMe')}
              </Button>
            </Link>
          </VStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Contact
