import React, { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import "./App.css";

const URL = "https://restcountries.com/v3.1/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountry, setFilteredCountry] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    performSearch();
  }, [searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const performSearch = () => {
    const filteredCountries = countries.filter((country) =>
      country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCountry(filteredCountries);
  };

  return (
    <>
      <div>
        <div style={{textAlign:"center", margin:"5px", padding:"5px"}}>
          <input
            type="text"
            placeholder="Search for a country..."
            value={searchTerm}
            onChange={(e) => handleSearch(e)}
          />
        </div>
        <div className="App">
          {!(searchTerm === "") ? (
            <CountryList countries={filteredCountry} />
          ) : (
            <CountryList countries={countries} />
          )}
        </div>
      </div>
    </>
  );
}

export default App;
