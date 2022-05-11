import "./ExpenseItems.css";
export function ExpenseItems() {
  return (
    <div className="expense-item">
      <div>May 05 2022</div>
      <div className="expense-item__description">
        <h2>Car Insurance</h2>
        <div className="expense-item__price">₹ 5000</div>
      </div>
    </div>
  );
}
