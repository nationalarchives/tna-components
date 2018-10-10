import React, { Component } from 'react';

import './Modal.css';

class Modal extends Component {

  setCookies(){
    let date = new Date();
    date.setMonth(date.getMonth() + 1); // One Month

    let expiry = `expires=${date.toUTCString()}`;
    document.cookie = `tnaVisited=yes;${expiry};path=/`;
  }

  closeModal = (e) => {
    let modal = document.getElementById('tnaModal');
    e.preventDefault();
    if ( e.target.classList.contains("close") ) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      this.setCookies();
    }
  }

  surveyLink = () => {
    let modal = document.getElementById('tnaModal');
    modal.style.display = 'none';
    this.setCookies();
  }

  focusElement(){
    let tnaBtn = document.querySelector('.tna-button')
    if ( document.cookie.indexOf("tnaVisited=yes") === -1 ) {
      tnaBtn.focus();
    }
  }

  escKey = (e) => {
    let modal = document.getElementById('modal');
    if ( e.keyCode === 27 ) {
      modal.style.display = 'none';
      this.setCookies();
    }
  }

  componentDidMount(){
    let modal = document.getElementById('modal');
    modal.addEventListener("keydown", this.escKey, false);
    this.focusElement();
  }

  componentWillUnmount(){
    let modal = document.getElementById('modal');
    modal.addEventListener("keydown", this.escKey, false);
  }

  render(){
    if (document.cookie.indexOf("tnaVisited=yes") === -1) {
      return (
        <div
          id="tnaModal"
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          aria-hidden="false"
        >
          <div className="modal-content">
            <div className="modal-header">
              <span tabIndex="3" className="closeBtn close" onClick={this.closeModal}>&times;</span>
              <h2>Modal Header</h2>
            </div>
            <div className="modal-body">
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nulla repellendus nisi, sunt consectetur ipsa
                velit repudiandae aperiam modi quisquam nihil nam asperiores doloremque mollitia dolor deleniti quibusdam
                nemo commodi ab.</p>
            </div>
            <div className="modal-footer">
              <div className="button-wrapper">
                <a
                  id="surveyBtn"
                  tabIndex="1"
                  rel="noopener noreferrer"
                  href="https://www.smartsurvey.co.uk/s/XEM2T/"
                  target="_blank" className="close tna-button"
                  onClick={this.surveyLink}>
                  Take survey
                </a>
                <button tabIndex="2" onClick={this.closeModal} className="close close-button">No thanks</button>
              </div>
            </div>
          </div>
        </div>
      );
    }
    return null;
  }
}

export default Modal;
