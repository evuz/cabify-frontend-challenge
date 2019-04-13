import React from 'react';

import Input from './components/Input';
import Button from './components/Button';

import useInput from './hooks/useInput';

import cabifyLogo from './images/cabify-logo.svg';
import './styles/App.css';

function App() {
  const [fullname, setFullname] = useInput();
  const [jobdescription, setJobdescription] = useInput();
  const [phonenumber, setPhonenumber] = useInput();
  const [email, setEmail] = useInput();
  const [website, setWebsite] = useInput();
  const [address, setAddress] = useInput();

  return (
    <div className="mainWrapper row">
      <article className="businessCard col col6">
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
              <p className="businessCard-cardFront-title">{fullname}</p>
              <p className="businessCard-cardFront-subtitle">
                {jobdescription}
              </p>
            </div>
            <div className="businessCard-cardFront-bottom">
              <p className="businessCard-icon-phone">{phonenumber}</p>
              <p className="businessCard-icon-email">{email}</p>
              <p className="businessCard-icon-website">{website}</p>
              <p className="businessCard-icon-address">{address}</p>
            </div>
          </div>
        </div>
      </article>
      <article className="builder col col6">
        <form className="form" action="">
          <div className="row">
            <div className="col col12">
              <Input
                label="Full name"
                name="fullname"
                value={fullname}
                onChange={setFullname}
              />
            </div>
          </div>
          <div className="row row-separationMedium">
            <div className="active focus col col12">
              <Input
                label="Job description"
                name="jobdescription"
                value={jobdescription}
                onChange={setJobdescription}
              />
            </div>
          </div>
          <div className="row row-separationMedium row-gutterMedium">
            <div className="col col3">
              {/* select field will be placed here */}
            </div>
            <div className="col col9">
              <Input
                label="Phone number"
                name="phonenumber"
                type="tel"
                value={phonenumber}
                onChange={setPhonenumber}
              />
            </div>
          </div>
          <div className="row row-separationMedium">
            <div className="col col12">
              <Input
                label="Email"
                name="email"
                type="email"
                value={email}
                onChange={setEmail}
              />
            </div>
          </div>
          <div className="row row-separationMedium">
            <div className="active disabled col col12">
              <Input
                label="Website"
                name="website"
                value={website}
                onChange={setWebsite}
              />
            </div>
          </div>
          <div className="row row-separationMedium">
            <div className="col col12">
              <Input
                label="Address"
                name="address"
                value={address}
                onChange={setAddress}
              />
            </div>
          </div>
          <div className="row row-separationHuge">
            <Button type="submit" disabled full>
              Request
            </Button>
            {/* <input
              className="button button-full button-primary disabled"
              type="submit"
              value="Request"
            /> */}
          </div>
        </form>
      </article>
    </div>
  );
}

export default App;
