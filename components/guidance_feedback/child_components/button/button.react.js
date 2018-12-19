import React from 'react';

const Button = (props) => {
    
    return(
        <button 
            aria-describedby="aria"
            onClick={props.onClick}
            className={props.className}
            type={props.type} 
            name={props.name}
        >
            {props.children}
        </button>
    )
};

export default Button;