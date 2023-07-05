import Expense from "./components/expenses/Expense";
import "./components/expenses/Expense.css";
import NewExpense from "./components/NewExpense/NewExpense";
import React, { useState } from "react";


const DUMMY = [
  { id:1 , title: "Car Insurance", amount: "2000", date: new Date(2022, 5, 12) },
  { id:2 ,title: "LIC", amount: "5000", date: new Date(2022, 12, 8) },
  { id:3 ,title: "New TV", amount: "7000", date: new Date(2022, 7, 1) },
];
function App() {

  const [data, setData] = useState(DUMMY);

  const addExpense = (expense) => {
    setData( prevExpense => {
      return [expense, ...prevExpense];
  });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpense} />
      {/* The below code passes the data and maps around card, so for each data a card is created */}
      {/* {data.map(items => <Expense items={items} />)} */}
      <Expense items={data} />
    </div>
  );
}
export default App;
