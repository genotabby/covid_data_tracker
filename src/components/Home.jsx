import { useNavigate } from "react-router-dom";
import addCommas from "../functions/addCommas";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
} from "victory";

export default function Home({ props }) {
  const navigate = useNavigate();
  const handleClick = () => {
    console.log("Click");
    navigate("/comparator");
  };

  //   const data = [
  //     { country: 1, cases: 13000 },
  //     { country: 2, cases: 16500 },
  //     { country: 3, cases: 14250 },
  //     { country: 4, cases: 19000 },
  //     { country: 5, cases: 21000 },
  //     { country: 6, cases: 15000 },
  //   ];

  const data = () => {
    const dataResult = [];
    for (let i = 0; i < 10; i++) {
      dataResult.push({
        country: i,
        cases: props?.country[i]?.casesPerOneMillion,
      });
    }
    console.log(dataResult);
    return dataResult;
  };

  const renderTickFormat = () => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(props?.country[i]?.countryInfo?.iso3);
    }
    console.log(result);
    return result;
  };

  const tickValueNumbers = () => {
    let result = 0;
    for (let i = 0; i < 10; i++) {
      result++;
    }
    return result;
  };

  //   const tickValueNumbers = [1, 2, 3, 4, 5];

  //   const tickValueNumbers = () => {
  //     [1, 2, 3];
  //   };

  //   function tickValueNumbers() {
  //     return [1, 2, 3, 4, 5];
  //   }

  //   const renderTickFormat = [
  //     // props?.country[0]?.country,
  //     "Quarter 1",
  //     "Quarter 3",
  //     "Quarter 5",
  //     "Quarter 7",
  //   ];
  //   console.log(renderTickFormat);

  return (
    <>
      <h1 className="Header">Global details</h1>
      <p>
        Coronavirus Cases:{" "}
        {props.global.length === 0
          ? "The virus is hindering our systems, causing at some points an overwhelming delay"
          : addCommas(props?.global?.summaryStats?.global?.confirmed)}
      </p>
      <p>
        Deaths:{" "}
        {props.global.length === 0
          ? "Data is loading..."
          : addCommas(props?.global?.summaryStats?.global?.deaths)}
      </p>

      <button onClick={handleClick}>view by country</button>

      {/* <p>Global Confirmed cases: {props?.summaryStats?.global?.confirmed}</p>
      <p>Global Deaths Deaths: {props?.summaryStats?.global?.deaths}</p> */}
      <p>TODOS: To insert top 10 cases chart here</p>

      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        theme={VictoryTheme.material}
        domainPadding={10}
      >
        <VictoryLabel
          x={175}
          y={25}
          textAnchor="middle"
          text="Cases per million"
        />

        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis

          tickValues={tickValueNumbers()}
          //   tickValues={[1, 2, 3, 4]}
          tickFormat={renderTickFormat()}
          //   tickFormat={tickFormatValues}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `${x / 1000}k`}
        />
        <VictoryBar data={data()} x="country" y="cases" />
      </VictoryChart>
      <p>RenderTick:{JSON.stringify(renderTickFormat())}</p>
      <p>County:{JSON.stringify(props.country)}</p>
    </>
  );
}
