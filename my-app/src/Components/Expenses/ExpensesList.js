import "./ExpensesList.css";
import ExpensesItem from "./ExpenseItem";

const ExpenseList = (props) => {
  if (props.item.length === 0) {
    return <h2 className="expenses-list__fallback ">Found no expenses.</h2>;
  }
  return (
    <div className="expenses-list">
      {props.item.map((expense) => (
        <ExpensesItem
          key={expense.id}
          title={expense.title}
          amount={expense.amount}
          date={expense.date}
        />
      ))}
    </div>
  );
};

export default ExpenseList;
