import { useState } from "react";

export default function Comparator({ props }) {
  const [data, setData] = useState(props);
  return (
    <>
      <h1>Covid Comparator</h1>
      <select>
        {data.map((countryData, idx) => (
          <option key={idx}>
            {countryData.country}
            {/* {countryData.Province_State || countryData.Country_Region} */}
          </option>
        ))}
      </select>
      <button>Detailed info</button>
      <p>Test:{JSON.stringify(data)}</p>
    </>
  );
}
