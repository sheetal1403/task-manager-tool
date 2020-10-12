import React from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import SortIcon from '@material-ui/icons/Sort';
import './Table.css';
import iconImage from '../../icon_image.png';

import Lob from '../Lob/Lob';
import AssignmentInput from '../AssignmentInput/AssignmentInput';

export default function TasksTable(props) {

    const headerRows = ['TASK NAME', 'LOB', 'SUBTASKS', 'ASSIGNED TO', 'STEP', 'DUE DATE'];

    

    

   
  
    return (
      <div>
        <TableContainer component={Paper}>
        <Table aria-label="tasks table" className="Table">
          <TableHead>
            <TableRow>
              <TableCell className="TableHeader"><img src={iconImage} alt="icon" className="IconImage"/></TableCell>
              <TableCell className="TableHeader" align="center"><Checkbox/></TableCell>     
              {headerRows.map(headerRow => 
                <TableCell key={headerRow} className="TableHeader" align="center">
                    <div className="HeaderCell">
                        {headerRow}<SortIcon/>
                    </div></TableCell>)}
            </TableRow>
          </TableHead>


          <TableBody>
            {props.tasks.slice(props.page * props.rowsPerPage, props.page * props.rowsPerPage + props.rowsPerPage).map((row) => (
              
                 <TableRow key={row.id} className="TableRow">
                    <TableCell align="center" className="TableCell"></TableCell>
                    <TableCell align="center" className="TableCell"><Checkbox/></TableCell>
                    <TableCell align="left" className="TableCell">{row.name}</TableCell>
                    <TableCell align="center" className="TableCell"><Lob lob={row.lob}/></TableCell>
                    <TableCell align="center" className="TableCell">{row.subtasks}</TableCell>
                    <TableCell align="center" className="TableCell"><AssignmentInput/></TableCell>
                    <TableCell align="center" className="TableCell">{row.step}</TableCell>
                    <TableCell align="center" className="TableCell">{row.dueDate}</TableCell>
              </TableRow> 
              
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      
      </div>
      
    );
  }
