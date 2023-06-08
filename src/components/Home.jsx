export default function Home({ props }) {
  function addCommas(amount) {
    let a = Math.trunc(amount / 1000000);
    let b = Math.trunc((amount - a * 1000000) / 1000);
    let c = Math.trunc(amount % 1000);
    return `${a},${b},${c}`;
  }
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
      <h2>End of homepage</h2>
    </>
  );
}
