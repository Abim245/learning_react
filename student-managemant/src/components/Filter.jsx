
function Filter({activeFilter, setFilter}) {
    return(
        <div className="card filter-container">
        <button onClick={() => setFilter("all")} className={activeFilter === "all" ? "filter-btn active" : "filter-btn"}>All</button>
      <button  onClick={() => setFilter("Passed")} className={activeFilter === "Passed" ? "filter-btn active" : "filter-btn"}>Passed</button>
      <button  onClick={() => setFilter("Failed")} className={activeFilter === "Failed" ? "filter-btn active" : "filter-btn"}>Failed</button>
    
        </div>
    )
}

export default Filter;