import React from "react";
import Chart from "../chart/Chart";

export default function ExpensesChart(props) {
  const chartDataPoints = [
    { label: "Jan", value: 0 },
    { label: "Feb", value: 0 },
    { label: "Mar", value: 0 },
    { label: "Apr", value: 0 },
    { label: "May", value: 0 },
    { label: "Jun", value: 0 },
    { label: "Jul", value: 0 },
    { label: "Aug", value: 0 },
    { label: "Sep", value: 0 },
    { label: "Oct", value: 0 },
    { label: "Nov", value: 0 },
    { label: "Dec", value: 0 },
  ];

  //Below for loop is used to update the data values in datapoints array from filtered expenses
  for (const expense of props.expenses) {
    const expenseMonth = expense.date.getMonth(); // Starting at 0 => Jan till 11 => December
    chartDataPoints[expenseMonth].value += expense.amount;
  }

  // After the above for loop the value of data points should not be 0 anymore hence it will sum up the value
  // for the given month.
  return <Chart dataPoints={chartDataPoints} />;
}
