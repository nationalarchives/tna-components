/**
 * ------------  THE NATIONAL ARCHIVES  -----------------
 * Textarea React Component
 * Developer: Mihai Diaconita
 **/

import React from 'react';

const Textarea = React.forwardRef((props, ref) => (
    <div>
        <label htmlFor={props.id}>{props.label}</label>
        <textarea id={props.id} ref={ref} name={props.id} maxLength={props.length}></textarea>
    </div>
));

export default Textarea;