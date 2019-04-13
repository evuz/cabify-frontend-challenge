import React from 'react';

import Input from './components/Input';
import Button from './components/Button';
import BusinessCard from './components/BusinessCard';

import useInput from './hooks/useInput';

import './styles/App.css';
import Select from './components/Select';

function App() {
  const [fullname, setFullname] = useInput();
  const [jobdescription, setJobdescription] = useInput();
  const [phonenumber, setPhonenumber] = useInput();
  const [email, setEmail] = useInput();
  const [website, setWebsite] = useInput();
  const [address, setAddress] = useInput();

  return (
    <div className="mainWrapper row">
      <article className="col col6">
        <BusinessCard
          userInfo={{
            fullname,
            jobdescription,
            phonenumber,
            email,
            website,
            address,
          }}
        />
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
              <Select label="Prefix" name="prefix" />
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
