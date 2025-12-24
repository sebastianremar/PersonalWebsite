import { Box, Text, HStack, Container, Flex, Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'
import { ColorModeButton } from './ui/color-mode'

const GITHUB_URL = import.meta.env.VITE_GITHUB_URL
const LINKEDIN_URL = import.meta.env.VITE_LINKEDIN_URL

const Navbar = () => {
  return (
    <Box as="nav" position="fixed" top={0} left={0} right={0} bg="bg.nav" borderBottom="1px" borderColor="border.subtle" zIndex={10}>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center" py={4}>
          <Text fontWeight="bold" fontSize="xl" color="teal.400">
            SR
          </Text>
          <HStack gap={8}>
            <Link href="#home" color="text.secondary" _hover={{ color: "teal.400" }}>Home</Link>
            <Link href="#about" color="text.secondary" _hover={{ color: "teal.400" }}>About</Link>
            <Link href="#projects" color="text.secondary" _hover={{ color: "teal.400" }}>Projects</Link>
            <Link href="#resume" color="text.secondary" _hover={{ color: "teal.400" }}>Resume</Link>
            <Link href="#contact" color="text.secondary" _hover={{ color: "teal.400" }}>Contact</Link>
            <HStack gap={4}>
              <Link href={GITHUB_URL} target="_blank" color="text.secondary" _hover={{ color: "teal.400" }}>
                <FaGithub size={20} />
              </Link>
              <Link href={LINKEDIN_URL} target="_blank" color="text.secondary" _hover={{ color: "teal.400" }}>
                <FaLinkedin size={20} />
              </Link>
              <ColorModeButton />
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
