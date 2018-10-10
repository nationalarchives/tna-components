import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Banner from './components/Banner/Banner';
import Modal from './components/Modal/index';

import * as serviceWorker from './serviceWorker';

// ReactDOM.render(<App />, document.getElementById('root'));
ReactDOM.render(<Banner />, document.getElementById('banner'));
ReactDOM.render(<Modal />, document.getElementById('modal'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();

// Are we in development mode?
if (module.hot) {
  // Whenever a new version of App.js is available
  module.hot.accept();
}
