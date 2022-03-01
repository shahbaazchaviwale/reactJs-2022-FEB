import React from "react";
import Card from "../UI/Card";
import ExpenseForm from "./ExpenseForm";
import "./NewExpense.css";

const NewExpense = (props) => {
    const ExpenseFormHandler = (formData) =>{
        const expenseData = {
            ...formData,
            id: Math.random().toString()
        }
        props.sendAsPropsToNewExpenseComp(expenseData)
    }
  return (
    <Card className="new-expense">
    {/* PASS THIS PROPS TO "ExpenseForm" COMPONENT 2 WAY BINDING  */}
      <ExpenseForm sendAsPropsToExpenseFormComp={ExpenseFormHandler}/>
    </Card>
  );
};

export default NewExpense;
