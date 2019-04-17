import React, { useState } from 'react';

import Input from './components/Input';
import Button from './components/Button';
import BusinessCard from './components/BusinessCard';
import Select from './components/Select';
import Option from './components/Option';

import useInput from './hooks/useInput';

import cabifyCountries from './utils/cabifyCountries';
import validators from './utils/validators';

import './styles/App.css';
import CountryCodeOption from './components/CountryCodeOption';

function App() {
  const fullname = useInput('', [validators.required]);
  const jobdescription = useInput('', [validators.required]);
  const phonenumber = useInput('', [
    validators.required,
    validators.phoneNumber,
  ]);
  const email = useInput('', [validators.required, validators.email]);
  const website = useInput('', [validators.required]);
  const address = useInput('', [validators.required]);
  const [prefix, setPrefix] = useState();

  const validForm = ![
    fullname.validation.isValid,
    jobdescription.validation.isValid,
    phonenumber.validation.isValid,
    email.validation.isValid,
    website.validation.isValid,
    address.validation.isValid,
  ].filter(v => !Boolean(v)).length;

  return (
    <div className="mainWrapper row">
      <article className="col col6">
        <BusinessCard
          userInfo={{
            prefix,
            fullname: fullname.value,
            jobdescription: jobdescription.value,
            phonenumber: phonenumber.value,
            email: email.value,
            website: website.value,
            address: address.value,
          }}
        />
      </article>
      <article className="builder col col6">
        <form className="form" action="">
          <div className="row">
            <div className="col col12">
              <Input label="Full name" name="fullname" {...fullname} />
            </div>
          </div>
          <div className="row row-separationMedium">
            <div className="active focus col col12">
              <Input
                label="Job description"
                name="jobdescription"
                {...jobdescription}
              />
            </div>
          </div>
          <div className="row row-separationMedium row-gutterMedium">
            <div className="col col3">
              <Select
                value={prefix}
                onChange={setPrefix}
                label="Prefix"
                name="prefix"
              >
                {cabifyCountries.map(country => (
                  <Option
                    value={`+${country.callingCode}`}
                    key={country.callingCode}
                  >
                    <CountryCodeOption country={country} />
                  </Option>
                ))}
              </Select>
            </div>
            <div className="col col9">
              <Input
                label="Phone number"
                name="phonenumber"
                type="tel"
                {...phonenumber}
              />
            </div>
          </div>
          <div className="row row-separationMedium">
            <div className="col col12">
              <Input label="Email" name="email" type="email" {...email} />
            </div>
          </div>
          <div className="row row-separationMedium">
            <div className="active disabled col col12">
              <Input label="Website" name="website" {...website} />
            </div>
          </div>
          <div className="row row-separationMedium">
            <div className="col col12">
              <Input label="Address" name="address" {...address} />
            </div>
          </div>
          <div className="row row-separationHuge">
            <Button type="submit" disabled={!validForm} full>
              Request
            </Button>
          </div>
        </form>
      </article>
    </div>
  );
}

export default App;
