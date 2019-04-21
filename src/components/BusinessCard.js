import React from 'react';
import PropTypes from 'prop-types';

import cabifyLogo from '../images/cabify-logo.svg';
import CardBack from './CardBack';
import CardFront from './CardFront';

function BusinessCard({ userInfo }) {
  return (
    <div className="businessCard">
      <figure className="businessCard-badge">
        <a className="businessCard-badge-logo" href="http://www.cabify.com">
          <img src={cabifyLogo} alt="Cabify" />
        </a>
      </figure>
      <h1 className="title-main">Request your business card</h1>
      <div className="businessCard-cards">
        <div className="businessCard-cardBack-container">
          <CardBack />
        </div>
        <div className="businessCard-cardFront-container">
          <CardFront userInfo={userInfo} />
        </div>
      </div>
    </div>
  );
}

BusinessCard.propTypes = {
  userInfo: PropTypes.shape({
    fullname: PropTypes.string,
    jobdescription: PropTypes.string,
    phonenumber: PropTypes.string,
    prefix: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.string,
  }),
};

BusinessCard.defaulProps = {
  userInfo: {},
};

export default BusinessCard;
