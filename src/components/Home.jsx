export default function Home({ props }) {
  return (
    <>
      <h1 className="Header">Global details</h1>
      <p>
        Global Confirmed cases Home: {props?.summaryStats?.global?.confirmed}
      </p>
      <p>Global Deaths Deaths: {props?.summaryStats?.global?.deaths}</p>
      <h2>End of homepage</h2>
    </>
  );
}
