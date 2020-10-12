import React, { useState } from 'react'
import Select from 'react-select';
import './AssignmentInput.css';
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';

function AssignmentInput(props) {

    const [value, setvalue] = useState(props.assignedTo);
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        {value:'Nicole Smith', label: 'Nicole Smith'},
        {value:'Derek Roberts', label: 'Derek Roberts'},
        {value:'Susan Miller', label: 'Susan Miller'},
        {value: 'Unassigned', label: 'Unassigned'}
    ]

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const onSelectChange = (data) => {
        setvalue(data.label)
        setIsOpen(false)
    }

    const useStyles = {
        width: '100px',
        container: styles => ({...styles}),
        placeholder: (styles) => ({...styles, fontSize: '10px'}),
        control: styles => ({...styles, borderRadius: '20px'}),
        menu: styles => ({...styles, margin: 0})
    }
    
    let menu = (isOpen && 
            <div className="SelectContainer">
                <Select 
                    autoFocus
                    placeholder="Search for user"
                    value={value}
                    onChange={onSelectChange}
                    options={options}
                    styles={useStyles}/>
            </div>)

    return (

       
        

        <div className="Assign">
            <button onClick={handleClick} className="Dropdown"><p>{value}</p><ArrowDropDownIcon/></button>
            {menu}

        </div>
        
    )
}

export default AssignmentInput
