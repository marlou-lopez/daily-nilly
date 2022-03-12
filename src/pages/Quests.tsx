import React, { useState } from "react";
import {
  Box,
  Button,
  Tab,
  Tabs,
} from "@mui/material";
import QuestCard from "../components/QuestCard";
import { ModalTypes, useModal } from "../contexts/modal-context";

interface TabPanelProps {
  children?: React.ReactNode;
  index: number;
  value: number;
}

function TabPanel(props: TabPanelProps) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box>
          {children}
        </Box>
      )}
    </div>
  );
}

const Quests: React.FC = () => {
  const [value, setValue] = useState(0);
  const { dispatch } = useModal();

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      {/* <FeedHeader headerTitle="Quests">
        <Button onClick={() => dispatch({ type: "open", modalType: ModalTypes.CREATE_QUEST })}>Open</Button>
      </FeedHeader> */}
      <>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          sx={{
            // position: "sticky",
            // top: "175px",
            // bgcolor: "background.paper",
            // zIndex: 100,
            mb: 1,
          }}
        >
          <Tab label="Daily" />
          <Tab label="Weekly" />
          <Tab label="World" />
        </Tabs>
        <TabPanel value={value} index={0}>
          <QuestCard>
            test
          </QuestCard>
        </TabPanel>
        <TabPanel value={value} index={1}>
          Weekly
        </TabPanel>
        <TabPanel value={value} index={2}>
          World
        </TabPanel>
        
      </>
    </>
  );
};

export default Quests;
