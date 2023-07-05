import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  // Using 3 different types  of States

  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  // Rather using three states we can use only one

  // const [userInput, setUserInput] = useState(
  //     {
  //         enteredTitle : '',
  //         enteredAmount : '',
  //         enteredDate : ''
  //     }
  // );

  const titleHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const dateHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  //The below function format is used when you use singke state for all 3 inputs and the state change
  // is dependent on previous state
  // const dateHandler = (event) => {
  //     setUserInput((prevState) => {
  //         return {
  //             ...userInput,
  //             dateHandler: event.target.value
  //           };
  //         }
  //     );
  // }

  const submitHandler = (event) => {
    event.preventDefault(); // Prevents the default behaviour of the form (i.e. sending a request and reloading the page)

    // Storing the entered values in a JS Object for later use
    const expenseData = {
      title: enteredTitle,
      amount: +enteredAmount, // + is used to convert the strng to integer
      date: new Date(enteredDate),
    };
    // Sending the data to parent NewExpense.js
    // Sending before resetting so data is not lost
    props.onSaveExpenseData(expenseData);

    // The below code basically resets the input field

    setEnteredTitle("");
    setEnteredAmount("");
    setEnteredDate("");
  };
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          {/* The value over here is used to reset the input field back to empty and 
                title handler is used to extract the letters we enter */}
          <input type="text" value={enteredTitle} onChange={titleHandler} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input 
            type="number"
            min="0.01"
            step="1" 
            // Step is used to set steppint attribute as set to one <- on pressing any of these -> it will increase or 
            // decrease by amount set to step
            value={enteredAmount}
            onChange={amountHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2019-01-01"
            max="2023-12-31"
            value={enteredDate}
            onChange={dateHandler}
          />
        </div>
      </div>
      <div className="new-expense__actions">

        {/* what we have done here is Cancel button is set to type -> button as it should not submit the form
        at the same time when it is clicked we should pass the control to expense.js so we used props.onCancel, which is
        eventlistner of component (can be named by us) and that called a function which sets the hidden set true again */}
        <button type="button" onClick={props.onCancel}>Cancel</button>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;
