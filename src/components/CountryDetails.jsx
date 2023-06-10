import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import addCommas from "../functions/addCommas";

export default function CountryDetails({ props }) {
  const [countryList, setCountryList] = useState(props);
  const { id } = useParams();
  const idNum = parseInt(id);
  const navigate = useNavigate();

  const handleClick = () => {
    console.log("Click");
    navigate("/comparator");
  };
  // let country;
  // for (let i = 0; i < countryList.length; i++) {
  //   if (countryList[i].id === idNum) {
  //     country = countryList[i];
  //     break;
  //   }
  // }

  return (
    <>
      <br />
      <button onClick={handleClick}>Return</button>
      <h1>ID: {id}</h1>
      <h2>
        Detail for {countryList[id]?.country},{" "}
        {countryList[id]?.countryInfo?.iso3}
      </h2>
      <img
        className="image"
        width="30%"
        src={countryList[id]?.countryInfo?.flag}
      ></img>
      {/* <p>
        Details - {id} Component {JSON.stringify(country)}
      </p> */}
      <p>Population: {addCommas(countryList[id]?.population)}</p>
      <p>Cases: {addCommas(countryList[id]?.cases)}</p>
      <p>Critical: {addCommas(JSON.stringify(countryList[id]?.critical))}</p>
      <p>Deaths: {addCommas(countryList[id]?.deaths)}</p>
      <p>Recovered: {addCommas(countryList[id]?.recovered)}</p>
      <button onClick={handleClick}>Return</button>
      <p>
        Details - {id} Component {JSON.stringify(countryList[id])}
      </p>
    </>
  );
}
