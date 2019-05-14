import React from "react";

const Fieldset = ({ children, show, legend, onClick }) => {
    if (show !== true) {
        return null;
    }
    return (
        <fieldset onClick={onClick}>
            <legend>{legend}</legend>
            {children}
        </fieldset>
    )
};

export default Fieldset;
