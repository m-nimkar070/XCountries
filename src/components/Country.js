import React from 'react';

const Country = ({ country}) => {
  // console.log("country " , country)
  return (
    <div className="countryCard card">
      <img src={country.flags.png} alt={country.flag} width={"50px"}/>
      <p>{country.name.common}</p>
    </div>
  );
};

export default Country;
