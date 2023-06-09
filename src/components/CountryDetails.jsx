import { useState } from "react";
import { Link, useParams } from "react-router-dom";
import addCommas from "../functions/addCommas";

export default function CountryDetails({ props }) {
  const [countryList, setCountryList] = useState(props);
  const { id } = useParams();
  const idNum = parseInt(id);

  // let country;
  // for (let i = 0; i < countryList.length; i++) {
  //   if (countryList[i].id === idNum) {
  //     country = countryList[i];
  //     break;
  //   }
  // }

  return (
    <>
      <h1>ID: {id}</h1>
      <h2>Detail for {countryList[id]?.countryInfo?.iso3}</h2>
      {/* <p>
        Details - {id} Component {JSON.stringify(country)}
      </p> */}
      <p>
        Details - {id} Component {JSON.stringify(countryList[id])}
      </p>
      <p>{JSON.stringify(countryList[id]?.countryInfo?.iso3)}</p>
      <p>Population: {addCommas(countryList[id]?.population)}</p>
      <p>Cases: {addCommas(countryList[id]?.cases)}</p>
      <p>Deaths: {addCommas(countryList[id]?.deaths)}</p>
      <p>Recovered: {addCommas(countryList[id]?.recovered)}</p>
      <button>
        <Link to="/Comparator">Return</Link>
      </button>
    </>
  );
}
