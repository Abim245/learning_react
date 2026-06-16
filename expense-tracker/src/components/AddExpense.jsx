import { useState } from "react";
function AddExpense({setExpense}) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("food")
    const [date, setDate] = useState(new Date().toISOString().split('T')[0]);      

    function handleSubmit(e) {
        e.preventDefault();
        if (!description || !amount || !category) {
            alert("Please fill in all fields");
            return;
        }
        const newExpense = {
            id: Date.now(),
            description,
            amount: parseFloat(amount),
            category,
            date
        };
        setExpense(prev => [...prev, newExpense])
        setDescription("");
        setAmount("");
        setCategory("");

    }
   return(
       
        <div className="add-expense">
            <h2 className="form-title">Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                <label htmlFor="description">Description</label>
                <input type="text" id="description" placeholder="Enter expense description" value={description} onChange={(e) => setDescription(e.target.value)} /></div>
                <div className="form-group">
                <label htmlFor="amount">Amount</label>
                <input type="number" id="amount" placeholder="Enter expense amount" value={amount} onChange={(e) => setAmount(e.target.value)} /></div>
                <div className="form-group">
                <label htmlFor="date">Date</label>
                <input type="date" id="date" value={date} onChange={(e) => setDate(e.target.value)} />
                </div>
                <div className="form-group">
                <label htmlFor="category">Category</label>
                <select name="category" id="category" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="food">Food</option>
                    <option value="transportation">Transportation</option>
                    <option value="entertainment">Entertainment</option>
                </select></div>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default AddExpense;