import React, { useState } from 'react';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import Checkbox from '@material-ui/core/Checkbox';
import TablePagination from '@material-ui/core/TablePagination';
import './Table.css';

import Lob from '../Lob/Lob';

export default function TasksTable(props) {

    const headerRows = ['TASK NAME', 'LOB', 'SUBTASKS', 'ASSIGNED TO', 'STEP', 'DUE DATE'];

    const [rowsPerPage, setRowsPerPage] = useState(5)
    const [page, setPage] = React.useState(0);

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(parseInt(event.target.value, 10));
        setPage(0);
      };

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
      };
  
    return (
      <div>
        <TablePagination
        count={props.tasks.length}
        rowsPerPage={rowsPerPage}
        page={page}
        component='div'
        rowsPerPageOptions={[5, 10, 25]}
        onChangeRowsPerPage={handleChangeRowsPerPage}
        onChangePage={handleChangePage}/>


        <TableContainer component={Paper}>
        <Table aria-label="tasks table" className="Table">
          <TableHead>
            <TableRow>
              <TableCell className="TableHeader" align="center"><Checkbox/></TableCell>     
              {headerRows.map(headerRow => 
                <TableCell key={headerRow} className="TableHeader" align="center">{headerRow}</TableCell>)}
            </TableRow>
          </TableHead>


          <TableBody>
            {props.tasks.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => (
              
                 <TableRow key={row.id} className="TableRow">
                    <TableCell align="center" className="TableCell"><Checkbox/></TableCell>
                    <TableCell align="center" className="TableCell">{row.name}</TableCell>
                    <TableCell align="center" className="TableCell"><Lob lob={row.lob}/></TableCell>
                    <TableCell align="center" className="TableCell">{row.subtasks}</TableCell>
                    <TableCell align="center" className="TableCell"><input/></TableCell>
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
