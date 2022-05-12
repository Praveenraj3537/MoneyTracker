import "./ExpenseItems.css";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate";

export default function ExpenseItems(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <div>{props.title}</div>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
    </div>
  );
}
