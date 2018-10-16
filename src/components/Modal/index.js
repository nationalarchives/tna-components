import React, { Component } from 'react';
import { modalObjFunc, pushInDataLayer, eventLabel } from './ModalGtm'

import './Modal.css';

class Modal extends Component {

  data = {
    h2: 'Participate',
    body: 'We want to improve our digital services for everyone. Help out by answering 4 short questions, and enter a prize draw to win £100.',
    callToAction: 'Take survey',
    cancel: 'No thanks',
    close: 'Close survey',
    takeSurvey: 'Take survey'
  };

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
      // pushInDataLayer(gtmObj);
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
    if (document.cookie.indexOf("tnaVisited=yes") === -1){
      const modal = document.getElementById('tnaModal');
      const focusableElsString = "a[href], button.closeBtn, button#noThanks";
      const focusableEls = modal.querySelectorAll(focusableElsString);

      const firstItemTab = focusableEls[0];
      const lastItemTab = focusableEls[focusableEls.length - 1];

      firstItemTab.focus();

      modal.addEventListener("keydown", (e) => {
        if (e.keyCode === 9) {
          if (e.shiftKey) {
            if (document.activeElement === firstItemTab) {
              e.preventDefault();
              lastItemTab.focus();
            }
          } else if (document.activeElement === lastItemTab) {
            e.preventDefault();
            firstItemTab.focus();
          }
        }
      });
    }
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
    const modal = document.getElementById('modal');
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
          aria-labelledby={this.data.h2}
          aria-describedby={this.data.body}
          aria-hidden="false"
        >
          <div className="modal-content">
            <div className="modal-header">
              <button className="closeBtn close focus" onClick={this.closeModal} aria-label={this.data.close}>&times;</button>
              <h2 id="dialog-title">{this.data.h2}</h2>
            </div>
            <div className="modal-body">
              <p>{this.data.body}</p>
            </div>
            <div className="modal-footer">
              <div className="button-wrapper">
                <a
                  id="surveyBtn"
                  rel="noopener noreferrer"
                  href="https://www.smartsurvey.co.uk/s/XEM2T/"
                  target="_blank"
                  className="close tna-button focus"
                  aria-label={this.data.takeSurvey}
                  onClick={this.surveyLink}>
                  {this.data.callToAction}
                </a>
                <button aria-label={this.data.close} id="noThanks" onClick={this.closeModal} className="close close-button focus">{this.data.cancel}</button>
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
