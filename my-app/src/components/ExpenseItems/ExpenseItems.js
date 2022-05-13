import "./ExpenseItems.css";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate";

export const ExpenseItems = (props) => {
  const clickHandler = () =>{
    console.log('Cliked cliky click.........!!!!!!!');
    return 
  }
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <div>{props.title}</div>
      </div>
        <div className="expense-item__price">₹{props.amount}</div>
      <button onClick = {clickHandler}>BUTTON</button>
    </div>
  );
}

