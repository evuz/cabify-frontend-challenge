import React, { useState } from 'react';
import PropTypes from 'prop-types';

import filterClassnames from '../utils/filterClassnames';

function Select({ name, label, value, disabled }) {
  const [focus, setFocus] = useState(false);
  const containerClass = {
    focus,
    disabled,
    'formField-select': true,
    formField: true,
    active: value,
  };
  return (
    <div className={filterClassnames(containerClass)}>
      <div
        onClick={() => disabled || setFocus(true)}
        role="listbox"
        className="select"
      >
        <div className="select-value">{value}</div>
        <label htmlFor={name}>{label}</label>
      </div>
    </div>
  );
}

Select.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  disabled: PropTypes.bool,
};

Select.defaultProps = {
  disabled: false,
};

export default Select;
