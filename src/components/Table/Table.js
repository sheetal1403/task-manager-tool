import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';

import { tasks } from '../../tasksData';
import './Table.css';

export default function BasicTable() {

    const headerRows = ['TASK NAME', 'LOB', 'SUBTASKS', 'ASSIGNED TO', 'STEP', 'DUE DATE'];
  
    return (
      <TableContainer component={Paper}>
        <Table aria-label="simple table" className="Table">
          <TableHead>
            <TableRow>
              <TableCell className="TableHeader"><Checkbox/></TableCell>     
              {headerRows.map(headerRow => 
                <TableCell key={headerRow} className="TableHeader">{headerRow}</TableCell>)}
            </TableRow>
          </TableHead>


          <TableBody>
            {tasks.map((row) => (
              <TableRow key={row.id} className="TableRow">
                <TableCell align="center" className="TableCell"><Checkbox/></TableCell>
                <TableCell className="TableCell">{row.name}</TableCell>
                <TableCell className="TableCell">{row.lob}</TableCell>
                <TableCell className="TableCell">{row.subtasks}</TableCell>
                <TableCell className="TableCell"><input/></TableCell>
                <TableCell className="TableCell">{row.step}</TableCell>
                <TableCell className="TableCell">{row.dueDate}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
