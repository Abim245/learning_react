import { useState } from "react";

function Student({ addStudent }) {
  const [name, setName] = useState("");
  const [score, setScore] = useState("");

function handleSubmit() {
    let result = "";
      if (score >= 50) {
      result = "Passed"
    } else {
      result = "Failed"
    }
    addStudent({ name, score, result })

    setName("")
    setScore("")
}
  return (
    <div className="card student-form">
      <input
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder="Name"
      />

      <input
        value={score}
        onChange={(e) => setScore(e.target.value)}
        placeholder="Score"
      />

      <button onClick={handleSubmit} className="filter-btn active">
        Add Student
      </button>
    
    </div>
  );
}

export default Student;