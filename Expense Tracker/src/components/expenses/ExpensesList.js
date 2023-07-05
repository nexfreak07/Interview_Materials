import React from "react";
import "./ExpensesList.css";
import ExpenseItem from "./ExpenseItems";

export default function ExpensesList(props) {


  if (props.items.length === 0) {
    return <h2 className="expenses-list__fallback">Found no Expenses</h2>
  }


  // Map function automatically iterates hence we pass the entire array [data] to the child components
  return (
    <ul className="expenses-list">
        {props.items.map((expense) => (
      <ExpenseItem
        key={expense.id}
        title={expense.title}
        amount={expense.amount}
        date={expense.date}
      />
    ))}
    </ul>
  );

  
}
