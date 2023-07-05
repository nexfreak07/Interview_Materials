import React from "react";
import "./NewExpense.css";
import ExpenseForm from "./ExpensesForm";
import { useState } from "react";

const NewExpense = (props) => {
  // Custom Listner for Child Parent Communication
  const saveExpenseDataHandler = (NewExpense) => {
    // expense Data holds all (K,V) pairs of the data collected by the form
    const expenseData = { ...NewExpense, id: Math.random().toString() };
    // Spread operator to copy existing values
    props.onAddExpense(expenseData);
    setHidden(true);
  };



  const [hidden, setHidden] = useState(true);
  
  const addexpenseHandler = () => {
    setHidden(false)
  }

  const cancelHandler = () => {
    setHidden(true);
  }
  return (
    <div className="new-expense">
      {/* onSave is basically the event listner for React 
        
        VERY IMP POINT = use the variable (onSaveExpenseData with Props)*/}
      {/* We are now gonna make conditional statement when the button is clicked the expenses form should be shown else
    the button should be shown  so we are using  && to handle the condittions*/}

    {/* Alwaya make sure that <HTML> tags only has dedicated named event listener, for components we can name it as per us */}

      {hidden && <button onClick={addexpenseHandler}>Add New Expense</button>}
      {!hidden && <ExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={cancelHandler}/>}
    </div>
  );
};

export default NewExpense;
