 /**
        const [userInput, setUserInput] = useState({
                    enteredTitle: "",
                    enteredAmount: "",
                    enteredDate: "",
                });
     *  
     *  NOT GOOD PRACTICE to states updates
     *  setUserInput({
            ...userInput,
            enteredTitle: event.target.value
        })
     * GOOD PRACTICE to states updates
     * IF YOUR STATE UPDATES DEPENDS ON  PREVIOUS STATE USE THIS FUNCTION FORM  
        setUserInput((prevState) => {
            return{...prevState, enteredTitle: event.target.value}
        })

        const before = (e) =>{
            e.preventDefault();
            console.log('before >>', userInput)
        }
        const after = (e) =>{
            e.preventDefault();
            console.log('after >>', userInput)
        }
     */
import React, { useState } from "react";
import "./ExpenseForm.css";

const ExpenseForm = (props) => {
  const [enteredTitle, setEnteredTitle] = useState("");
  const [enteredAmount, setEnteredAmount] = useState("");
  const [enteredDate, setEnteredDate] = useState("");

  const titleChangeHandler = (event) => {
    setEnteredTitle(event.target.value);
  };
  const amountChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setEnteredDate(event.target.value);
  };

  const  submitHandler = (e) => {
    e.preventDefault();
// "enteredTitle", "enteredAmount", "enteredDate" taken from above state values
    const expenseData = {
        title: enteredTitle,
        amount: enteredAmount,
        date: new Date(enteredDate)
    }
    setEnteredTitle('');
    setEnteredAmount('');
    setEnteredDate('');
    /**
     * This props coming from newExpense Components ,
     * when receive such props you need mention parameters in above function
     * This like sending props from child to parent.
     * "sendAsPropsToExpenseFormComp" expect parameter, add arg as "expenseData"
     */
    props.sendAsPropsToExpenseFormComp(expenseData);
  }
  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={enteredTitle} />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            min="0.01"
            step="0.01"
            onChange={amountChangeHandler}
            value={enteredAmount}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2020-01-01"
            max="2022-12-31"
            onChange={dateChangeHandler}
            value={enteredDate}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};

export default ExpenseForm;
