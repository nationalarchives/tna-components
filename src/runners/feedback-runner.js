import React from "react";
import ReactDOM from "react-dom";
import Feedback from '../../components/feedback/index';

const rootElement = document.getElementById("root");

if (document.getElementById('tester') !== null) {
    ReactDOM.render(<Feedback/>, rootElement);
}

