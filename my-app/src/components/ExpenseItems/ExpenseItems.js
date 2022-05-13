import "./ExpenseItems.css";
import { ExpenseDate } from "../ExpenseDate/ExpenseDate";
import { useState } from "react";
import { Card } from "../Card/Card";

export const ExpenseItems = (props) => {
  const [title, setTitle] = useState(props.title);
  const clickHandler = () => {
    console.log("Cliked cliky click.........!!!!!!!");
    setTitle("State Updated");
    return;
  };
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">₹{props.amount}</div>
      </div>
      <button onClick={clickHandler}>BUTTON</button>
    </Card>
  );
};
