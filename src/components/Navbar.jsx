import { Box, Text, HStack, Container, Flex, Link, Button } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import { ColorModeButton } from './ui/color-mode'

const GITHUB_URL = process.env.NEXT_PUBLIC_GITHUB_URL
const LINKEDIN_URL = process.env.NEXT_PUBLIC_LINKEDIN_URL

const Navbar = () => {
  const { t, i18n } = useTranslation()

  const toggleLanguage = () => {
    i18n.changeLanguage(i18n.language === 'en' ? 'es' : 'en')
  }

  return (
    <Box as="nav" position="fixed" top={0} left={0} right={0} bg="bg.nav" borderBottom="1px" borderColor="border.subtle" zIndex={10}>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center" py={4}>
          <Text fontWeight="bold" fontSize="xl" color="teal.400">
            SR
          </Text>
          <HStack gap={8}>
            <Link href="#home" color="text.secondary" _hover={{ color: "teal.400" }}>{t('nav.home')}</Link>
            <Link href="#about" color="text.secondary" _hover={{ color: "teal.400" }}>{t('nav.about')}</Link>
            <Link href="#projects" color="text.secondary" _hover={{ color: "teal.400" }}>{t('nav.projects')}</Link>
            <Link href="#resume" color="text.secondary" _hover={{ color: "teal.400" }}>{t('nav.resume')}</Link>
            <Link href="#contact" color="text.secondary" _hover={{ color: "teal.400" }}>{t('nav.contact')}</Link>
            <HStack gap={4}>
              <Link href={GITHUB_URL} target="_blank" color="text.secondary" _hover={{ color: "teal.400" }}>
                <FaGithub size={20} />
              </Link>
              <Link href={LINKEDIN_URL} target="_blank" color="text.secondary" _hover={{ color: "teal.400" }}>
                <FaLinkedin size={20} />
              </Link>
              <Button size="sm" variant="ghost" onClick={toggleLanguage} color="text.secondary" _hover={{ color: "teal.400" }}>
                {i18n.language === 'en' ? 'ES' : 'EN'}
              </Button>
              <ColorModeButton color="text.secondary" _hover={{ color: "teal.400" }} />
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
