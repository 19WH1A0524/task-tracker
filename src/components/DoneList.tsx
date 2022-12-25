import { Card, Text, CardBody } from '@chakra-ui/react'
import React from 'react'

function DoneList() {
  return (
      <Card padding={"1rem"}>
            <Card>
              <CardBody>
                Done Task 1
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                Done Task 1
              </CardBody>
            </Card>
            <Card>
              <CardBody>
                Done Task 1
              </CardBody>
            </Card>
      </Card>
  )
}

export default DoneList