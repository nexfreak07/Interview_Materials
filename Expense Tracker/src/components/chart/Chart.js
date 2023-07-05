import React from "react";
import ChartBar from "./ChartBar";
import "./Chart.css";

export default function Chart(props) {
  // Now the maxValue takes the maximum value of all the months and how could we do that, we can do that by using
  // Math.max() func -> WHICH TAKES THE ARRAY OF DATA VALUES [1,2,3,4] as we have objects in here we need to map it to
  // an array of values an then pass all the elemnts (Not array) to the max()

  const dataValues = props.dataPoints.map((dataPoint) => dataPoint.value);

  //  The data values is just an array of values, hence we only need to pass the elements so we are using spread
  // operator
  const totalMaximum = Math.max(...dataValues);
  return (
    <div className="chart">
      {props.dataPoints.map((dataPoint) => (
        <ChartBar
          key={dataPoint.label}
          value={dataPoint.value}
          maxValue={totalMaximum}
          label={dataPoint.label}
        />
      ))}
    </div>
  );
}
