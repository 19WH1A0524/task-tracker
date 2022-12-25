import React from 'react'
import { Text, Container, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerHeader, Input, FormLabel, FormControl, Textarea, Button, Stack } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

function AddTaskForm({opened, setOpened}:{opened:boolean, setOpened: React.Dispatch<React.SetStateAction<boolean>>} ) {
  const onClickHandler =() =>{
    setOpened(false)
 }
  return (
    <Drawer size={'xl'} placement={"bottom"} onClose={() => {  }} isOpen={opened}>
        <DrawerOverlay />
        <DrawerContent>
          
          <DrawerHeader className='drawerHeader' borderBottomWidth='1px'>Add Task
          <Button color={'red'} variant={'ghost'} onClick = {onClickHandler} ><CloseIcon/></Button>
          </DrawerHeader>

          <DrawerBody>
            <FormControl marginBottom={'1rem'}>
              <FormLabel>Title</FormLabel>
              <Input type='text' />
            </FormControl>
            <FormControl marginBottom={'1rem'}>
              <FormLabel>Description</FormLabel>
              <Textarea size={'lg'}/>
            </FormControl>
            <div className='time'>
            <FormControl >
            <FormLabel>Start time</FormLabel>
              <Input type={'datetime-local'} />
            </FormControl>
            <FormControl>
            <FormLabel>End time</FormLabel>
              <Input type={'datetime-local'} />
            </FormControl>
            </div>
            <Stack align={'center'} marginBottom={'2rem'} marginTop={'1rem'}>
            <Button size={'lg'} width={'full'}> Save</Button>
            </Stack>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
  )
}

export default AddTaskForm