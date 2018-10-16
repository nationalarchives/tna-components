import React, {Component} from 'react';
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
      cancel: 'No thanks'
    };
    this.setCookies = this.setCookies.bind(this);
    this.closeModal = this.closeModal.bind(this);
    this.surveyLink = this.surveyLink.bind(this);
    this.escClose = this.escClose.bind(this);
    this.getUrlLabel = this.getUrlLabel.bind(this);
    this.getEventAction = this.getEventAction.bind(this);
    this.gtm = this.gtm.bind(this);
  }

  getUrlLabel (e){
    if ( e.target.tagName === 'A' || e.target.tagName === 'BUTTON' ) {
      if (e.target.getAttribute('data-gtm') === `${this.state.callToAction} button`) {
        return e.target.getAttribute('href');
      }
      if (e.key === 'Escape') {
        return 'ESC Key pressed'
      }
      if (e.target.getAttribute('data-gtm') === `${this.state.cancel} button`) {
        return `${this.state.cancel} button was pressed`;
      }
      if (e.target.getAttribute('data-gtm') === 'Close Button') {
        return 'Closed button(X) was pressed';
      }
    }
  };

  getEventAction (e) {
    if (e.target.getAttribute('data-gtm') === `${this.state.callToAction} button`) {
      return 'Taken survey'
    }
    return 'Did not take survey';
  }

  gtm(param) {
    return modalGtmObj('Pop-Up Survey', 'Pop-Up Survey', this.getEventAction(param), this.getUrlLabel(param));
  };

  setCookies() {
    const date = new Date();
    date.setMonth(date.getMonth() + 2); // Two Months

    const expiry = `expires=${date.toUTCString()}`;
    document.cookie = `tnaVisited=yes;${expiry};path=/`;
  };

  closeModal(e) {
    const modal = document.getElementById('tnaModal');
    e.preventDefault();
    if (e.target.classList.contains("close")) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      this.setCookies();
    }
  };

  surveyLink() {
    const modal = document.getElementById('tnaModal');
    modal.style.display = 'none';
    modal.setAttribute('aria-hidden', 'true');
    this.setCookies();
  };

  escClose(e, keycode) {
    const modal = document.getElementById('tnaModal');
    if (e.keyCode === keycode) {
      modal.style.display = 'none';
      modal.setAttribute('aria-hidden', 'true');
      this.setCookies();
    }
  };

  focusModal() {
    if (document.cookie.indexOf("tnaVisited=yes") === -1) {
      const modal = document.getElementById('tnaModal');
      const focusableElsString = "a[href], button.closeBtn, button#noThanks";
      const focusableEls = modal.querySelectorAll(focusableElsString);

      const firstItemTab = focusableEls[0];
      const lastItemTab = focusableEls[focusableEls.length - 1];

      firstItemTab.focus();

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
    const modal = document.getElementById('modal');
    modal.addEventListener("keydown", (e) => {
      this.escClose(e, 27); // Escape keycode
      this.escClose(e, 13); // Enter keycode
      if ( e.key === "Enter" ) {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON') {
          window.dataLayer = window.dataLayer || [];
          window.dataLayer.push(this.gtm(e));
        }
      } else if ( e.key === "Escape" ) {
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

  componentWillUnmount() {
    const modal = document.getElementById('modal');
    modal.addEventListener("keydown", (e) => {
      this.escClose(e, 27);
      this.escClose(e, 13);
    }, false);
  }

  render() {
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
              <button className="closeBtn close focus" onClick={this.closeModal}
                      aria-label="Close Dialog" data-gtm="Close Button">&times;</button>
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
                  className="close tna-button focus"
                  data-gtm={`${this.state.callToAction} button`}
                  onClick={this.surveyLink}>
                  {this.state.callToAction}
                </a>
                <button id="noThanks"
                        onClick={this.closeModal}
                        className="close close-button focus"
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
