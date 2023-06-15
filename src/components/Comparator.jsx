import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import addCommas from "../functions/addCommas";
import continent from "../Data/continentList";

export default function Comparator({ countryData }) {
  const [data, setData] = useState(countryData);
  const [login, setLogin] = useState("");
  const [APIKey, setAPIKey] = useState("");
  const [forDetailedCountryID, setForDetailedCountryID] = useState("SELECT");
  //   const [countryID, setCountryID] = useState("SELECT");
  const [continentID, setContinentID] = useState("");
  const [compareCountryID1, setCompareCountryID1] = useState("0");
  const [compareCountryID2, setCompareCountryID2] = useState("0");
  const [favCountries, setFavCountries] = useState({});
  const navigate = useNavigate();
  //   const handleChange = (event) => {
  //     setCountryID(event.target.value);
  //     console.log("handleChange", event.target.value);
  //   };

  const handleChange = (event) => {
    setLogin(event.target.value);
    // setAPIKey(event.target.value);
    // This works but is probably wrong because this is updating the state once then twice later
    setAPIKey(event.target.value);
    console.log("changeApikey", APIKey);
    console.log("handleChange", event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // somehow setAPIKey is not putting login value on 1st try
    // Clicking the button is 1 updated APIKey value behind
    console.log("loginBefore", login);
    console.log("APIKEYBefore", APIKey);
    // setAPIKey(login);
    console.log("loginAfter", login);
    console.log("APIKEYAfter", APIKey);
    console.log("LoginClicked!");

    async function fetchFavourites() {
      await timeout(500);
      // try {
      const response = await fetch(
        `https://api.airtable.com/v0/appPxDTuHp9EnOa32/covid_fav_table/`,
        {
          headers: {
            Authorization: `Bearer ${APIKey}`,
          },
        }
      );

      // } catch (error) {
      //   console.log("error!");
      // }
      const jsonData = await response.json();
      setFavCountries(jsonData);
    }
    fetchFavourites();
  };

  const handleDetailedCountryChange = (event) => {
    setForDetailedCountryID(event.target.value);
    console.log("handleFavouriteChange", event.target.value);
  };
  const handleContinentChange = (event) => {
    setContinentID(event.target.value);
    console.log("handleContChange:", event.target.value);
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
    console.log("test2", forDetailedCountryID);
    if (forDetailedCountryID === "SELECT") {
      console.log("No Country Selected!");
      return;
    }
    navigate(`/comparator/country/${forDetailedCountryID}`);
  };

  async function handleDelete(id) {
    console.log("DELETE!", id);
    const response = await fetch(
      `https://api.airtable.com/v0/appPxDTuHp9EnOa32/covid_fav_table/${id}`,
      {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${APIKey}`,
        },
      }
    );
    await response.json();

    async function fetchFavourites() {
      await timeout(500);
      const response = await fetch(
        `https://api.airtable.com/v0/appPxDTuHp9EnOa32/covid_fav_table/`,
        {
          headers: {
            Authorization: `Bearer ${APIKey}`,
          },
        }
      );
      const jsonData = await response.json();
      setFavCountries(jsonData);
    }
    fetchFavourites();
  }

  // For api to wait before GET
  function timeout(delay) {
    return new Promise((res) => setTimeout(res, delay));
  }

  function matchID(fetchedCountryData) {
    let country_value = 0;
    for (let i = 0; i < data.length; i++) {
      if (fetchedCountryData?.fields?.ID === data[i]?.countryInfo?._id) {
        // console.log("data_id", data[i].countryInfo._id);
        // console.log("data_value", data[i]);
        country_value = data[i];
      }
    }
    return (
      <>
        <td>
          <img
            className="image"
            width="30%"
            src={country_value?.countryInfo?.flag}
          ></img>{" "}
          {country_value?.country}
        </td>
        <td>{addCommas(country_value?.cases)}</td>
        <td>{addCommas(country_value?.deaths)}</td>
        <td>{addCommas(country_value?.active)}</td>
        <td>{addCommas(country_value?.casesPerOneMillion)}</td>
        <td>{addCommas(country_value?.deathsPerOneMillion)}</td>
        <td>{addCommas(country_value?.population)}</td>
        <td>
          <button onClick={() => handleDelete(fetchedCountryData?.id)}>
            🗑️
          </button>
        </td>
      </>
    );
  }

  //   useEffect(() => {
  //     async function fetchFavourites() {
  //       const response = await fetch(
  //         `https://api.airtable.com/v0/appPxDTuHp9EnOa32/covid_fav_table/`,
  //         {
  //           headers: {
  //             Authorization: `Bearer ${APIKey}`,
  //           },
  //         }
  //       );
  //       const jsonData = await response.json();
  //       setFavCountries(jsonData);
  //     }
  //     fetchFavourites();
  //   }, []);

  const handleFav = (event) => {
    event.preventDefault();
    // console.log("Set as Favourite", data[countryID]);
    // console.log("countryID", countryID);
    // console.log("countryID", countryID);
    console.log("countryID", forDetailedCountryID);
    if (forDetailedCountryID === "SELECT") {
      console.log("No Country Selected!");
      return;
    }
    async function AddFavourite() {
      const response = await fetch(
        `https://api.airtable.com/v0/appPxDTuHp9EnOa32/covid_fav_table/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${APIKey}`,
          },
          //   body: `{"records":[{"fields":{"country":"${data[countryID].country}","ID":${countryID}}}]}`,
          body: `{"records":[{"fields":{"ID":${forDetailedCountryID}}}]}`,
        }
      );
      await response.json();
    }
    AddFavourite();
    async function fetchFavourites() {
      await timeout(500);
      const response = await fetch(
        `https://api.airtable.com/v0/appPxDTuHp9EnOa32/covid_fav_table/`,
        {
          headers: {
            Authorization: `Bearer ${APIKey}`,
          },
        }
      );
      const jsonData = await response.json();
      setFavCountries(jsonData);
    }
    fetchFavourites();
  };
  return (
    <>
      {/* <ComparatorBreadcrumb /> */}
      <nav>
        {/*Breadcrumbs reference: https://www.makeuseof.com/create-breadcrumbs-in-reactjs/ */}
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
      <br />
      <fieldset>
        <a href="#compare_cases">Jump to Direct Comparisons</a>
      </fieldset>

      <form onSubmit={handleSubmit}>
        {/* <form> */}
        <label>
          Login to save favourites:{""}
          <input
            name="login"
            value={login}
            type="password"
            pattern="key.{14}"
            onChange={handleChange}
          ></input>
          <button>Login</button>
          <small className="red">Password must be 17 digits long</small>
          <br />
          <small>Sample code: keyU9luii8dEwEdfH</small>
        </label>
      </form>

      <h1>Detailed Country info</h1>
      <form onSubmit={handleGetCountry}>
        {data.length === 0 ? (
          "Data is loading..."
        ) : (
          <select onChange={handleContinentChange}>
            <option value="select_continent">Select Continent</option>
            {continent.map((continent, idx) => (
              <option key={idx} name="continentDropdown" value={continent}>
                {continent}
              </option>
            ))}
          </select>
        )}
        {/* <p>{continentID}</p> */}
        <select onChange={handleDetailedCountryChange}>
          <option value="SELECT">Select Country</option>
          {data
            .filter(
              //   (countryData) => countryData?.continent.includes("Asia")
              (countryData) => countryData?.continent.includes(`${continentID}`)
            )
            .map((countryData, idx) => (
              //   <option key={idx} name="countryDropdown" value={idx}>
              <option
                key={idx}
                name="countryDropdown"
                value={countryData?.countryInfo?._id}
              >
                {countryData?.country}
                {/* <img>{countryData?.countryInfo?.flag}</img> */}

                {/* <img
                  className="image"
                  width="25%"
                  src={countryData?.country_info?.flag}
                ></img> */}
              </option>
            ))}
        </select>
        <button>Detailed info with map</button>
        <button onClick={handleFav}>Add to compare</button>
        <br />
      </form>
      {/* <h2>Add Favourites</h2> */}

      <table border="1">
        <caption>Personal List</caption>
        <thead>
          <tr>
            <th>Country</th>
            <th>Cases</th>
            <th>Deaths</th>
            <th>Active</th>
            <th>Cases/M</th>
            <th>Deaths/M</th>
            <th>Population</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {favCountries?.records?.map((fetchedCountryData, idx) => (
            <tr key={idx}>
              {matchID(fetchedCountryData)}
              {/* <td>
                <img
                  className="image"
                  width="30%"
                  src={data[fetchedCountryData?.fields?.ID]?.countryInfo?.flag}
                ></img>{" "}
                {fetchedCountryData?.fields?.country}
              </td>
              <td>{addCommas(data[fetchedCountryData?.fields?.ID]?.cases)}</td>
              <td>{addCommas(data[fetchedCountryData?.fields?.ID]?.deaths)}</td>
              <td>{addCommas(data[fetchedCountryData?.fields?.ID]?.active)}</td>
              <td>
                {addCommas(
                  data[fetchedCountryData?.fields?.ID]?.casesPerOneMillion
                )}
              </td>
              <td>
                {addCommas(
                  data[fetchedCountryData?.fields?.ID]?.deathsPerOneMillion
                )}
              </td>
              <td>
                {addCommas(data[fetchedCountryData?.fields?.ID]?.population)}
              </td>
              <td>
                <button onClick={() => handleDelete(fetchedCountryData?.id)}>
                  🗑️
                </button>
              </td> */}
            </tr>
          ))}
        </tbody>
      </table>

      <a id="compare_cases" />
      <fieldset>
        <legend>Directly compare cases between countries</legend>
        <form onSubmit={handleCompareCountry}>
          <span>Country 1:</span>
          <select onChange={handleCountry1Change}>
            {data.map((countryData, idx) => (
              <option key={idx} value={idx}>
                {countryData.country}
                {/* {countryData.Province_State || countryData.Country_Region} */}
              </option>
            ))}
          </select>
          <span>Country 2: </span>
          <select onChange={handleCountry2Change}>
            {data.map((countryData, idx) => (
              <option key={idx} value={idx}>
                {countryData.country}
                {/* {countryData.Province_State || countryData.Country_Region} */}
              </option>
            ))}
          </select>
          {/* <button>Compare!</button> */}
        </form>
      </fieldset>
      <p>Country 1: {data[compareCountryID1]?.country}</p>
      <p>Country 1 cases: {addCommas(data[compareCountryID1]?.cases)}</p>
      <p>
        Country 1 cases/M:{" "}
        {addCommas(data[compareCountryID1]?.casesPerOneMillion)}
      </p>
      <img
        className="image"
        width="25%"
        src={countryData[compareCountryID1]?.countryInfo?.flag}
      ></img>
      <p>Country 2: {data[compareCountryID2]?.country}</p>
      <p>Country 2 cases: {addCommas(data[compareCountryID2]?.cases)}</p>
      <p>
        Country 2 cases/M:{" "}
        {addCommas(data[compareCountryID2]?.casesPerOneMillion)}
      </p>
      <img
        className="image"
        width="25%"
        src={countryData[compareCountryID2]?.countryInfo?.flag}
      ></img>
      <br></br>
      {/* {favCountries?.records?.map((fetchedCountryData, idx) => (
        <p key={idx}>
          {fetchedCountryData?.fields?.country},{fetchedCountryData?.fields?.ID}
        </p>
      ))} */}
    </>
  );
}
