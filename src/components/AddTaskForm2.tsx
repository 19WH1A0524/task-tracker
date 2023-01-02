import React, { useEffect, useState } from 'react'
import { Text, Container, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerHeader, Input, FormLabel, FormControl, Textarea, Button, Stack } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { stripBasename } from '@remix-run/router'
import AddTaskButton from './AddTaskButton'

function AddTaskForm2({ opened, setOpened }: { opened: boolean, setOpened: React.Dispatch<React.SetStateAction<boolean>> }) {
  const onClickHandler = () => {
    setOpened(false)
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")
  const [data, setData] = useState<any>({
    title: '',
    description: '',
    startTime: '',
    endTime: ''
  })
  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
		event.preventDefault();
		alert('An error occurred on the server. Please try again!!!');
	}
  function handleChange(event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) {
		setData((previousValues: any) => ({
			...previousValues,
			[event.target.name]: event.target.value,
		}));
	}
  const dataHandler = () => {

  }

  useEffect(()=>{
    localStorage.setItem('data', JSON.stringify(data))
  },[data])
    //  localStorage.setItem('title', JSON.stringify(title));
    //  localStorage.setItem('description', JSON.stringify(description));
    //  localStorage.setItem('startTime', JSON.stringify(startTime));
    //  localStorage.setItem('endTime', JSON.stringify(endTime));
    
  //  const test =() =>{

  //  }
  console.log(title)
  console.log(description)
  console.log(startTime)
  console.log(endTime)

  return (
    <Drawer size={'xl'} placement={"bottom"} onClose={() => { }} isOpen={opened}>
      <DrawerOverlay />
      <DrawerContent>

        <DrawerHeader className='drawerHeader' borderBottomWidth='1px'>Add Task
          <Button color={'red'} variant={'ghost'} onClick={onClickHandler} ><CloseIcon /></Button>
        </DrawerHeader>

        <DrawerBody>
          <form onSubmit ={handleSubmit}>
          <FormControl marginBottom={'1rem'}>
            <FormLabel>Title</FormLabel>
            <Input type='text' id={"title"} value={data.title} onChange={handleChange} />
            </FormControl>
            <FormControl marginBottom={'1rem'}>
            <FormLabel>Description</FormLabel>
            <Textarea size={'lg'} value={data.description} id={"description"} onChange={handleChange} />
            </FormControl>
            <div className='time'>
              <FormControl >
              <FormLabel>Start time</FormLabel>
              <Input type={'datetime-local'} id={"startTime"} value={data.startTime} onChange={handleChange} />
              </FormControl>
              <FormControl>
              <FormLabel>End time</FormLabel>
              <Input type={'datetime-local'} id={"endTime"} value={data.endTime} onChange={handleChange} />
              </FormControl>
            </div>
            <Stack align={'center'} marginBottom={'2rem'} marginTop={'1rem'}>
              <Button type={'submit'} size={'lg'} width={'full'} > Save</Button>
            </Stack>
          
          </form>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default AddTaskForm2