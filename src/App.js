// import React, { useEffect, useState } from "react";
// import CountryList from "./components/CountryList";
// import "./App.css";

// const URL = "https://restcountries.com/v3.1/all";

// function App() {
//   const [countries, setCountries] = useState([]);
//   const [filteredCountry, setFilteredCountry] = useState([]);
//   const [searchTerm, setSearchTerm] = useState("");

//   const fetchData = async () => {
//     try {
//       const res = await fetch(URL);
//       const data = await res.json();
//       setCountries(data);
//     } catch (error) {
//       console.error(error);
//     }
//   };

//   useEffect(() => {
//     fetchData();
//   }, []);

//   useEffect(() => {
//     performSearch();
//   }, [searchTerm]);

//   const handleSearch = (e) => {
//     setSearchTerm(e.target.value);
//   };

//   const performSearch = () => {
//     const filteredCountries = countries.filter((country) =>
//       country.name.common.toLowerCase().includes(searchTerm.toLowerCase())
//     );

//     setFilteredCountry(filteredCountries);
//   };

//   return (
//     <>
//       <div>
//         <div style={{textAlign:"center", margin:"5px", padding:"5px"}}>
//           <input
//             type="text"
//             placeholder="Search for a country..."
//             value={searchTerm}
//             onChange={(e) => handleSearch(e)}
//           />
//         </div>
//         <div className="App">
//           {!(searchTerm === "") ? (
//             <CountryList countries={filteredCountry} />
//           ) : (
//             <CountryList countries={countries} />
//           )}
//         </div>
//       </div>
//     </>
//   );
// }

// export default App;


import "./App.css";
import { useEffect, useState } from "react";

function App() {
  const [countries, setCountries] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [search, setSearch] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const resp = await fetch("https://restcountries.com/v3.1/all");
        const data = await resp.json();
        setCountries(data);
      } catch (err) {
        console.log(err);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const data = countries.filter((country) =>
      country.name.common.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(data);
  }, [search]);

  console.log(countries);
  return (
    <div>
      <div className="inp">
        <input
          type="text"
          placeholder="Enter a country"
          onChange={(e) => handleChange(e)}
        />
      </div>
      <div className="App">
        {search === ""
          ? countries.map((country) => {
              return (
                <div className="countryCard">
                  <img src={country.flags.png} alt={country.flag}></img>
                  <p>{country.name.common}</p>
                </div>
              );
            })
          : filtered.map((country) => {
              return (
                <div className="countryCard">
                  <img src={country.flags.png} alt={country.flag}></img>
                  <p>{country.name.common}</p>
                </div>
              );
            })}
      </div>
    </div>
  );
}

export default App;