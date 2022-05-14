import { ExpenseForm } from "../ExpenseForm/ExpenseForm";
import "./NewExpense.css";
import { v4 as uuidv4 } from "uuid";

export const NewExpense = () => {
  const formSaveDatahandler = (enteredExpenseData) => {
    const expenseData = {
      ...enteredExpenseData,
      Id: uuidv4(),
    };
    console.log(expenseData);
  };
  return (
    <div className="new-expense">
      <ExpenseForm onSaveFormData={formSaveDatahandler} />
    </div>
  );
};