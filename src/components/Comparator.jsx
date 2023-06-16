import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import addCommas from "../functions/addCommas";
import continent from "../Data/continentList";

export default function Comparator({ countryData }) {
  const [data, setData] = useState(countryData);
  const [loginUsername, setLoginUsername] = useState("");
  const [loginKey, setLoginKey] = useState("");
  const [APIUser, setAPIUser] = useState("user1");
  const [APIKey, setAPIKey] = useState("");
  const [forDetailedCountryID, setForDetailedCountryID] = useState("SELECT");
  const [continentID, setContinentID] = useState("");
  const [compareCountryID1, setCompareCountryID1] = useState("0");
  const [compareCountryID2, setCompareCountryID2] = useState("0");
  const [favCountries, setFavCountries] = useState({});
  const navigate = useNavigate();

  const handleUsernameChange = (event) => {
    setLoginUsername(event.target.value);
    setAPIUser(event.target.value);
    // This is updating the state once then twice later
    console.log("handleUsernameChange", event.target.value);
  };

  const handleChange = (event) => {
    setLoginKey(event.target.value);
    // This is updating the state once then twice later
    setAPIKey(event.target.value);
    console.log("changeApikey", APIKey);
    console.log("handleChange", event.target.value);
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
  //   Execute on login
  const handleSubmit = (event) => {
    event.preventDefault();
    // somehow setAPIKey is not putting login value on 1st try
    // Clicking the button is 1 updated APIKey value behind
    console.log("loginBefore", loginKey);
    console.log("APIKEYBefore", APIKey);
    // setAPIKey(login);
    console.log("loginAfter", loginKey);
    console.log("APIKEYAfter", APIKey);
    console.log("LoginClicked!");

    async function fetchFavourites() {
      await timeout(500);
      // try {
      const response = await fetch(
        `https://api.airtable.com/v0/appPxDTuHp9EnOa32/${APIUser}/`,
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

  // Execute on Delete button
  async function handleDelete(id) {
    console.log("DELETE!", id);
    const response = await fetch(
      `https://api.airtable.com/v0/appPxDTuHp9EnOa32/${APIUser}/${id}`,
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
        `https://api.airtable.com/v0/appPxDTuHp9EnOa32/${APIUser}/`,
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
        country_value = data[i];
      }
    }
    return (
      <>
        <td className="fav_th">
          <img
            className="image"
            width="30%"
            src={country_value?.countryInfo?.flag}
          ></img>{" "}
          {country_value?.country}
        </td>
        <td className="fav_th">{addCommas(country_value?.cases)}</td>
        <td className="fav_th">{addCommas(country_value?.deaths)}</td>
        <td className="fav_th">{addCommas(country_value?.recovered)}</td>
        <td className="fav_th">{addCommas(country_value?.active)}</td>
        <td className="fav_th">{addCommas(country_value?.critical)}</td>
        <td className="fav_th">
          {addCommas(country_value?.casesPerOneMillion)}
        </td>
        <td className="fav_th">
          {addCommas(country_value?.deathsPerOneMillion)}
        </td>
        <td className="fav_th">{addCommas(country_value?.tests)}</td>
        <td className="fav_th">
          {addCommas(country_value?.testsPerOneMillion)}
        </td>
        <td className="fav_th">{addCommas(country_value?.population)}</td>
        <td className="fav_th">
          <button onClick={() => handleDelete(fetchedCountryData?.id)}>
            🗑️
          </button>
        </td>
      </>
    );
  }

  const handleFav = (event) => {
    event.preventDefault();
    console.log("countryID", forDetailedCountryID);
    if (forDetailedCountryID === "SELECT") {
      console.log("No Country Selected!");
      return;
    }
    async function AddFavourite() {
      const response = await fetch(
        `https://api.airtable.com/v0/appPxDTuHp9EnOa32/${APIUser}/`,
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${APIKey}`,
          },
          body: `{"records":[{"fields":{"ID":${forDetailedCountryID}}}]}`,
        }
      );
      await response.json();
    }
    AddFavourite();
    async function fetchFavourites() {
      await timeout(500);
      const response = await fetch(
        `https://api.airtable.com/v0/appPxDTuHp9EnOa32/${APIUser}/`,
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
        <label>
          Username:
          <input
            name="username"
            value={loginUsername}
            type="text"
            onChange={handleUsernameChange}
          ></input>
          <br />
        </label>
        <label>
          Password:{""}
          <input
            name="pwd"
            value={loginKey}
            type="password"
            pattern="key.{14}"
            onChange={handleChange}
          ></input>
        </label>
        <button>Login</button>
        <small className="red">Password must be 17 digits long</small>
        <br />
        <small>Sample username: user1, user2</small>
        <br />
        <small>Sample code: keyU9luii8dEwEdfH</small>
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
            .filter((countryData) =>
              countryData?.continent.includes(`${continentID}`)
            )
            .map((countryData, idx) => (
              <option
                key={idx}
                name="countryDropdown"
                value={countryData?.countryInfo?._id}
              >
                {countryData?.country}
              </option>
            ))}
        </select>
        <button>Detailed info with map</button>
        <button onClick={handleFav}>Add to compare</button>
      </form>
      <br />

      <table border="1">
        {/* <caption>Personal List</caption> */}
        <thead>
          <tr>
            <th className="fav_th">Country</th>
            <th className="fav_th">Cases</th>
            <th className="fav_th">Deaths</th>
            <th className="fav_th">Recovered</th>
            <th className="fav_th">Active</th>
            <th className="fav_th">Serious, Critical</th>
            <th className="fav_th">Cases/1M</th>
            <th className="fav_th">Deaths/1M</th>
            <th className="fav_th">Total Tests</th>
            <th className="fav_th">Tests /1M</th>
            <th className="fav_th">Population</th>
            <th className="fav_th">Actions</th>
          </tr>
        </thead>
        <tbody>
          {favCountries?.records?.map((fetchedCountryData, idx) => (
            <tr key={idx}>{matchID(fetchedCountryData)}</tr>
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
              </option>
            ))}
          </select>

          <span>Country 2: </span>
          <select onChange={handleCountry2Change}>
            {data.map((countryData, idx) => (
              <option key={idx} value={idx}>
                {countryData.country}
              </option>
            ))}
          </select>
        </form>
      </fieldset>
      <br />
      <img
        width="200"
        height="100"
        src={countryData[compareCountryID1]?.countryInfo?.flag}
        alt="country1 flag"
      ></img>
      <> </>
      <img
        width="200"
        height="100"
        className="image"
        src={countryData[compareCountryID2]?.countryInfo?.flag}
        alt="country2 flag"
      ></img>
      <br></br>

      <br />
      <table>
        <tbody>
          <tr className="single-row_tr">
            <th className="single-row_th">Country</th>
            <th className="single-row_th">Cases</th>
            <th className="single-row_th">Deaths</th>
            <th className="single-row_th">Recovered</th>
            <th className="single-row_th">Active Cases</th>
            <th className="single-row_th">Serious, Critical</th>
            <th className="single-row_th">Cases/ 1M pop</th>
            <th className="single-row_th">Deaths/ 1M pop</th>
            <th className="single-row_th">Total Tests</th>
            <th className="single-row_th">Tests/ 1M pop</th>
            <th className="single-row_th">Population</th>
          </tr>
          <tr className="single-row_tr">
            <td className="single-row_td">
              {data[compareCountryID1]?.country}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID1]?.cases)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID1]?.deaths)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID1]?.recovered)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID1]?.active)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID1]?.critical)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID1]?.casesPerOneMillion)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID1]?.deathsPerOneMillion)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID1]?.tests)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID1]?.testsPerOneMillion)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID1]?.population)}
            </td>
          </tr>
          <tr className="single-row_tr">
            <td className="single-row_td">
              {data[compareCountryID2]?.country}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID2]?.cases)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID2]?.deaths)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID2]?.recovered)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID2]?.active)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID2]?.critical)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID2]?.casesPerOneMillion)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID2]?.deathsPerOneMillion)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID2]?.tests)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID2]?.testsPerOneMillion)}
            </td>
            <td className="single-row_td">
              {addCommas(data[compareCountryID2]?.population)}
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
