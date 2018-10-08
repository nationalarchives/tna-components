import React, { Component } from 'react';

import './Modal.css';

class Model extends Component {
  state = { isOpen: false };

  closeModal = (e) => {
    let modal = document.getElementById('tnaModal');
    e.preventDefault();
    if ( e.target.classList.contains("close") ) {
      modal.style.display = 'none';
    }
  }

  outsideClick = (e) => {
    let modal = document.getElementById('tnaModal');
    if(e.target === modal || e.key === "Escape"){
      modal.style.display = 'none';
    }
  }

  checkLink = () => {
    let modal = document.getElementById('tnaModal');
    modal.style.display = 'none';
  }

  escFunction(event){
    if(event.keyCode === 27) {
      let modal = document.getElementById('tnaModal');
      modal.style.display = 'none';
    }
  }

  componentDidMount(){
    document.addEventListener("keydown", this.escFunction, false);
  }

  render(){
    const addClass = new AddClass();
    addClass.addClass();
    return (
      <div id="tnaModal" className="modal" onClick={this.outsideClick}>
        <div className="modal-content">
          <div className="modal-header">
            <span className="closeBtn close" onClick={this.closeModal}>&times;</span>
            <h2>Modal Header</h2>
          </div>
          <div className="modal-body">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus nisi, sunt consectetur ipsa
              velit repudiandae aperiam modi quisquam nihil nam asperiores doloremque mollitia dolor deleniti quibusdam
              nemo commodi ab.</p>
          </div>
          <div className="modal-footer">
            <div className="button-wrapper">
              <a rel="noopener noreferrer" href="https://www.smartsurvey.co.uk/s/XEM2T/" target="_blank" className="close tna-button" onClick={this.checkLink}>Take survey</a>
              <button onClick={this.closeModal} className="close">No thanks</button>
            </div>
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
