import React, { useEffect, useState } from 'react'
import { Text, Container, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerHeader, Input, FormLabel, FormControl, Textarea, Button, Stack } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { stripBasename } from '@remix-run/router'
import AddTaskButton from './AddTaskButton'
import { v4 } from 'uuid'


export interface Task {
  id : string;
  title : string;
  description : string;
  startTime : string;
  endTime: string;
  pending: boolean;
}


function AddTaskForm({ opened, setOpened, pending, setPending, setData, data }: { opened: boolean, setOpened: React.Dispatch<React.SetStateAction<boolean>> , pending: boolean, setPending: any, setData : any, data: any}) {
  const onClickHandler = () => {
    setOpened(false)
  }
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("")
  const [startTime, setStartTime] = useState("")
  const [endTime, setEndTime] = useState("")

  let localData = localStorage.getItem("data");



  // useEffect(()=>{
  //   localStorage.setItem('data', JSON.stringify(data))
  // },[])

  const HandleSave = () => {
    let newTask: Task = {
      id: v4(), title, description, startTime, endTime, pending : true
    }
    setData((prev : any) => [newTask, ...prev]);
    localStorage.setItem('data', JSON.stringify([newTask, ...data]));
    setOpened(false);
  }

  console.log(data);

  

  return (
    <Drawer size={'xl'} placement={"bottom"} onClose={() => { }} isOpen={opened}>
      <DrawerOverlay />
      <DrawerContent>

        <DrawerHeader className='drawerHeader' borderBottomWidth='1px'>Add Task
          <Button color={'red'} variant={'ghost'} onClick={onClickHandler} ><CloseIcon /></Button>
        </DrawerHeader>

        <DrawerBody>
          <FormControl marginBottom={'1rem'}>
            <FormLabel>Title</FormLabel>
            <Input type='text' id={"title"} value={title} onChange={(e) => setTitle(e.target.value)} />
            {/* </FormControl> */}
            {/* <FormControl marginBottom={'1rem'}> */}
            <FormLabel>Description</FormLabel>
            <Textarea size={'lg'} value={description} id={"description"} onChange={(e) => setDescription(e.target.value)} />
            {/* </FormControl> */}
            <div className='time'>
              {/* <FormControl > */}
              <FormLabel>Start time</FormLabel>
              <Input type={'datetime-local'} id={"startTime"} value={startTime} onChange={(e) => setStartTime(e.target.value)} />
              {/* </FormControl> */}
              {/* <FormControl> */}
              <FormLabel>End time</FormLabel>
              <Input type={'datetime-local'} id={"endTime"} value={endTime} onChange={(e) => setEndTime(e.target.value)} />
              {/* </FormControl> */}
            </div>
            <Stack align={'center'} marginBottom={'2rem'} marginTop={'1rem'}>
              <Button type={'submit'} size={'lg'} width={'full'} onClick={HandleSave}> Save</Button>
            </Stack>
          </FormControl>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  )
}

export default AddTaskForm