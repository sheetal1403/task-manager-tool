import React from 'react'
import './Lob.css';

function Lob(props) {
    const classes = ['Lob']

    switch(props.lob){
        case 'Medicare':
            classes.push('Medicare');
            break;
        case 'Commercial':
            classes.push('Commercial');
            break;
        case 'Exchange':
            classes.push('Exchange');
            break;
        case 'Medicaid':
            classes.push('Medicaid');
            break;
        default:

    }

    return (
        <div className={classes.join(' ')}>
            {props.lob}
        </div>
    )
}

export default Lob
