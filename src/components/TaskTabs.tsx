import { Tabs, TabList, Tab, TabPanel, TabPanels } from '@chakra-ui/react'
import DoneList from './DoneList'
import PendingList from './PendingList'

function TaskTabs() {
  return (
    <Tabs isFitted variant='soft-rounded' colorScheme='teal'  >
      <TabList>
        <Tab>Pending</Tab>
        <Tab>Done</Tab>
      </TabList>
      <TabPanels>
          <TabPanel>
            <PendingList />
          </TabPanel>
          <TabPanel>
            <DoneList/>
          </TabPanel>
      </TabPanels>
  </Tabs>
  )
}

export default TaskTabs