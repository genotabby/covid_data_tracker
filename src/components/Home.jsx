import { useNavigate } from "react-router-dom";
import addCommas from "../functions/addCommas";
import { VictoryAxis, VictoryBar, VictoryChart } from "victory";

export default function Home({ props }) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Click");
    navigate("/comparator");
  };
  const data = [
    { quarter: 1, earnings: 13000 },
    { quarter: 2, earnings: 16500 },
    { quarter: 3, earnings: 14250 },
    { quarter: 4, earnings: 19000 },
  ];

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

      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        domainPadding={20}
      >
        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis
          tickValues={[1, 2, 3, 4]}
          tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `$${x / 1000}k`}
        />
        <VictoryBar data={data} x="quarter" y="earnings" />
      </VictoryChart>

      <h2>End of homepage</h2>
    </>
  );
}
