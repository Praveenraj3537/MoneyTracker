import { useState } from "react";
import "./ExpenseForm.css";
export const ExpenseForm = (props) => {
  const [changeTitle, setChangeTitle] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [changeDate, setChangeDate] = useState("");

  const titleChangeHandler = (event) => {
    setChangeTitle(event.target.value);
    // console.log(changeTitle);
  };

  const amountChangeHandler = (event) => {
    setChangeAmount(event.target.value);
    // console.log(changeAmount);
  };
  const dateChangeHandler = (event) => {
    setChangeDate(event.target.value);
    // console.log(changeDate);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const expenseData = {
      Title: changeTitle,
      Amount: changeAmount,
      Date: new Date(changeDate),
    };
    props.onSaveFormData(expenseData);
    setChangeTitle("");
    setChangeAmount("");
    setChangeDate("");
  };

  return (
    <form onSubmit={submitHandler}>
      <div className="new-expense__controls">
        <div className="new-expense__control">
          <label>Title</label>
          <input
            type="text"
            value={changeTitle}
            onChange={titleChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Amount</label>
          <input
            type="number"
            value={changeAmount}
            onChange={amountChangeHandler}
          />
        </div>
        <div className="new-expense__control">
          <label>Date</label>
          <input
            type="date"
            min="2000-01-01"
            max="2022-12-31"
            value={changeDate}
            onChange={dateChangeHandler}
          />
        </div>
        <div className="new-expense__actions">
          <button type="submit">Add Expense</button>
        </div>
      </div>
    </form>
  );
};
