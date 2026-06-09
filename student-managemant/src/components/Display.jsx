
function Display({ students, activeFilter }) {
  let filteredStudents;
  if (activeFilter === "all") {
    filteredStudents = students
  } else {
    filteredStudents = students.filter((student) => student.result === activeFilter)
  }
  return (
    <div className="card">
      {filteredStudents.map((student, index) => (
        <div key={index} className="student-list">
          <p>{student.name}</p>
          <p>{student.score}</p>
          <p>{student.result}</p>
        </div>
      ))}
     </div>
  );
}

export default Display;