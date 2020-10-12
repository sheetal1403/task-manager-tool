import React, { useState } from 'react';
import './App.css';
import TasksTable from './components/Table/Table';
import TasksTab from './components/TasksTab/TasksTab';
import PageControls from './components/PageControls/PageControls';
import { tasksData } from './tasksData';

function App() {

  const [tasks, setTasks] = useState(tasksData);

  const [rowsPerPage, setRowsPerPage] = useState(5)
  const [page, setPage] = React.useState(0);

  const handleChangePage = (newPage) => {
        setPage(newPage.selected);
      };

  const handleChangeRowsPerPage = (rowsPerPage) => {
        setRowsPerPage(parseInt(rowsPerPage, 10));
        setPage(0);
      };

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
    <div className="MainContainer">
      <TasksTab filterTasks={displayFilteredTasks}/>
      <PageControls 
        rowsPerPage={rowsPerPage} 
        page={page} 
        totalTasks={tasks.length} 
        handleChangePage={handleChangePage}
        handleChangeRowsPerPage={handleChangeRowsPerPage}/>
      <TasksTable 
        tasks={tasks} 
        rowsPerPage={rowsPerPage} 
        page={page}  
        />
    </div>
  );
}

export default App;
