import React from 'react'
import ReactPaginate from 'react-paginate';
import './PageControls.css';



function PageControls(props) {

    const firstItem = props.page*props.rowsPerPage + 1;
    const lastItem = props.page*props.rowsPerPage + props.rowsPerPage < props.totalTasks ? props.page*props.rowsPerPage + props.rowsPerPage : props.totalTasks

    const handleChangeRowsPerPage = (event) => {
        props.handleChangeRowsPerPage(event.target.value);
    }

    return (    
        <div className="ControlsContainer">
            <div>Results: {firstItem} to {lastItem} of {props.totalTasks}</div>
            <div>Items per page: <select name="rowsPerPage" onChange={handleChangeRowsPerPage}>
                    <option value="3">3</option>
                    <option value="5">5</option>
                    <option value="10">10</option>
                </select></div>
             <ReactPaginate
                previousLabel={'<'}
                nextLabel={'>'}
                breakLabel={'...'}
                breakClassName={'break-me'}
                pageCount={Math.ceil(props.totalTasks / props.rowsPerPage)}
                marginPagesDisplayed={2}
                pageRangeDisplayed={5}
                onPageChange={props.handleChangePage}
                containerClassName={'pagination'}
                subContainerClassName={'pages pagination'}
                activeClassName={'active'}
        />
        </div>
    )
}

export default PageControls
