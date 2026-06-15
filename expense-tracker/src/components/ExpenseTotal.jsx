function ExpenseTotal({expense}) {
    return(
         <div className="expense-total">
            <h2>Total expense: <span>₦{expense.reduce((total,exp)=> total+ exp.amount,0).toFixed(2)}</span></h2>
        </div>
    )
}

export default ExpenseTotal;