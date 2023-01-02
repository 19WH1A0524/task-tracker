import { Text, Container} from '@chakra-ui/react'
import './App.css'
import AddTaskButton from './components/AddTaskButton'
import TaskTabs from './components/TaskTabs'
import AddTaskForm, { Task } from './components/AddTaskForm'
import { useState, useEffect } from "react"

function App() {

  const [opened, setOpened] = useState<boolean>(false)
  const [pending, setPending]= useState<boolean>(true)
  const [data, setData] = useState<Task[]>(JSON.parse(localStorage.getItem("data") !== "undefined" ? localStorage.getItem("data")! : "[]") ?? []);

  useEffect(() => {
    setData(JSON.parse(localStorage.getItem("data") !== "undefined" ? localStorage.getItem("data")! : "[]") ?? []);
  }, [localStorage.getItem("data")])



  return (
    <Container maxW={'5xl'}>
      <Text fontSize='3xl' fontWeight={'bold'} align={'center'}>App Title</Text>
      <AddTaskButton setOpened={setOpened}/>
      <TaskTabs pending={pending} setPending={setPending} data={data} setData={setData} />
      <AddTaskForm opened = {opened} setOpened={setOpened} pending={pending} setPending={setPending} setData={setData} data={data}/>
    </Container>
  )
}

export default App
