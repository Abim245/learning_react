import { useState } from "react";
function AddExpense({setExpense}) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("")
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
            category
        };
        setExpense(prev => [...prev, newExpense])
        setDescription("");
        setAmount("");
        setCategory("");

        
    }
   return(
       
        <div className="form-group">
            <h2 className="form-title">Add Expense</h2>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter expense description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="number" placeholder="Enter expense amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select name="category" id="" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="food">Food</option>
                    <option value="transportation">Transportation</option>
                    <option value="entertainment">Entertainment</option>
                </select>
                <button type="submit" className="submit-btn">Submit</button>
            </form>
        </div>
    )
}

export default AddExpense;