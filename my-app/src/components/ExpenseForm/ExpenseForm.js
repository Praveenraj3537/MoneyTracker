import './ExpenseForm.css'
export const ExpenseForm = () =>{
return <form>
    <div className= "expense__controls">
        <div className = "expense__control">
            <label>Title</label>
            <input type='text' />
        </div>
        <div className = "expense__control">
            <label>Amount</label>
            <input type='number' min='0.01' />
        </div>
        <div className = "expense__control">
            <label>Date</label>
            <input type='date' min="2000-01-01" max="2022-12-31" />
        </div>
        
    </div>
</form>
}