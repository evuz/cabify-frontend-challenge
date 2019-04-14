import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import filterClassnames from '../utils/filterClassnames';
import Modal from './Modal';

function Options({ children }) {
  return (
    <div className="select-options">
      <div className="options-content">{children}</div>
    </div>
  );
}

function Select({ children, name, label, value, disabled }) {
  const cmpRef = useRef(null);
  const [focus, setFocus] = useState(false);
  disabled = disabled || !children;

  const containerClass = {
    focus,
    disabled,
    'formField-select': true,
    formField: true,
    active: value,
  };
  return (
    <div ref={cmpRef} className={filterClassnames(containerClass)}>
      <div
        onClick={() => disabled || setFocus(true)}
        role="button"
        className="select"
      >
        <div className="select-value">{value}</div>
        <input type="hidden" value={value} />
        <label htmlFor={name}>{label}</label>
      </div>
      {focus ? (
        <Modal className="formField-select" onClose={() => setFocus(false)}>
          <div
            style={{
              position: 'absolute',
              top: `${cmpRef.current.clientHeight +
                cmpRef.current.offsetTop}px`,
              left: `${cmpRef.current.offsetLeft}px`,
            }}
          >
            <Options>{children}</Options>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

Select.propTypes = {
  children: PropTypes.node,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
  children: null,
};

export default Select;
