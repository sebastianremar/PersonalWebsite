'use client'

import { Box } from '@chakra-ui/react'
import Navbar from '../src/components/Navbar'
import Footer from '../src/components/Footer'
import Me from '../src/sections/Me'
import About from '../src/sections/About'
import Projects from '../src/sections/Projects'
import Resume from '../src/sections/Resume'
import Contact from '../src/sections/Contact'

const Home = () => {
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

export default Home
