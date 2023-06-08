import { useState } from "react";

export default function Comparator({ props }) {
  const [data, setData] = useState(props);
  return (
    <>
      <h1>Covid Comparator</h1>
      <select>
        {/* {data.rawData.map((countryData, idx) => (
          <option key={idx}>
            {countryData.Country_Region},{" "}
            {countryData.Province_State || countryData.Country_Region}
          </option>
        ))} */}
      </select>
      {/* <p>Test:{JSON.stringify(data.rawData)}</p> */}
      {/* <p>{JSON.stringify(props.rawData)}</p> */}
    </>
  );
}
