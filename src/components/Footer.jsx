import { Box, Text, HStack, VStack, Container, Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL

const Footer = () => {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <Box as="footer" py={10} bg="bg.sectionAlt" borderTop="1px" borderColor="border.subtle">
      <Container maxW="container.lg">
        <VStack gap={6}>
          <HStack gap={8}>
            <Link href="#home" color="text.secondary" _hover={{ color: "teal.400" }}>{t('nav.home')}</Link>
            <Link href="#about" color="text.secondary" _hover={{ color: "teal.400" }}>{t('nav.about')}</Link>
            <Link href="#projects" color="text.secondary" _hover={{ color: "teal.400" }}>{t('nav.projects')}</Link>
            <Link href="#resume" color="text.secondary" _hover={{ color: "teal.400" }}>{t('nav.resume')}</Link>
            <Link href="#contact" color="text.secondary" _hover={{ color: "teal.400" }}>{t('nav.contact')}</Link>
          </HStack>
          <HStack gap={4}>
            <Link href={GITHUB_URL} target="_blank" color="text.secondary" _hover={{ color: "teal.400" }}>
              <FaGithub size={20} />
            </Link>
            <Link href={LINKEDIN_URL} target="_blank" color="text.secondary" _hover={{ color: "teal.400" }}>
              <FaLinkedin size={20} />
            </Link>
          </HStack>
          <Text fontSize="sm" color="text.muted">
            © {year} Sebastian Remar. All rights reserved.
          </Text>
        </VStack>
      </Container>
    </Box>
  )
}

export default Footer
