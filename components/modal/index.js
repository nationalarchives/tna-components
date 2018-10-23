import React, {Component} from 'react';
import "babel-polyfill";
import {modalGtmObj} from './ModalGtm'
import './Modal.scss';

class Modal extends Component {

  constructor(props) {
    super(props);
    this.state = {
      value: null,
      h2: 'Participate',
      body: 'We want to improve our digital services for everyone. Help out by answering 4 short questions, and enter a prize draw to win £100.',
      callToAction: 'Take survey',
      cancel: 'No thanks',
      close: 'Close survey'
    };
    this.setCookies = this.setCookies.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.surveyLink = this.surveyLink.bind(this);
    this.escClose = this.escClose.bind(this);
    this.getEventLabel = this.getEventLabel.bind(this);
    this.getEventAction = this.getEventAction.bind(this);
    this.gtm = this.gtm.bind(this);
  }

  getEventLabel (e){
    if (e.key === 'Escape') {
      return 'ESC Key pressed'
    }

    let data_gtm = e.target.getAttribute('data-gtm');

    return (data_gtm) ? `${data_gtm} was pressed` : '';

  };

  getEventAction (e) {
    return (e.target.getAttribute('data-gtm') === `${this.state.callToAction} button`) ? 'Taken survey' : 'Did not take survey';
  }

  gtm(param) {
    return modalGtmObj('Pop-Up Survey', 'Pop-Up Survey', this.getEventAction(param), this.getEventLabel(param));
  };

  setCookies() {
    const date = new Date();
    date.setMonth(date.getMonth() + 2); // Two Months

    const expiry = `expires=${date.toUTCString()}`;
    document.cookie = `interacted_with_survey=yes;${expiry};path=/`;
  };

  closeModal(e) {
    const modal = document.getElementById('tnaModalComponent');
    e.preventDefault();
    if (e.target.classList.contains("close-modal")) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      this.setCookies();
    }
  };

  surveyLink() {
    const modal = document.getElementById('tnaModalComponent');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    this.setCookies();
  };

  escClose(e, keycode) {
    const modal = document.getElementById('tnaModalComponent');
    if (e.keyCode === keycode) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      this.setCookies();
    }
  };

  focusModal() {
    if (document.cookie.indexOf("interacted_with_survey=yes") === -1) {
      const modal = document.getElementById('tnaModalComponent');
      const focusableElsString = "a[href], button.closeBtn, button#noThanks";
      const focusableEls = modal.querySelectorAll(focusableElsString);

      const firstItemTab = focusableEls[0];
      const lastItemTab = focusableEls[focusableEls.length - 1];

      focusableEls[1].focus();

      modal.addEventListener("keydown", (e) => {
        if (e.keyCode === 9) { // Tab keycode
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

  componentDidMount() {
    const modal = document.getElementById('tnaModalComponent');
    modal.addEventListener("keydown", (e) => {
      this.escClose(e, 27); // Escape keycode
      this.escClose(e, 13); // Enter keycode
      if ( e.key === "Escape" ) {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(this.gtm(e));
      }
    }, false);
    this.focusModal();

    modal.addEventListener("click", (e) => {
      if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
        window.dataLayer = window.dataLayer || [];
        window.dataLayer.push(this.gtm(e));
      }
    }, false);
  }

  render() {
    if ( document.cookie.indexOf("interacted_with_survey=yes") === -1 ) { // Cookie does not exist
      return (
        <div
          id="tnaModalComponent"
          className="modal"
          role="dialog"
          aria-modal="true"
          aria-labelledby="dialog-title"
          aria-describedby="dialog-description"
          aria-hidden="false"
        >
          <div className="modal-content">
            <div className="modal-header" id="dialog-description">
              <button className="closeBtn close-modal focus" onClick={this.closeModal}
                      aria-label={this.state.close} data-gtm="Close Button">&times;</button>
              <h2 id="dialog-title">{this.state.h2}</h2>
            </div>
            <div className="modal-body">
              <p>{this.state.body}</p>
            </div>
            <div className="modal-footer">
              <div className="button-wrapper">
                <a
                  id="surveyBtn"
                  rel="noopener noreferrer"
                  href="https://www.smartsurvey.co.uk/s/XEM2T/"
                  target="_blank"
                  className="close-modal tna-button focus"
                  data-gtm={`${this.state.callToAction} button`}
                  onClick={this.surveyLink}>
                  {this.state.callToAction}
                </a>
                <button id="noThanks"
                        onClick={this.closeModal}
                        className="close-modal close-button focus"
                        data-gtm={`${this.state.cancel} button`}>
                  {this.state.cancel}
                </button>
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
