import React, { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import filterClassnames from '../utils/filterClassnames';
import Modal from './Modal';
import Option from './Option';

function Options({ children, onChange, selected }) {
  const emptyOption = (
    <Option key="empty" value="">
      Empty
    </Option>
  );

  const options = [emptyOption, ...children].map(el => {
    function select(...args) {
      if (typeof el.props.onClick === 'function') {
        el.props.onClick(...args);
      }
      onChange(...args);
    }
    return React.cloneElement(el, {
      onClick: select,
      selected: el.props.value === selected,
    });
  });

  return (
    <div className="select-options">
      <div className="options-content" role="listbox">
        {options}
      </div>
    </div>
  );
}

function Select({ children, name, label, value, disabled, onChange }) {
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
            <Options
              selected={value}
              onChange={(...args) => {
                setFocus(false);
                onChange(...args);
              }}
            >
              {children}
            </Options>
          </div>
        </Modal>
      ) : null}
    </div>
  );
}

Select.propTypes = {
  children: PropTypes.node,
  value: PropTypes.string,
  onChange: PropTypes.func,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
  children: null,
  onChange: function() {},
  value: '',
};

export default Select;
