import React from 'react';
import PropTypes from 'prop-types';
import filterClassnames from '../utils/filterClassnames';

function Button({ children, type, full, disabled, color, onClick }) {
  const colorClass = `button-${color}`;
  const classnames = {
    button: true,
    [colorClass]: true,
    'button-full': full,
  };

  return (
    <button
      className={filterClassnames(classnames)}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </button>
  );
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  full: PropTypes.bool,
  color: PropTypes.oneOf(['primary']),
  type: PropTypes.oneOf(['button', 'submit', 'reset']),
  onClick: PropTypes.func,
};

Button.defaultProps = {
  full: false,
  color: 'primary',
  type: 'button',
  onClick: function() {},
};

export default Button;
