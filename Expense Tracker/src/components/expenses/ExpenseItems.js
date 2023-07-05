import ExpenseDate from "./ExpenseDate";
import "./ExpenseItems.css";
import Card from "../UI/Card";
import { useState } from "react";

function ExpenseItem(props) {

  return (
    <li>
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">${props.amount}</div>
    
      </div>
    </Card>
    </li>
  );
}

export default ExpenseItem;


export const trmp = () => {
  return(
    <tbody>
     {()=> {
      for(var i=0; i<10; i++)
      {
        console.log("Akash")
      }
     }}
    </tbody>
  )
}
