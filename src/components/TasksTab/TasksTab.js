import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


export default function SimpleTabs(props) {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.filterTasks(newValue);
  };

  return (
    <div>
        <Tabs value={value} onChange={handleChange} aria-label="tasks tab">
          <Tab label="Unassigned tasks" />
          <Tab label="Assigned tasks" />
          <Tab label="All tasks" />
        </Tabs>
    </div>
  );
}
