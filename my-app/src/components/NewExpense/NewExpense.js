import React from "react";
import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";
import { v4 as uuidv4 } from "uuid";

export const NewExpense = (props) => {
  const formSaveDataHandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      Id: uuidv4(),
    };
    console.log("From Expense form Before onAddExpenseData");
    props.onAddExpenseData(expenseData);
    console.log("From Expense form After onAddExpenseData");
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveFormData={formSaveDataHandler} />
      {/*
      
      The above onSaveFormData is pointer to function like onChange function in input tag.
      This will point to function formSaveDataHandler where it expects the input.
      Once the input is received, it is taken into object and ID is added.
      Here Input details are passed from child component to parent component.
      Usally when we want to pass data it passed from parent component to child component via props.
      But the vice-versa was not possible through props. So above method handling will make sure this happens.
      
      */}
    </div>
  );
};
