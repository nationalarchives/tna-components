import React, { Component } from 'react';

import './Modal.css';

class Model extends Component {
  render(){
    const addClass = new AddClass();
    addClass.addClass();
    return (
      <div id="simpleModal" className="modal">
        <div className="modal-content">
          <div className="modal-header">
            <span className="closeBtn">&times;</span>
            <h2>Modal Header</h2>
          </div>
          <div className="modal-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus nisi, sunt consectetur ipsa
              velit repudiandae aperiam modi quisquam nihil nam asperiores doloremque mollitia dolor deleniti quibusdam
              nemo commodi ab.</p>
          </div>
          <div className="modal-footer">
            <h3>Modal Footer</h3>
          </div>
        </div>
      </div>
    );
  }
};

class AddClass {
  addClass () {
    const dom = document.getElementsByTagName('BODY')[0];
    dom.classList.add("modalLoad");
  }
}

export default Model;
