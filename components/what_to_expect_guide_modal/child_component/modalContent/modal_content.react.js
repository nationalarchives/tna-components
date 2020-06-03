import React, {Component} from 'react';
import PropTypes from 'prop-types';

class ModalContent extends Component {
  componentDidMount() {
    document.body.classList.add('modal_open');
  }
  componentWillUnmount() {
    document.body.classList.remove('modal_open');
  }
  render() {
    const {children, modalContentClass, modalBodyClass} = this.props;
    return (
      <div className={modalContentClass}>
        <div className={modalBodyClass}>{children}</div>
      </div>
    );
  }
}

ModalContent.defaultProps = {
  modalContentClass: 'modal-content',
  modalBodyClass: 'modal-body'
};

ModalContent.propTypes = {
  children: PropTypes.node.isRequired,
  modalContentClass: PropTypes.string,
  modalBodyClass: PropTypes.string
};

export default ModalContent;
