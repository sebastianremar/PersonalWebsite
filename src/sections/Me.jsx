import { Box, Heading, Text, Button, VStack, HStack, Container, Link } from '@chakra-ui/react'
import { useTranslation } from 'react-i18next'

const Me = () => {
  const { t } = useTranslation()

  return (
    <Box id="home" minH="100vh" bg="bg.section">
      <Container maxW="container.lg" pt={32}>
        <VStack gap={6} align="flex-start">
          <Heading as="h1" fontSize={{ base: "4xl", md: "6xl" }} fontWeight="bold">
            {t('me.title')}
          </Heading>
          <Text fontSize="lg" color="text.subtitle" maxW="lg">
            {t('me.subtitle')}
          </Text>
          <HStack gap={4} pt={6}>
            <Link href="#projects">
              <Button colorPalette="teal" size="lg">
                {t('me.viewWork')}
              </Button>
            </Link>
            <Link href="#contact">
              <Button variant="outline" colorPalette="teal" size="lg">
                {t('me.contactMe')}
              </Button>
            </Link>
          </HStack>
        </VStack>
      </Container>
    </Box>
  )
}

export default Me
