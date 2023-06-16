import { useNavigate } from "react-router-dom";
import addCommas from "../functions/addCommas";
import {
  VictoryAxis,
  VictoryBar,
  VictoryChart,
  VictoryLabel,
  VictoryTheme,
} from "victory";

const axisStyle = {
  tickLabels: {
    fontSize: 8,
  },
  axisLabel: {
    padding: 39,
    fontSize: 8,
    fontStyle: "italic",
  },
};

const topXvalue = 10;

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
    for (let i = 0; i < topXvalue; i++) {
      dataResult.push({
        country: i + 1,
        cases: countryDataToSort[i]?.casesPerOneMillion,
      });
    }
    console.log("dataResult", dataResult);
    return dataResult;
  };

  const renderTickFormat = () => {
    const result = [];
    for (let i = 0; i < topXvalue; i++) {
      result.push(countryDataToSort[i]?.country);
    }
    console.log(result);
    return result;
  };

  const tickValueNumbers = () => {
    let result = [];
    for (let i = 0; i < topXvalue; i++) {
      result.push(i + 1);
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
        {props.global.length === 0 ? (
          <progress />
        ) : (
          addCommas(props?.global?.summaryStats?.global?.deaths)
        )}
      </p>

      <button onClick={handleClick}>view by country</button>

      <VictoryChart
        // domainPadding will add space to each side of VictoryBar to
        // prevent it from overlapping the axis
        theme={VictoryTheme.material}
        domainPadding={10}
        height={200}
        width={250}
      >
        <VictoryLabel
          x={120}
          y={25}
          textAnchor="middle"
          text="Top 10 by Cases per million"
          style={{
            // tickLabels: { angle: 45, padding: 10, fontSize: 8 },
            fontSize: 9,
          }}
        />

        <VictoryAxis
          // tickValues specifies both the number of ticks and where
          // they are placed on the axis

          tickValues={tickValueNumbers()}
          tickFormat={renderTickFormat()}
          //   style={axisStyle}
          style={{
            tickLabels: { angle: 45, padding: 10, fontSize: 8 },
          }}
        />
        <VictoryAxis
          dependentAxis
          // tickFormat specifies how ticks should be displayed
          label="Total # of Cases per million"
          style={axisStyle}
          tickFormat={(x) => `${x / 1000}k`}
        />
        <VictoryBar data={data()} x="country" y="cases" />
      </VictoryChart>
    </>
  );
}
