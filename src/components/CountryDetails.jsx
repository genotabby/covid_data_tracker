import { useState } from "react";
import { NavLink, useNavigate, useParams } from "react-router-dom";
import addCommas from "../functions/addCommas";
import GoogleMapReact from "google-map-react";

export default function CountryDetails({ props }) {
  const [countryList, setCountryList] = useState(props);
  const { id } = useParams();
  // const idNum = parseInt(id);
  const navigate = useNavigate();
  const AnyReactComponent = ({ text }) => (
    <div
      style={{
        color: "white",
        background: "grey",
        padding: "15px 10px",
        display: "inline-flex",
        textAlign: "center",
        alignItems: "center",
        justifyContent: "center",
        borderRadius: "100%",
        transform: "translate(-50%, -50%)",
      }}
    >
      {text}
    </div>
  );

  const defaultProps = {
    center: {
      lat: countryList[id]?.countryInfo?.lat,
      lng: countryList[id]?.countryInfo?.long,
    },
    zoom: 11,
  };

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
            // location.pathname.startsWith("/comparator")
            location.pathname === "/comparator"
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Comparator
        </NavLink>
        <span className="breadcrumb-arrow">&gt;</span>
        <NavLink
          to="/comparator/country/0"
          className={
            location.pathname === `/comparator/country/${id}`
              ? "breadcrumb-active"
              : "breadcrumb-not-active"
          }
        >
          Country
        </NavLink>
      </nav>
      {/* Main fn here */}
      <br />
      <button onClick={handleClick}>Return</button>
      {/* <h1>ID: {id}</h1> */}
      <h2>
        Detail for {countryList[id]?.country},{" "}
        {countryList[id]?.countryInfo?.iso3}
      </h2>
      <h3>
        Coordinates: <br />
        Latitude: {countryList[id]?.countryInfo?.lat} Longitude:{" "}
        {countryList[id]?.countryInfo?.long}
      </h3>
      <img
        className="image"
        width="30%"
        src={countryList[id]?.countryInfo?.flag}
      ></img>
      {/* <p>
        Details - {id} Component {JSON.stringify(country)}
      </p> */}
      <p>Population: {addCommas(countryList[id]?.population)}</p>
      <p>Tests done: {addCommas(countryList[id]?.tests)}</p>
      <p>Cases: {addCommas(countryList[id]?.cases)}</p>
      <p>Critical: {addCommas(JSON.stringify(countryList[id]?.critical))}</p>
      <p>Deaths: {addCommas(countryList[id]?.deaths)}</p>
      <p>Recovered: {addCommas(countryList[id]?.recovered)}</p>
      <p>Cases per Million: {addCommas(countryList[id]?.casesPerOneMillion)}</p>
      <p>
        Critical per Million:{" "}
        {addCommas(countryList[id]?.criticalPerOneMillion)}
      </p>
      <p>
        Deaths per Million: {addCommas(countryList[id]?.deathsPerOneMillion)}
      </p>
      <p>
        Recovered per Million:{" "}
        {addCommas(countryList[id]?.recoveredPerOneMillion)}
      </p>
      <p>{/* Details - {id} Component {JSON.stringify(countryList[id])} */}</p>
      <div style={{ height: "100vh", width: "100%" }}>
        <GoogleMapReact
          // bootstrapURLKeys={{ key: "" }}
          defaultCenter={defaultProps.center}
          defaultZoom={defaultProps.zoom}
        >
          {/* <AnyReactComponent
            lat={countryList[id]?.countryInfo?.lat}
            lng={countryList[id]?.countryInfo?.long}
            // text={countryList[id]?.country}
          /> */}
        </GoogleMapReact>
        <br />
        <button onClick={handleClick}>Return</button>
      </div>
    </>
  );
}
