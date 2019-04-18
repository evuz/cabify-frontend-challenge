import React, { useEffect } from 'react';
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

function Modal({ onClose, showBackdrop, children, className, parentRef }) {
  const classnames = {
    modal: true,
    [className]: !!className,
  };

  useEffect(() => {
    const bodyPosition = document.body.style.position;
    document.body.style.position = 'relative';

    return function() {
      document.body.style.position = bodyPosition;
      if (parentRef) {
        parentRef.current.focus();
      }
    };
  }, []);

  function handleKeyDown(ev) {
    const { key } = ev;
    if (key === 'Escape') {
      onClose();
    } else if (key === 'Tab') {
      if (parentRef) {
        ev.preventDefault();
        onClose();
      }
    }
  }

  return ReactDOM.createPortal(
    <div onKeyDown={handleKeyDown} className={filterClassnames(classnames)}>
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
  parentRef: PropTypes.object,
};

Modal.defaultProps = {
  showBackdrop: false,
  className: null,
  parentRef: null,
};

export default Modal;
