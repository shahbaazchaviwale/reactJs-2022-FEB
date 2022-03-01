import { useState } from "react";
import Card from "../UI/Card";
import "./Expense.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenseList from "./ExpensesList";

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
        {/*****************************************
         * outputting conditinal content in this  way as well
         *  {
         *      expenseItemList.length === 0 ? 
                  <p style={{color: "white"}}>No item found.</p> 
                  :       
                <ExpenseList items={expenseItemList}/>
            }
          *****************************************/}
        <ExpenseList item={expenseItemList}/>
      </Card>
    </div>
  );
};

export default Expense;
