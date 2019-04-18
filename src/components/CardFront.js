import React from 'react';
import PropTypes from 'prop-types';

function CardFront({ userInfo }) {
  return (
    <div className="businessCard-cardFront">
      <div>
        <p className="businessCard-cardFront-title">{userInfo.fullname}</p>
        <p className="businessCard-cardFront-subtitle">
          {userInfo.jobdescription}
        </p>
      </div>
      <div className="businessCard-cardFront-bottom">
        <p className="businessCard-icon-phone">
          {[userInfo.prefix, userInfo.phonenumber].filter(Boolean).join(' ')}
        </p>
        <p className="businessCard-icon-email">{userInfo.email}</p>
        <p className="businessCard-icon-website">{userInfo.website}</p>
        <p className="businessCard-icon-address">{userInfo.address}</p>
      </div>
    </div>
  );
}

CardFront.propTypes = {
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

CardFront.defaulProps = {
  userInfo: {},
};

export default CardFront;
