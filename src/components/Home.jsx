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

  let countryDataToSort = [...props.country];
  countryDataToSort.sort((a, b) => b.casesPerOneMillion - a.casesPerOneMillion);

  const data = () => {
    const dataResult = [];
    for (let i = 0; i < 10; i++) {
      dataResult.push({
        country: i + 1,
        cases: countryDataToSort[i]?.casesPerOneMillion,
        // cases: props?.country[i]?.casesPerOneMillion,
      });
    }
    console.log("dataResult", dataResult);
    return dataResult;
  };

  //   const data = [
  //     { country: 1, cases: 13000 },
  //     { country: 2, cases: 16500 },
  //     { country: 3, cases: 14250 },
  //     { country: 4, cases: 19000 },
  //     { country: 5, cases: 19000 },
  //     { country: 6, cases: 19000 },
  //     { country: 7, cases: 19000 },
  //     { country: 8, cases: 19000 },
  //     { country: 9, cases: 19000 },
  //     { country: 10, cases: 19000 },
  //   ];

  const renderTickFormat = () => {
    const result = [];
    for (let i = 0; i < 10; i++) {
      result.push(countryDataToSort[i]?.countryInfo?.iso3);
      //   result.push(props?.country[i]?.countryInfo?.iso3);
    }
    console.log(result);
    return result;
  };

  const tickValueNumbers = () => {
    let result = [];
    for (let i = 0; i < 10; i++) {
      result.push(i + 1);
      //   result++;
    }
    console.log("result", result);
    return result;
  };

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

      {/* <p>TODOS: To insert top 10 cases chart here</p> */}

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
          //   tickValues={[1, 2, 3, 4, 5, 6, 7, 8, 9, 10]}
          tickFormat={renderTickFormat()}
          //   tickFormat={[
          //     "Quarter 1",
          //     "Quarter 2",
          //     "Quarter 3",
          //     "Quarter 4",
          //     "Quarter 5",
          //     "Quarter 6",
          //     "Quarter 7",
          //     "Quarter 8",
          //     "Quarter 9",
          //     "Quarter 10",
          //   ]}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          tickFormat={(x) => `${x / 1000}k`}
        />
        {/* <VictoryBar data={countryDataToSort()} x="country" y="cases" /> */}
        <VictoryBar data={data()} x="country" y="cases" />
        {/* <VictoryBar data={data} x="country" y="cases" /> */}
      </VictoryChart>
      {/* <p>RenderTick:{JSON.stringify(renderTickFormat())}</p> */}
      <p>County:{JSON.stringify(countryDataToSort[0])}</p>
    </>
  );
}
