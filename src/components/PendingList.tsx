import { Card, Text, CardBody, Table, TableCaption, TableContainer, Tbody, Td, Thead, Tr, Th, Tfoot, Button } from '@chakra-ui/react'
import React, {useState, useEffect} from 'react'
import { Task } from './AddTaskForm';



function PendingList({ pending, setPending, data, setData }: { pending: boolean, setPending: any, data : any, setData : any }) {

  if (data.length === 0) {
    return <>No data exists</>
  }
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
            if (ele.pending) {
              return <Tr>
                <Td>{index + 1}</Td>
                <Td>{ele?.title}</Td>
                <Td > <Button onClick={() => {onClickHandler}}> done</Button><Button>edit</Button> <Button>del</Button></Td>
              </Tr>
            }
          }
        )}
        </Tbody>

      </Table>
    </TableContainer>

  )
}

export default PendingList