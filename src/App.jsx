import { Box } from '@chakra-ui/react'
import Navbar from './components/Navbar'
import Me from './sections/Me'
import About from './sections/About'

const App = () => {
  return (
    <Box bg="gray.900" color="white">
      <Navbar />
      <Me />
      <About />
    </Box>
  )
}

export default App
