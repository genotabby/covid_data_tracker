import { useNavigate } from "react-router-dom";
import addCommas from "../functions/addCommas";

export default function Home({ props }) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Click");
    navigate("/comparator");
  };
  return (
    <>
      <h1 className="Header">Global details</h1>
      <p>
        Coronavirus Cases:{" "}
        {props.length === 0
          ? "The virus is hindering our systems, causing at some points an overwhelming delay"
          : addCommas(props?.summaryStats?.global?.confirmed)}
      </p>
      <p>
        Deaths:{" "}
        {props.length === 0
          ? "Data is loading..."
          : addCommas(props?.summaryStats?.global?.deaths)}
      </p>

      <button onClick={handleClick}>view by country</button>

      {/* <p>Global Confirmed cases: {props?.summaryStats?.global?.confirmed}</p>
      <p>Global Deaths Deaths: {props?.summaryStats?.global?.deaths}</p> */}
      <p>TODOS: To insert top 10 cases chart here</p>
      <h2>End of homepage</h2>
    </>
  );
}
