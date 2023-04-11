import React from 'react'
import { Box, Heading } from '@chakra-ui/react'

export default function Header() {

  const headingStyle = {
    display: 'flex',
    justifyContent: 'center',
    my: '20px',
    color: 'blue.500',
  }

  return (
    <Box bg='gray.100' w='80%'>
      <Heading sx={headingStyle}>
        Todo List Project With Chakra UI & React
      </Heading>
    </Box>


  )
}
