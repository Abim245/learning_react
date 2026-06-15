import { useState } from "react";
function AddExpense({setExpense}) {
    const [description, setDescription] = useState("");
    const [amount, setAmount] = useState("");
    const [category, setCategory] = useState("")
    function handleSubmit(e) {
        e.preventDefault();
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
       
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" placeholder="Enter expense description" value={description} onChange={(e) => setDescription(e.target.value)} />
                <input type="number" placeholder="Enter expense amount" value={amount} onChange={(e) => setAmount(e.target.value)} />
                <select name="category" id="" value={category} onChange={(e) => setCategory(e.target.value)}>
                    <option value="food">Food</option>
                    <option value="transportation">Transportation</option>
                    <option value="entertainment">Entertainment</option>
                </select>
                <button type="submit">Submit</button>
            </form>
        </div>
    )
}

export default AddExpense;