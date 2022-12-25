import { Card, CardBody, Text, Container } from '@chakra-ui/react'
import './App.css'

function App() {

  return (
    
    <Container maxW={'5xl'}>
      <Card>
        <CardBody>
          <Text>View a summary of all your customers over the last month.</Text>
        </CardBody>
      </Card>
    </Container>
  )
}

export default App
