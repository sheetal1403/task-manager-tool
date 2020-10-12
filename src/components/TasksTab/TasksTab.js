import React from 'react';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';


import './TasksTab.css';

export default function SimpleTabs(props) {
  const [value, setValue] = React.useState(2);

  const handleChange = (event, newValue) => {
    setValue(newValue);
    props.filterTasks(newValue);
  };

  return (
    <div>
        <Tabs value={value} onChange={handleChange} aria-label="tasks tab" style={{backgroundColor: '#e5e5e5'}}>
          <Tab label="Unassigned tasks" className="Selected"/>
          <Tab label="Assigned tasks" className="Selected"/>
          <Tab label="All tasks" className="Selected"/>
        </Tabs>
    </div>
  );
}
