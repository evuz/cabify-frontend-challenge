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

function Modal({ onClose, showBackdrop, children, className }) {
  const classnames = {
    modal: true,
    [className]: !!className,
  };
  return ReactDOM.createPortal(
    <div className={filterClassnames(classnames)}>
      <Backdrop onClick={onClose} show={showBackdrop} />
      <div className="modal-content">{children}</div>
    </div>,
    document.body,
  );
}

Modal.propTypes = {
  onClose: PropTypes.func.isRequired,
  children: PropTypes.node.isRequired,
  className: PropTypes.string,
  showBackdrop: PropTypes.bool,
};

Modal.defaultProps = {
  showBackdrop: false,
  className: null,
};

export default Modal;
