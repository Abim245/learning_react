function Student(props){

    const students = [
  { id: 1, name: "Binta", score: 90 },
  { id: 2, name: "David", score: 40 },
  { id: 3, name: "Ada", score: 75 }
]
    return (
        <div>
                {students.map((student) => (
            <div key={student.id}>
            <h2>{student.name}</h2>
            <p>Score: {student.score}</p>
            {student.score >= 50 ? (
                <p style={{ color: "green" }}>Passed</p>
            ) : (
                <p style={{ color: "red" }}>Failed</p>
            )}
            </div> ))};
        </div>
    

    )
}

export default Student;