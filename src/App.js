import React, { useEffect, useState } from "react";
import CountryList from "./components/CountryList";
import "./App.css";

const URL = "https://xcountries-backend.azurewebsites.net/all";


function App() {
  const [countries, setCountries] = useState([]);
  const [filteredCountry , setFilteredCountry] = useState([]);
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


  useEffect(()=>{
    performSearch();
  },[searchTerm]);

  const handleSearch = (e) => {
    setSearchTerm(e.target.value);
  };

  const performSearch = () =>{
    const filteredCountries = countries.filter((country) =>
      country.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    setFilteredCountry(filteredCountries);
  }

  return (
    <>
      <div className="App">
        <input
          type="text"
          placeholder="Search for a country..."
          value={searchTerm}
          onChange={(e)=>handleSearch(e)}
        />
        {!(searchTerm === "") ? 
        <CountryList countries={filteredCountry} /> 
        : <CountryList countries={countries} />}
        
      </div>
    </>
  );
}

export default App;
