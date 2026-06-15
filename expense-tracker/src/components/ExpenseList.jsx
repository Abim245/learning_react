function ExpenseList({expense, deleteExpense}) {
    return(
         <div >
      {expense.map((exp, index) => (
        <div key={index} >
          <p>{exp.description}</p>
          <p>₦{exp.amount}</p>
          <p>{exp.category}</p>
          <button onClick={() => deleteExpense(exp.id)}>Delete</button>
        </div>
      ))}
     </div>
    )
}

export default ExpenseList;