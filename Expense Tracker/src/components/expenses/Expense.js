import ExpenseItem from "./ExpenseItems";
import Card from "../UI/Card";
import Filter from "./Filter";
import "./Expense.css";
import { useState } from "react";
import ExpensesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

export default function (props) {
  const [year, setYear] = useState("2023");

  const filterChangeHandler = (selectedYear) => {
    setYear(selectedYear);
  };


  // This is not a function hence its a variable stores true / false. Based on date, which is set, then a 
  // filterHandler is trigerred and changes the state, and the value of year gets updated and hence
  
  // The filter() func returns an array on based condition provided in it
  const filteredExpenses = props.items.filter(expense => {
          return expense.date.getFullYear().toString() === year;
  });

  

  return (
    <Card className="expenses">

      <ExpensesChart expenses={filteredExpenses}/>
      <Filter onFilterChange={filterChangeHandler} selected={year}/>



      {/* This is a Js code below so we are using {} and using the items array from App.js and as it is an array
      we are calling inbuilt map function to map all the items to a JSX Component hence creating dynamic data. 
      By doing this,  In Below code we pass data at one and only create the expense component from data*/}

      {/* The code is shifted above for conditional formatting using a variable */}
      <ExpensesList items={filteredExpenses}/>
        {/* The data is passed one by one and a complete card with filter is created for each data */}
      {/* <ExpenseItem title={props.items.title} amount={props.items.amount} date={props.items.date}/> */}
    </Card>
  );
}
