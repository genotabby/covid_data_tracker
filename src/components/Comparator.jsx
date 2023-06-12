import { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";

export default function Comparator({ countryData }) {
  const [data, setData] = useState(countryData);
  const [countryID, setCountryID] = useState(0);
  const [compareCountryID1, setCompareCountryID1] = useState("0");
  const [compareCountryID2, setCompareCountryID2] = useState("0");
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCountryID(event.target.value);
    console.log("handleChange", event.target.value);
  };
  const handleCountry1Change = (event) => {
    setCompareCountryID1(event.target.value);
    console.log("handleChange1", event.target.value);
  };
  const handleCountry2Change = (event) => {
    setCompareCountryID2(event.target.value);
    console.log("handleChange2", event.target.value);
  };

  const handleCompareCountry = (event) => {
    event.preventDefault();
    console.log("country1", compareCountryID1);
    console.log("country2", compareCountryID2);
  };

  const handleGetCountry = (event) => {
    event.preventDefault();
    console.log("handleGetCountry Value", event.target.value);
    console.log("test2", countryID);
    navigate(`/comparator/country/${countryID}`);
  };
  return (
    <>
      <nav>
        <NavLink
          to="/"
          className={
            location.pathname === "/"
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Home
        </NavLink>
        <span className="breadcrumb-arrow">&gt;</span>
        <NavLink
          to="/comparator"
          className={
            location.pathname.startsWith("/comparator")
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Comparator
        </NavLink>
      </nav>

      <a href="#compare_cases">Comparisons</a>
      <h1>Country</h1>
      <form onSubmit={handleGetCountry}>
        {data.length === 0 ? (
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

      <a id="compare_cases" />
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
      <p>Country 1: {data[compareCountryID1]?.country}</p>
      <p>Country 1 ID: {compareCountryID1}</p>
      <p>Country 2: {data[compareCountryID2]?.country}</p>
      <p>Country 2 ID: {compareCountryID2}</p>
      {/* <p>Test:{JSON.stringify(data)}</p> */}
    </>
  );
}
