import React from 'react';

const Textarea = React.forwardRef((props, ref) => (
    <div>
        <label htmlFor={props.id}>{props.label}</label>
        <textarea id={props.id} ref={ref} name={props.id}></textarea>
    </div>
));

export default Textarea;