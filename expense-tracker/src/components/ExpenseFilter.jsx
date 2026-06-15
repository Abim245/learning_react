function ExpenseFilter({activeFilter, setActiveFilter}) {
    return(
    <div >
    <button onClick={() => setActiveFilter("all")} className={activeFilter === "all" ? "filter-btn active" : "filter-btn"}>All</button>
    <button  onClick={() => setActiveFilter("food")} className={activeFilter === "food" ? "filter-btn active" : "filter-btn"}>Food</button>
    <button  onClick={() => setActiveFilter("transport")} className={activeFilter === "transport" ? "filter-btn active" : "filter-btn"}>Transport</button>
    <button  onClick={() => setActiveFilter("entertainment")} className={activeFilter === "entertainment" ? "filter-btn active" : "filter-btn"}>Entertainment</button>

    
        </div>
    )
}

export default ExpenseFilter;