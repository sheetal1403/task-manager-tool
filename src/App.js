import React from 'react';
import './App.css';
import Table from './components/Table/Table';
import TasksTab from './components/TasksTab/TasksTab';

function App() {
  return (
    <div>
      <TasksTab/>
      <Table/>
    </div>
  );
}

export default App;
