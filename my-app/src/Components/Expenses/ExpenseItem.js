/**
 ******************************************************************************************************************
        THIS CMPONENT CALLED AS STATELESS COMPONENT, DUMP COMPONENET, PRESENTATIONAL COMPONENET
 ******************************************************************************************************************
 */
/**NOTE
 * dont use parenthsis in onClick method , when HTML run the method will executes
 * <button onClick={clickHandle()}>change title</button>
 */

import { useState } from "react"; // useState is called HOOKS
import "./ExpenseItem.css"; // add css  file
import ExpenseDate from "./ExpenseDate";
import Card from "../UI/Card";
// pass props
const ExpensesItem = (props) => {
  /**
   * 1 - should use REACT COMPONENTS, dont use inside function
   * 2 - setTitle is function t set values
   * 3 - What is a Hook? A Hook is a special function that lets you “hook into” React features.
   * For example, useState is a Hook that lets you add React state to function components.
   * We’ll learn other Hooks later.
   * 
   *  let [title, setTitle] = useState(props.title);
      let [amount, setAmount] = useState(props.amount);

      const clickHandle = () => {
        setTitle("Updated!!");
        setAmount("000.00");
        console.log(title);
      };

      <button onClick={clickHandle}>change title</button>

   */

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">$ {props.amount}</div>
      </div>
    </Card>
  );
};

export default ExpensesItem;
