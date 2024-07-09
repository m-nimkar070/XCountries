import React, { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import "./App.css";

const URL = "https://xcountries-backend.azurewebsites.net/all";

function App() {
  const [countries, setCountries] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  const fetchData = async () => {
    try {
      const res = await fetch(URL);
      const data = await res.json();
      setCountries(data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <>
        <h1>Country Search</h1>
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={handleSearch}
        />
      <div className="App">
        <CountryList countries={filteredCountries} />
      </div>
    </>
  );
}

export default App;
