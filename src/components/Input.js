import React, { useState } from 'react';
import PropTypes from 'prop-types';

function Input({ name, label, placeholder, value, onChange, disabled, type }) {
  const [focus, setFocus] = useState(false);
  const classNames = {
    focus,
    disabled,
    'formField-input': true,
    active: !!value | focus,
  };
  const renderClass = Object.keys(classNames)
    .filter(key => classNames[key])
    .join(' ');
  return (
    <div className={renderClass}>
      <div className="input">
        <input
          type={type}
          placeholder={placeholder}
          name={name}
          value={value}
          onChange={onChange}
          disabled={disabled}
          onFocus={() => setFocus(true)}
          onBlur={() => setFocus(false)}
        />
        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  // USE ONE OF
  type: PropTypes.string,
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  value: PropTypes.string,
  onChange: PropTypes.func,
};

Input.defaultProps = {
  placeholder: null,
  disabled: false,
  value: undefined,
  type: 'text',
  onChange: function() {},
};

export default Input;
