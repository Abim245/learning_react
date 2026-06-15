import { useState , useEffect} from "react";
import ExpenseTotal from "./components/ExpenseTotal";
import AddExpense from "./components/AddExpense";
import ExpenseList from "./components/ExpenseList";
import ExpenseFilter from "./components/ExpenseFilter";
import "./App.css";

function App(){
  
 const [expense, setExpense] = useState(() => {
    const saved = localStorage.getItem("expenses")
    return saved ? JSON.parse(saved) : []
})
useEffect(() => {
    localStorage.setItem("expenses", JSON.stringify(expense))
}, [expense])
  function deleteExpense(id) {
    setExpense(prev => prev.filter(expense => expense.id !== id))
  }
  const [activeFilter, setActiveFilter] = useState("all")
const filteredExpenses = expense.filter(exp => activeFilter === "all" ? true : exp.category === activeFilter)
 return(
    <div className="app">
        <h1 className="app-title">Expense Tracker</h1>
        <div className="dashboard">
            <div className="left-panel">
                <AddExpense setExpense={setExpense} />
            </div>
            <div className="right-panel">
                <ExpenseTotal expense={expense} />
                <ExpenseFilter activeFilter={activeFilter} setActiveFilter={setActiveFilter} />
                <ExpenseList expense={filteredExpenses} deleteExpense={deleteExpense} />
            </div>
        </div>
    </div>
)


}

export default App;