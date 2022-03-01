import "./App.css";
import Expense from "./Components/Expenses/Expense";
import Card from "./Components/UI/Card";
import NewExpense from "./Components/NewExpense/NewExpense";
import { useState } from "react";

const App = () => {
  const DUMMY_EXPENSES = [
    {
      id: "e1",
      title: "Toilet Paper",
      amount: 94.12,
      date: new Date(2022, 7, 14),
    },
    {
      id: "e2",
      title: "Maruti Ignis",
      amount: 294.67,
      date: new Date(2021, 2, 31),
    },
    {
      id: "e3",
      title: "Car Insurance",
      amount: 294.67,
      date: new Date(2020, 2, 28),
    },
    {
      id: "e4",
      title: "New Desk (Wooden)",
      amount: 450,
      date: new Date(2019, 5, 12),
    },
  ];

  // added state here initially
  const [expenses , setExpense] = useState(DUMMY_EXPENSES);
  const getSavedExpenseFrmData = (savedExpenseFormData) =>{
    // update state here 
    setExpense((prevExpenses) => {
      return [savedExpenseFormData, ...prevExpenses]
    } )
    
  }
  return (
    <Card>
      {/* PASS THIS PROPS TO "NewExpense" COMPONENT 2 WAY BINDING  */}
      <NewExpense sendAsPropsToNewExpenseComp={getSavedExpenseFrmData} />
      <Expense items={expenses} />
    </Card>
  );
};

export default App;
