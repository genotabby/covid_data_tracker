import { useEffect, useState } from "react";
import { Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
// import "bootstrap/dist/css/bootstrap.min.css";
import "water.css/out/water.min.css";
import "./styles/App.css";
import "./styles/Error404.css";
import Home from "./components/Home";
import About from "./components/About";
import Comparator from "./components/Comparator";
import Error404 from "./components/Error404";
import ContactMe from "./components/ContactMe";
//* async -> keyword -> just a function marker -> allows use of await

function App() {
  const [result, setResult] = useState({});
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(`https://coronavirus.m.pipedream.net/`);
      const jsonData = await response.json();
      setCategories(jsonData);
    }
    getCategories();
  }, []);

  const [population, setPopulation] = useState([]);

  useEffect(() => {
    async function fetchPopulation() {
      const response = await fetch(
        // "https://api.api-ninjas.com/v1/country?name=Singapore",
        {
          method: "GET",
          headers: {
            // "x-api-key": "rZg5Aw0LF8d5jCySPBPNWA==thmSddusqVTuLGxV",
            "Content-Type": "application/json",
          },
          // body: JSON.stringify(data),
        }
      );
      const jsonData = await response.json();
      setPopulation(jsonData);
    }
    fetchPopulation();
  }, []);

  console.log(population);

  return (
    <>
      <Nav />
      <button>Test button for style?</button>
      <Routes>
        <Route path="/" element={<Home props={categories} />} />
        <Route path="/About" element={<About />} />
        <Route path="/Comparator" element={<Comparator props={categories} />} />
        <Route path="/ContactMe" element={<ContactMe />} />
        {/* <Route path="/*" element={<p>Error 404</p>} /> */}
        <Route path="/*" element={<Error404 />} />
      </Routes>
      {/* <p>{JSON.stringify(categories)}</p> */}
      {/* <label>
        Title: <input name="title" type="search" />
      </label>
      <button onClick={handleSearch}>Search</button>
      <br /> */}
      {/* <img src={result.Poster} />
      <p>First Name: {result.results && result.results[0].name.first}</p> */}
      {/* Elvis method [optional chainring] */}
      {/* <p>First Name: {result}</p> */}
    </>
  );
}
export default App;
