import { Text, Container} from '@chakra-ui/react'
import './App.css'
import AddTaskButton from './components/AddTaskButton'
import TaskTabs from './components/TaskTabs'
import AddTaskForm from './components/AddTaskForm'
import { useState } from 'react'

function App() {
  const [opened, setOpened] = useState<boolean>(false)
  return (
    <Container maxW={'5xl'}>
      <Text fontSize='3xl' fontWeight={'bold'} align={'center'}>App Title</Text>
      <AddTaskButton setOpened={setOpened}/>
      <TaskTabs />
      <AddTaskForm opened = {opened} setOpened={setOpened}/>
    </Container>
  )
}

export default App
