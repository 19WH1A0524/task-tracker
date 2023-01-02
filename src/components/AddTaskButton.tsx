import { Button, Stack } from '@chakra-ui/react'
import React from 'react'
import AddTaskForm from './AddTaskForm'

function AddTaskButton({setOpened}:{setOpened: React.Dispatch<React.SetStateAction<boolean>>} 
  ) {
    const onClickHandler =() =>{
       setOpened(true)
       
    }
  return (
      <Stack align={'center'} marginBottom={'2rem'} marginTop={'5rem'}>
      <Button size={'lg'} width={'full'} colorScheme='teal' onClick={onClickHandler}>
          Create Task
      </Button>
    </Stack>
  )
}

export default AddTaskButton

