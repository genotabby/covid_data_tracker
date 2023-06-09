import { useState } from "react";

export default function Comparator({ props }) {
  const [data, setData] = useState(props);
  return (
    <>
      <h1>Covid Comparator</h1>
      <form>
        <select>
          {data.map((countryData, idx) => (
            <option key={idx}>
              {countryData.country}
              {/* {countryData.Province_State || countryData.Country_Region} */}
            </option>
          ))}
        </select>
      </form>
      <button>Detailed info</button>
      <fieldset>
        <legend>Comparator</legend>
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
