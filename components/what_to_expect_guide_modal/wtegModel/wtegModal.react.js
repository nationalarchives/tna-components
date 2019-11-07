import React, { Component } from 'react';
import ModalHeader from '../child_component/modalHeader/modal_header.react';
import ModalImage from '../child_component/modalImage/modal_image.react';
import ModalFooter from '../child_component/modalFooter/modal_footer.react';
import ModalContent from '../child_component/modalContent/modal_content.react';
import ModalWrapper from '../child_component/modalWrapper/modal_wrapper.react';

import Data from './wtegState.react';

import '../../modal/modal.scss';

class WTEGModal extends Component {
  state = {
    Data,
    showModal: false
  };

  thumbnailRef = React.createRef();

  pushInDataLayer = obj => {
    let wd = window.dataLayer || [];
    !!obj || typeof obj === 'object' ? wd.push(obj) : '';

    return obj;
  };

  focusModal = () => {
    if (document.getElementById('tnaModalComponent')) {
      const modal = document.getElementById('tnaModalComponent');
      const focusableElsString = 'figure.trap, button.trap';
      const focusableEls = modal.querySelectorAll(focusableElsString);

      const firstItemTab = focusableEls[0];
      const lastItemTab = focusableEls[focusableEls.length - 1];

      modal.addEventListener('keydown', e => {
        if (e.keyCode === 9) {
          // Tab keycode
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

  toggleShowModal = () => {
    const { showModal } = this.state;
    this.setState({ showModal: !showModal });
    if (this.thumbnailRef) {
      this.thumbnailRef.current.focus();
    }
  };

  handleModalClick = e => {
    const { pushInDataLayer, toggleShowModal } = this;
    const { clicksAway } = this.state.Data.gtm;
    if (e.target.getAttribute('class') === 'modal fadeIn') {
      toggleShowModal();
      pushInDataLayer(clicksAway);
    }
  };

  handleKeyPress = () => {
    this.toggleShowModal();
  };

  enterKeyPress = e => {
    if (e.charCode === 13 || e.key === 'Enter' || e.which === 13) {
      e.preventDefault();
      this.toggleShowModal();
    }
  };

  componentDidMount() {
    const { toggleShowModal, focusModal, pushInDataLayer } = this;
    const { escKey } = this.state.Data.gtm;
    window.addEventListener(
      'keyup',
      e => {
        focusModal();
        if (this.state.showModal === true) {
          if (
            e.key === 'Escape' ||
            e.charCode === 27 ||
            e.which === 27 ||
            e.key === 'Esc'
          ) {
            e.preventDefault();
            toggleShowModal();
            pushInDataLayer(escKey);
          }
        }
      },
      false
    );
  }

  componentWillUnmount() {
    if (this.state.showModal === false) {
      window.removeEventListener('keyup', focusModal, false);
    }
  }

  render() {
    const {
      toggleShowModal,
      handleModalClick,
      thumbnailRef,
      pushInDataLayer,
      enterKeyPress
    } = this;
    const { closeWindow } = this.state.Data.gtm;
    const { showModal } = this.state;
    const { style, figureCaption } = this.state.Data;
    const { src, alt, className, imgDsc } = this.props;

    return (
      <>
        <div onClick={toggleShowModal} onKeyPress={enterKeyPress}>
          <img
            style={style.img}
            src={src}
            alt={alt}
            className={className}
            role="button"
            tabIndex="0"
            ref={thumbnailRef}
          />
          <span style={style.span}>{imgDsc}</span>
        </div>

        {showModal && (
          <ModalWrapper
            id="tnaModalComponent"
            role="dialog"
            ariaModal="true"
            className="modal fadeIn"
            onClick={handleModalClick}>
            <ModalHeader
              ariaLabel={`close ${figureCaption.toLowerCase()}`}
              className="trap close"
              autoFocus="autofocus"
              onClick={() => {
                toggleShowModal();
                pushInDataLayer(closeWindow);
              }}
              onKeyPress={e => {
                if (e.charCode === 13 || e.key === 'Enter' || e.which === 13) {
                  toggleShowModal();
                  pushInDataLayer(closeWindow);
                }
              }}
            />
            <ModalContent>
              <ModalImage src={src} alt={alt} figureCaption={figureCaption} />
            </ModalContent>
            <ModalFooter />
          </ModalWrapper>
        )}
      </>
    );
  }
}

export default WTEGModal;
