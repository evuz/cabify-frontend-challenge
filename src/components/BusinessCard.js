import React from 'react';
import PropTypes from 'prop-types';

import cabifyLogo from '../images/cabify-logo.svg';

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
        <div className="businessCard-cardBack" />
        <div className="businessCard-cardFront">
          <div>
            <p className="businessCard-cardFront-title">{userInfo.fullname}</p>
            <p className="businessCard-cardFront-subtitle">
              {userInfo.jobdescription}
            </p>
          </div>
          <div className="businessCard-cardFront-bottom">
            <p className="businessCard-icon-phone">{userInfo.phonenumber}</p>
            <p className="businessCard-icon-email">{userInfo.email}</p>
            <p className="businessCard-icon-website">{userInfo.website}</p>
            <p className="businessCard-icon-address">{userInfo.address}</p>
          </div>
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
    email: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.string,
  }),
};

BusinessCard.defaulProps = {
  userInfo: {},
};

export default BusinessCard;
