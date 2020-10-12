import React, { useState } from 'react'
import Select from 'react-select';
import './AssignmentInput.css';

function AssignmentInput() {

    const [value, setvalue] = useState('Unassigned')
    const [isOpen, setIsOpen] = useState(false);

    const options = [
        {value:'1', label: 'Item 1'},
        {value:'2', label: 'Item 2'},
        {value:'3', label: 'Item 3'},
    ]

    const handleClick = () => {
        setIsOpen(!isOpen);
    }

    const onSelectChange = (data) => {
        console.log(data.label)
        setvalue(data.label)
        setIsOpen(false)
    }

    const useStyles = {
        width: '100px'
    }
    
    let menu = (isOpen && 
            <div className="SelectContainer">
                <Select 
                    autoFocus
                    controlShouldRenderValue={false}
                    placeholder="Search..."
                    value={value}
                    onChange={onSelectChange}
                    options={options}
                    styles={useStyles}/>
            </div>)

    return (

       
        

        <div className="Assign">
            {/* <Select options={[
                {value:'1', label: 'Item 1'},
                {value:'2', label: 'Item 2'},
                {value:'3', label: 'Item 3'},
                ]} val>
                
            </Select> */}
            <button onClick={handleClick} className="Dropdown">{value}</button>
            {menu}

        </div>
        
    )
}

export default AssignmentInput
