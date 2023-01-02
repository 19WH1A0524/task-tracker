import { Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import DoneList from './DoneList'
import PendingList from './PendingList'

function TaskTabs({ pending, setPending, data, setData }:{ pending: boolean, setPending: any, data : any, setData : any}) {
  
  return (
    <Tabs isFitted variant='soft-rounded' colorScheme='teal'  >
      <TabList>
        <Tab>Pending</Tab>
        <Tab>Done</Tab>
      </TabList>
      <TabPanels>
          <TabPanel>
            <PendingList pending={pending} setPending={setPending} data={data} setData={setData} />
          </TabPanel>
          <TabPanel>
            <DoneList pending={pending} setPending={setPending} data={data} setData={setData} />
          </TabPanel>
      </TabPanels>
  </Tabs>
  )
}

export default TaskTabs