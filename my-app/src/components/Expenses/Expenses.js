import React, { useState } from "react";
import "./Expenses.css";
import { Card } from "../Card/Card";
import { ExpenseItems } from "../ExpenseItems/ExpenseItems";
import { ExpenseFilter } from "../ExpenseFilter/ExpenseFilter";

export const Expenses = (props) => {
  const [filterYear, setFilterYear] = useState("2020");
  const changeFilterHandler = (year) => {
    setFilterYear(year);
  };
  return (
    <Card className="expenses">
      <ExpenseFilter
        selected={filterYear}
        onChangeFilter={changeFilterHandler}
      />
      {props.items.map((expenseValue) => (
        <ExpenseItems
          title={expenseValue.title}
          amount={expenseValue.amount}
          date={expenseValue.date}
        />
      ))}
    </Card>
  );
};
