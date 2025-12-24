import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Me from './sections/Me'
import About from './sections/About'
import Projects from './sections/Projects'
import Resume from './sections/Resume'
import Contact from './sections/Contact'

const App = () => {
  return (
    <Box bg="bg.page" color="text.primary">
      <Navbar />
      <Me />
      <About />
      <Projects />
      <Resume />
      <Contact />
      <Footer />
    </Box>
  )
}

export default App
