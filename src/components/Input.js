import React, { useState } from 'react';
import PropTypes from 'prop-types';

import useInputTouch from '../hooks/useInputTouch';
import filterClassnames from '../utils/filterClassnames';

function Input({
  name,
  label,
  placeholder,
  value,
  onChange,
  disabled,
  type,
  validation,
}) {
  const [focus, setFocus] = useState(false);
  const isTouch = useInputTouch(value);
  const showError = !focus && isTouch && !validation.isValid;
  const containerClass = {
    focus,
    disabled,
    error: showError,
    'formField-input': true,
    active: !!value | focus,
  };
  let error;
  if (showError) {
    const errorKey = Object.keys(validation.errors)[0];
    error = validation.errors[errorKey];
  }

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
      {showError ? <span className="error-message">{error}</span> : null}
    </div>
  );
}

Input.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  type: PropTypes.oneOf(['text', 'email', 'tel', 'password']),
  placeholder: PropTypes.string,
  disabled: PropTypes.bool,
  validation: PropTypes.shape({
    isValid: PropTypes.bool,
    errors: PropTypes.any,
  }),
  onChange: PropTypes.func.isRequired,
};

Input.defaultProps = {
  placeholder: null,
  disabled: false,
  type: 'text',
  validation: { isValid: true, errors: {} },
};

export default Input;
