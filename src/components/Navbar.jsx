import { Box, Text, HStack, Container, Flex, Link } from '@chakra-ui/react'
import { FaGithub, FaLinkedin } from 'react-icons/fa'

const Navbar = () => {
  return (
    <Box as="nav" position="fixed" top={0} left={0} right={0} bg="gray.900" borderBottom="1px" borderColor="gray.700" zIndex={10}>
      <Container maxW="container.lg">
        <Flex justify="space-between" align="center" py={4}>
          <Text fontWeight="bold" fontSize="xl" color="teal.400">
            SR
          </Text>
          <HStack gap={8}>
            <Link href="#home" color="gray.300" _hover={{ color: "teal.400" }}>Home</Link>
            <Link href="#about" color="gray.300" _hover={{ color: "teal.400" }}>About</Link>
            <Link href="#projects" color="gray.300" _hover={{ color: "teal.400" }}>Projects</Link>
            <Link href="#resume" color="gray.300" _hover={{ color: "teal.400" }}>Resume</Link>
            <HStack gap={4}>
              <Link href="https://github.com/sebastianremar" target="_blank" color="gray.300" _hover={{ color: "teal.400" }}>
                <FaGithub size={20} />
              </Link>
              <Link href="https://www.linkedin.com/in/sebastian-remar-5332b31a1/" target="_blank" color="gray.300" _hover={{ color: "teal.400" }}>
                <FaLinkedin size={20} />
              </Link>
            </HStack>
          </HStack>
        </Flex>
      </Container>
    </Box>
  )
}

export default Navbar
