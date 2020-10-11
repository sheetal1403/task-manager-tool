import React, { useState } from 'react';
import './App.css';
import TasksTable from './components/Table/Table';
import TasksTab from './components/TasksTab/TasksTab';
import { tasksData } from './tasksData';

function App() {

  const initialTasks = tasksData.filter(task => task.assigned === false);
  const [tasks, setTasks] = useState(initialTasks);

  const displayFilteredTasks = (index) => {

      switch(index){
        case 0:
          const unassignedTasks = tasksData.filter(task => task.assigned === false);
          setTasks(unassignedTasks);
          break;
        
        case 1:
          const assignedTasks = tasksData.filter(task => task.assigned === true);
          setTasks(assignedTasks);
          break;
      
        case 2:
          setTasks(tasksData);
          break;

        default:
          setTasks(tasksData);
      }

      
  } 

  return (
    <div>
      <TasksTab filterTasks={displayFilteredTasks}/>
      <TasksTable tasks={tasks}/>
    </div>
  );
}

export default App;
