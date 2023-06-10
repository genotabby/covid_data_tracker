import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function Comparator({ props }) {
  const [data, setData] = useState(props);
  const [countryName, setCountryName] = useState(0);
  const navigate = useNavigate();

  const handleChange = (event) => {
    setCountryName(event.target.value);
  };

  const handleGetCountry = (event) => {
    event.preventDefault();
    console.log("test", event.target.value);
    console.log("test2", countryName);
    navigate(`/comparator/country/${countryName}`);
  };
  return (
    <>
      <h1>Covid Comparator</h1>
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
        <select>
          {data.map((countryData, idx) => (
            <option key={idx}>
              {countryData.country}
              {/* {countryData.Province_State || countryData.Country_Region} */}
            </option>
          ))}
        </select>
        <select>
          {data.map((countryData, idx) => (
            <option key={idx}>
              {countryData.country}
              {/* {countryData.Province_State || countryData.Country_Region} */}
            </option>
          ))}
        </select>
        <button>Compare!</button>
      </fieldset>
      <p>Test:{JSON.stringify(data)}</p>
    </>
  );
}
