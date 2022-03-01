import { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesItem from "./ExpenseItem";
import ExpensesFilter from "./ExpensesFilter";

const Expense = (props) => {
  const [filteredYear, setselectedYear] = useState("Select Year");
  // set default list
  const [expenseItemList, setExpenseItemList] = useState(props.items);

  const getSelectedYear = (selectedYear) => {
    setselectedYear(selectedYear);
    // filter list when select year from "ExpensesFilter" component
    const filterExpenseItemList = props.items.filter((exp) => {
      if(selectedYear === "Select Year"){
        return(props.items)
      }else{
        return exp.date.getFullYear().toString() === selectedYear;
      }
    });

    setExpenseItemList(filterExpenseItemList)
  };

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter
          sendPropsSelected={filteredYear}
          sendPropsToExpenseFilter={getSelectedYear}
        />
        {/* outputting conditinal content */}
        {expenseItemList.length === 0 ? 
          <p style={{color: "white"}}>No item found.</p> 
          : expenseItemList.map((expense) => (
            <ExpensesItem
              key={expense.id}
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
};

export default Expense;
