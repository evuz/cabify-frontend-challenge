import React from 'react';
import PropTypes from 'prop-types';
import filterClassnames from '../utils/filterClassnames';

function Option({ children, onClick, value, selected }) {
  const classnames = {
    'select-option': true,
    selected,
  };
  return (
    <li
      role="option"
      tabIndex={selected ? 0 : -1}
      aria-selected={selected}
      className={filterClassnames(classnames)}
      onClick={() => onClick(value)}
    >
      {children}
    </li>
  );
}

Option.propTypes = {
  children: PropTypes.node.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func,
};

Option.defaultProps = {
  onClick: function() {},
};

export default Option;
