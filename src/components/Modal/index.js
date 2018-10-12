import React, { Component } from 'react';
//import { modalObjFunc, pushInDataLayer, eventLabel } from './ModalGtm'

import './Modal.css';

class Modal extends Component {

  setCookies = () => {
    const date = new Date();
    date.setMonth(date.getMonth() + 1); // One Month

    const expiry = `expires=${date.toUTCString()}`;
    document.cookie = `tnaVisited=yes;${expiry};path=/`;
  };

  closeModal = (e) => {
    const modal = document.getElementById('tnaModal');
    //const gtmObj = modalObjFunc('Pop-Up Survey', 'Pop-Up Survey', eventLabel('surveyBtn'), 'Url');
    e.preventDefault();
    if ( e.target.classList.contains("close") ) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      this.setCookies();
      //pushInDataLayer(gtmObj);
    }
  };

  surveyLink = () => {
    const modal = document.getElementById('tnaModal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    this.setCookies();
  };

  escClose = (e, keycode) => {
    const modal = document.getElementById('tnaModal');
    if ( e.keyCode === keycode ) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      this.setCookies();
    }
  };

  focusModal = () => {
    const modal = document.getElementById('tnaModal');
    const focusableElsString = "a[href], button, button.closeBtn";
    const focusableEls = modal.querySelectorAll(focusableElsString);

    let firstItemTab = focusableEls[1];

    focusableEls[focusableEls.length -1].addEventListener('blur', (event) => {
      console.log(focusableEls);
      const pc = document.getElementById('punal');
      pc.focus();
    })

    firstItemTab.focus();
  };

  componentDidMount(){
    const modal = document.getElementById('modal');
    modal.addEventListener("keydown", (e) => {
      this.escClose(e, 27);
      this.escClose(e, 13);
    }, false);
    this.focusModal();
  }

  componentWillUnmount(){
    const modal = document.getElementById('tnaModal');
    modal.addEventListener("keydown", (e) => {
      this.escClose(e, 27);
      this.escClose(e, 13);
    }, false);
  }

  render(){
    if (document.cookie.indexOf("tnaVisited=yes") === -1) { // Cookie does not exist
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
              <button id="punal" className="closeBtn close focus" onClick={this.closeModal} aria-label="Close Dialog">&times;</button>
              <h2 id="dialog-title">Modal Header</h2>
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
                  rel="noopener noreferrer"
                  href="https://www.smartsurvey.co.uk/s/XEM2T/"
                  target="_blank"
                  className="close tna-button focus"
                  onClick={this.surveyLink}>
                  Take survey
                </a>
                <button onClick={this.closeModal} className="close close-button focus">No thanks</button>
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
