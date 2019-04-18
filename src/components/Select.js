import React, { useRef, useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import filterClassnames from '../utils/filterClassnames';
import Modal from './Modal';
import Option from './Option';
import useSelectOpen from '../hooks/useSelectOpen';

function Options({ children, onChange, selected, onBlur }) {
  const listRef = useRef(null);
  const [elementFocused, setElementFocused] = useState();

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

  useEffect(() => {
    const focused = options.findIndex(child => child.props.selected);
    listRef.current.children[focused].focus();
    setElementFocused(focused);
  }, []);

  function handleKeyDown(ev) {
    const key = ev.key;

    if (key === 'ArrowDown') {
      if (elementFocused < options.length - 1) {
        const focused = elementFocused + 1;
        listRef.current.children[focused].focus();
        setElementFocused(focused);
      }
    } else if (key === 'ArrowUp') {
      if (elementFocused !== 0) {
        const focused = elementFocused - 1;
        listRef.current.children[focused].focus();
        setElementFocused(focused);
      }
    } else if (key === 'Enter') {
      const el = options[elementFocused];
      el.props.onClick(el.props.value);
    }
  }

  return (
    <div tabIndex="-1" role="document" className="select-options">
      <ul
        ref={listRef}
        onBlur={onBlur}
        onKeyDown={handleKeyDown}
        className="options-content"
        role="listbox"
      >
        {options}
      </ul>
    </div>
  );
}

function Select({ children, name, label, value, disabled, onChange }) {
  const isDisabled = disabled || !children;
  const cmpRef = useRef(null);
  const selectRef = useRef(null);
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
        ref={selectRef}
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
        <Modal
          parentRef={selectRef}
          className="formField-select"
          onClose={handleBlur}
        >
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
                onChange(...args);
                handleFocus(false);
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
