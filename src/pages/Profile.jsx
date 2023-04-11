import {
  ChatIcon,
  CheckCircleIcon,
  EmailIcon,
  StarIcon,
  WarningIcon,
} from "@chakra-ui/icons";
import {
  List,
  ListIcon,
  ListItem,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";

export default function Profile() {
  return (
    <Tabs variant="enclosed">
      <TabList>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Account Info</Tab>
        <Tab _selected={{ color: "white", bg: "purple.400" }}>Task History</Tab>
      </TabList>

      <TabPanels>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={EmailIcon} />
              Email: saeid.rohparvar@gmail.com
            </ListItem>
            <ListItem>
              <ListIcon as={ChatIcon} />
              After route actions are called, the data will be revalidated automatically.
            </ListItem>
            <ListItem>
              <ListIcon as={StarIcon} />
              This hook makes the data at any currently rendered route available anywhere.
            </ListItem>
          </List>
        </TabPanel>
        <TabPanel>
          <List spacing={4}>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              On createBrowserRouter function you can pass an array of objects.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Alternatively, you can pass the createRoutesFromElements function.
                        </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              In this case your parent component should be a Route and not
              Routes.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              Connect and share knowledge within a single location that is structured.
            </ListItem>
            <ListItem>
              <ListIcon as={WarningIcon} color="red.400" />
              This hook provides the value returned from your route loader.
            </ListItem>
            <ListItem>
              <ListIcon as={CheckCircleIcon} color="teal.400" />
              This feature only works if using a data router.
            </ListItem>
          </List>
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
}
