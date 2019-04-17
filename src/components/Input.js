import React, { useState } from 'react';
import PropTypes from 'prop-types';

import filterClassnames from '../utils/filterClassnames';

function Input({ name, label, placeholder, value, onChange, disabled, type }) {
  const [focus, setFocus] = useState(false);
  const containerClass = {
    focus,
    disabled,
    'formField-input': true,
    active: !!value | focus,
  };

  return (
    <div className={filterClassnames(containerClass)}>
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
  type: PropTypes.oneOf(['text', 'email', 'tel', 'password']),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: null,
  disabled: false,
  type: 'text',
};

export default Input;
