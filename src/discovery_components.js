import 'core-js/es6/map';
import 'core-js/es6/set';

import React from "react";
import ReactDOM from "react-dom";
import Modal from '../components/modal/index';

//let notOldIE = window.ActiveXObject;
// Internet Explorer 6-11

let isNotOldIE = !window.ActiveXObject;
if ( document.cookie.indexOf("interacted_with_survey=yes") === -1 && isNotOldIE ) {
  if ( !document.getElementById("app") ) {
    let div = document.createElement("div");
    div.id = 'app';
    document.body.appendChild(div);
    ReactDOM.render(<Modal/>, document.getElementById('app'));
  }
}
