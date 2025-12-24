import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Me from './sections/Me'
import About from './sections/About'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

const App = () => {
  return (
    <Box bg="gray.900" color="white">
      <Navbar />
      <Me />
      <About />
      <Projects />
      <Resume />
      <Contact />
    </Box>
  )
}

export default App
