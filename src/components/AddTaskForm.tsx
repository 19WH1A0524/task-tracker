import React from 'react'
import { Text, Container, Drawer, DrawerOverlay, DrawerContent, DrawerBody, DrawerHeader, Input, FormLabel, FormControl, Textarea, Button, Stack } from '@chakra-ui/react'

function AddTaskForm({opened}:{opened:boolean} ) {

  return (
    <Drawer size={'xl'} placement={"bottom"} onClose={() => {  }} isOpen={opened}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Add Task</DrawerHeader>
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