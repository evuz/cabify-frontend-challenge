import React, { useRef, useState } from 'react';
import PropTypes from 'prop-types';

import filterClassnames from '../utils/filterClassnames';
import Modal from './Modal';
import Option from './Option';
import useSelectOpen from '../hooks/useSelectOpen';

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
  const isDisabled = disabled || !children;
  const cmpRef = useRef(null);
  const [focus, setFocus] = useState(false);
  const { open, handleBlur, handleFocus, handleKeyDown } = useSelectOpen(
    isDisabled,
  );

  const containerClass = {
    focus: focus || open,
    open,
    disabled: isDisabled,
    'formField-select': true,
    formField: true,
    active: value,
  };

  const tabIndex = isDisabled ? null : 0;
  return (
    <div
      ref={cmpRef}
      role="button"
      className={filterClassnames(containerClass)}
    >
      <div
        className="select"
        tabIndex={tabIndex}
        onBlur={ev => {
          setFocus(false);
          handleBlur(ev);
        }}
        onFocus={() => setFocus(true)}
        onKeyDown={handleKeyDown}
        onClick={handleFocus}
      >
        <div className="select-value">{value}</div>
        <input type="hidden" value={value} />
        <label htmlFor={name}>{label}</label>
      </div>
      {open ? (
        <Modal className="formField-select" onClose={handleBlur}>
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
                console.log('SELECT');
                handleFocus(false);
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
