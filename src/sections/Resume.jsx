import { Box, Heading, VStack, HStack, Container, Button, Link } from '@chakra-ui/react'
import { FaDownload, FaExternalLinkAlt } from 'react-icons/fa'
import { useTranslation } from 'react-i18next'
import resumePdf from '../assets/Q4_25_Remar_Sebastian.pdf'

const Resume = () => {
  const { t } = useTranslation()

  return (
    <Box id="resume" py={20} bg="bg.sectionAlt">
      <Container maxW="container.lg">
        <VStack gap={8} align="flex-start">
          <Heading as="h2" fontSize="3xl" color="teal.400">
            {t('resume.title')}
          </Heading>
          <HStack gap={4}>
            <Link href={resumePdf} download="Sebastian_Remar_Resume.pdf">
              <Button colorPalette="teal" size="md">
                <FaDownload />
                {t('resume.download')}
              </Button>
            </Link>
            <Link href={resumePdf} target="_blank">
              <Button variant="outline" colorPalette="teal" size="md">
                <FaExternalLinkAlt />
                {t('resume.openTab')}
              </Button>
            </Link>
          </HStack>
          <Box
            as="iframe"
            src={resumePdf}
            width="100%"
            height="800px"
            borderRadius="md"
            border="1px solid"
            borderColor="border.default"
          />
        </VStack>
      </Container>
    </Box>
  )
}

export default Resume
