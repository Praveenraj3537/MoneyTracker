import { useState } from "react";
import "./ExpenseForm.css";
export const ExpenseForm = (props) => {
  /**
   * Here props will help in taking arguments from parent component to child component.
   * With help of props we can access all the parameters of the parent component.
   *
   */
  const [changeTitle, setChangeTitle] = useState("");
  const [changeAmount, setChangeAmount] = useState("");
  const [changeDate, setChangeDate] = useState("");
  /**
   * useState() is hook which helps in maintaining the state of DOM.
   * If you want change any thing in the tree, React-DOM need to know that, there is change in the state of tree,
   * upon which the changes will be reflected in the tree.
   * Initially the state is made nil by useState("")
   */

  const titleChangeHandler = (event) => {
    setChangeTitle(event.target.value);
  };

  const amountChangeHandler = (event) => {
    setChangeAmount(event.target.value);
  };
  const dateChangeHandler = (event) => {
    setChangeDate(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault(); //Help to prevent default submitting the form whenever button is clicked.

    const expenseDataValue = {
      /**
       * This object is created to handle the current values of the state
       */
      Title: changeTitle,
      Amount: changeAmount,
      Date: new Date(changeDate),
    };
    props.onSaveFormData(expenseDataValue);
    /**
     * Here am calling listener function from parent component(NewExpense.js) as i have received as props,
     * and then am passing the current data to parent components where ID is added from the parenet component and then it is executed there.
     *
     * NOTE: onSaveFormData is not execute in this file but in parent component(NewExpense.js).
     */
    setChangeTitle(""); //Here field values are made to reset to empty after clicking submit button.
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
