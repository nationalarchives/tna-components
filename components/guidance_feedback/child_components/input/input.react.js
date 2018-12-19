/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * Input React Component
 * Developer: Mihai Diaconita
 **/

import React from 'react';

const Input = (props) => {
    return(
        <input 
            type={props.type} 
            value={props.value} 
            className={props.className}
            onClick={props.onClick}
        />
    )
}

export default Input;