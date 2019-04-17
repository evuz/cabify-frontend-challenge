import React from 'react';

function CountryCodeOption({ country }) {
  return (
    <div className="country-code-option">
      <div className="country-code-option-left">
        <i className="country-code-option-flag">
          <img src={`flags/${country.alphaCode}.svg`} alt={country.name} />
        </i>
        <span className="country-code-option-name">
          <span>{country.name}</span>
        </span>
      </div>
      <div className="country-code-option-right">
        <span className="country-code-option-code">+{country.callingCode}</span>
      </div>
    </div>
  );
}

export default CountryCodeOption;
