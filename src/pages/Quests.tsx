import React, { useState } from "react";
import {
  Box,
  Tab,
  Tabs,
  Typography,
} from "@mui/material";
import FeedBody from "../components/Feed/FeedBody";
import FeedHeader from "../components/Feed/FeedHeader";
import QuestCard from "../components/QuestCard";

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

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <>
      <FeedHeader headerTitle="Quests">Quest Header</FeedHeader>
      <FeedBody>
        <Tabs
          value={value}
          onChange={handleChange}
          variant="fullWidth"
          sx={{
            position: "sticky",
            top: "175px",
            bgcolor: "background.paper",
            zIndex: 100,
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
      </FeedBody>
    </>
  );
};

export default Quests;
