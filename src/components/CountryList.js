import React from 'react';
import Country from './Country';

const CountryList = ({ countries }) => {
  return (
    <div className="country-list">
      {countries.map((country ,idx) => (
        <Country key={idx} country={country} />
      ))}
    </div>
  );
};

export default CountryList;
