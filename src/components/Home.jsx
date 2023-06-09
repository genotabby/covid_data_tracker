import addCommas from "../functions/addCommas";

export default function Home({ props }) {
  return (
    <>
      <h1 className="Header">Global details</h1>
      <p>
        Global Confirmed Cases:{" "}
        {props.length === 0
          ? "Data is loading..."
          : addCommas(props?.summaryStats?.global?.confirmed)}
      </p>
      <p>
        Global Confirmed Deaths:{" "}
        {props.length === 0
          ? "Data is loading..."
          : addCommas(props?.summaryStats?.global?.deaths)}
      </p>

      {/* <p>Global Confirmed cases: {props?.summaryStats?.global?.confirmed}</p>
      <p>Global Deaths Deaths: {props?.summaryStats?.global?.deaths}</p> */}
      <p>TODOS: To insert top 10 cases chart here</p>
      <h2>End of homepage</h2>
    </>
  );
}
