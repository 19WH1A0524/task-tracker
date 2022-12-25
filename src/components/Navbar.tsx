import { Button, Card, Text } from '@chakra-ui/react'
import React from 'react'
import "./Navbar.css"

function Navbar() {
  return (
    <Card padding={'3'} className={"Navbar"} >
        <Text fontSize='2xl'>Navbar</Text>
        <Button colorScheme='cyan' variant='ghost'>
            Home
        </Button>
        <Button  variant='ghost'>About</Button>
    </Card>
  )
}

export default Navbar