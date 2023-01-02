import { Card, Text, CardBody, Table, TableCaption, TableContainer, Tbody, Td, Thead, Tr, Th, Tfoot, Button } from '@chakra-ui/react'
import React from 'react'

function DoneList({ pending, setPending, data, setData }: { pending: boolean, setPending: any, data : any, setData : any }) {
  
  if (data.length === 0) {
    return <>No data exists</>
  }
  let count = 0;
    {data.map((ele :any) =>{
      if(ele.pending ===false) 
        count += 1;
    }
    )}
  if ( count === 0){
    return <>No task completed</>
  }

  // const penData = localStorage.getItem('data')

  
  // console.log("pending", penData, typeof penData)
  
  // if (penData === null) return <>No tasks as of now!</>
  
  // let obj;
  
  // if (penData !== null) {
  //   obj = JSON.parse(penData);
  //   console.log("i", obj)
  // }
  
  const onClickHandler = () => {
    setPending(true);

  }

  return (
    <TableContainer>
      <Table variant='simple'>
        <TableCaption>YOU CAN DO IT!!</TableCaption>
        <Thead>
          <Tr>
            <Th>Sl no.</Th>
            <Th>Title</Th>
            <Th > Actions</Th>
          </Tr>
        </Thead>
        <Tbody>
          {data.map((ele : any, index: number) => {
            if (!ele.pending) {
            return <Tr>
              <Td>{index + 1}</Td>
              <Td>{ele.title}</Td>
              <Td> <Button onClick={onClickHandler}> pending</Button><Button>edit</Button> <Button>del</Button></Td>
            </Tr>
            }
          })}
        </Tbody>
      </Table>
    </TableContainer>

  )
}

export default DoneList