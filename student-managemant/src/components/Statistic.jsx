
function Statistic({students}){
    return(
        <div className="card">
            <h2>Total student: <span>{students.length}</span></h2>
            <h2>Failed: <span>{students.filter((student) => student.result === "Failed").length}</span></h2>
            <h2>Passed: <span>{students.filter((student) => student.result === "Passed").length}</span></h2>
        </div>
    )
}

export default Statistic;