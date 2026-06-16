function ExpenseList({expense, deleteExpense}) {
    return(
        <div className="expense-list">
            <h2 className="expense-list-title">Recent Expenses</h2>
            {expense.length === 0 ? (
                <p>No expenses yet. Add one above!</p>
            ) : (
                expense.map((exp, index) => (
                    <div key={index} className="expense-item">
                        <div className="expense-info">
                            <p className="expense-description">{exp.description}</p>
                            <p className="expense-category">{exp.category}</p>
                        </div>
                        <p className="expense-amount">₦{exp.amount}</p>
                        <p className="expense-date">{exp.date}</p>
                        <button className="delete-btn" onClick={() => deleteExpense(exp.id)}>Delete</button>
                    </div>
                ))
            )} 
        </div>
    )
}

export default ExpenseList;