import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import filterClassnames from '../utils/filterClassnames';

function Backdrop({ onClick, show }) {
  const classnames = {
    'modal-backdrop': true,
    show,
  };
  return <div className={filterClassnames(classnames)} onClick={onClick} />;
}

function Modal({ onClose, showBackdrop, children }) {
  return ReactDOM.createPortal(
    <div className="modal">
      <Backdrop onClick={onClose} show={showBackdrop} />
      <div className="modal-content">{children}</div>
    </div>,
    document.body,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  showBackdrop: PropTypes.bool,
};

Modal.defaultProps = {
  showBackdrop: false,
};

export default Modal;
