import React from 'react';

const Country = ({ country }) => {
  return (
    <div className="country">
      <img src={country.flag} alt={`Flag of ${country.name}`} width="50" />
      <p>{country.name}</p>
    </div>
  );
};

export default Country;
