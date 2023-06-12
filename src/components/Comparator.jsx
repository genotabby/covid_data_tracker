import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Comparator({ props }) {
  const [data, setData] = useState(props);
  const [countryName, setCountryName] = useState(0);
  const [compareCountry1, setCompareCountry1] = useState("0");
  const [compareCountry2, setCompareCountry2] = useState("0");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCountryName(event.target.value);
    console.log("handleChange", event.target.value);
  };
  const handleCountry1Change = (event) => {
    setCompareCountry1(event.target.value);
    console.log("handleChange1", event.target.value);
  };
  const handleCountry2Change = (event) => {
    setCompareCountry2(event.target.value);
    console.log("handleChange2", event.target.value);
  };

  const handleCompareCountry = (event) => {
    event.preventDefault();
    console.log("country1", compareCountry1);
    console.log("country2", compareCountry2);
  };

  const handleGetCountry = (event) => {
    event.preventDefault();
    console.log("handleGetCountry Value", event.target.value);
    console.log("test2", countryName);
    navigate(`/comparator/country/${countryName}`);
  };
  return (
    <>
      <h1>Country</h1>
      <form onSubmit={handleGetCountry}>
        {props.length === 0 ? (
          "Data is loading..."
        ) : (
          <select onChange={handleChange}>
            {data.map((countryData, idx) => (
              <option key={idx} name="countryDropdown" value={idx}>
                {countryData.country}
              </option>
            ))}
          </select>
        )}
        <button>Detailed info</button>
        {/* <Link to={`country/186`}>Test</Link> */}
        <button>Set as Favourite</button>
      </form>

      <fieldset>
        <legend>Compare cases between countries</legend>
        <form onSubmit={handleCompareCountry}>
          <select onChange={handleCountry1Change}>
            {data.map((countryData, idx) => (
              <option key={idx} value={idx}>
                {countryData.country}
                {/* {countryData.Province_State || countryData.Country_Region} */}
              </option>
            ))}
          </select>
          <select onChange={handleCountry2Change}>
            {data.map((countryData, idx) => (
              <option key={idx} value={idx}>
                {countryData.country}
                {/* {countryData.Province_State || countryData.Country_Region} */}
              </option>
            ))}
          </select>
          <button>Compare!</button>
        </form>
      </fieldset>
      <p>Country 1: {compareCountry1}</p>
      <p>Country 2: {compareCountry2}</p>
      {/* <p>Test:{JSON.stringify(data)}</p> */}
    </>
  );
}
