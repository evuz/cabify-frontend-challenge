import React from 'react';
import PropTypes from 'prop-types';

import Modal from './Modal';
import CardFront from './CardFront';
import CardBack from './CardBack';
import Button from './Button';

function CardPreview({ userInfo, onClose }) {
  return (
    <Modal
      onClose={onClose}
      center
      fixed
      showBackdrop
      className="cardPreview-modal"
    >
      <h3 className="cardPreview-info">
        We have a elf working on your business card
      </h3>
      <div className="cardPreview-container">
        <div className="cardPreview-card">
          <div className="cardPreview-inner">
            <div className="cardPreview-front">
              <CardFront userInfo={userInfo} />
            </div>
            <div className="cardPreview-back">
              <CardBack />
            </div>
          </div>
        </div>
      </div>
      <div className="cardPreview-button">
        <Button onClick={onClose}>Accept</Button>
      </div>
    </Modal>
  );
}

CardPreview.propTypes = {
  userInfo: PropTypes.shape({
    fullname: PropTypes.string,
    jobdescription: PropTypes.string,
    phonenumber: PropTypes.string,
    prefix: PropTypes.string,
    email: PropTypes.string,
    website: PropTypes.string,
    address: PropTypes.string,
  }),
  onClose: PropTypes.func.isRequired,
};

CardPreview.defaulProps = {
  userInfo: {},
};

export default CardPreview;
