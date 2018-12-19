import 'core-js/es6/map';
import 'core-js/es6/set';

import React from "react";
import ReactDOM from "react-dom";
import GuidanceFeedback from '../../components/guidance_feedback/guidance-feedback.react';

if ( !document.getElementById("guidance-feedback-react") ) {
    let div = document.createElement("div");
    div.id = 'guidance-feedback-react';
    document.body.appendChild(div);

    ReactDOM.render(<GuidanceFeedback/>, document.getElementById("guidance-feedback-react"));
  }

