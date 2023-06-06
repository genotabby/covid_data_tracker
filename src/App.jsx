import { useEffect, useState } from "react";

//* async -> keyword -> just a function marker -> allows use of await

function App() {
  const [result, setResult] = useState({});
  const [categories, setCategories] = useState([]);

  // const handleSearch = () => {
  //   async function fetchData() {
  //     const response = await fetch(`https://coronavirus.m.pipedream.net/`);
  //     const jsonData = await response.json();
  //     setResult(jsonData);
  //   }

  //   fetchData();
  // };

  useEffect(() => {
    async function getCategories() {
      const response = await fetch(`https://coronavirus.m.pipedream.net/`);
      const jsonData = await response.json();
      setCategories(jsonData);
    }
    getCategories();
  }, []);
  return (
    <>
      <h1>Covid</h1>
      <p>{JSON.stringify(categories)}</p>
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
