import { useState } from "react";
import Display from "./components/Display";
import Student from "./components/Student";
import Filter from "./components/Filter";
import Statistic from "./components/Statistic";


function App(){

  const [ students, setStudents] = useState([]);
  const [ activeFilter, setFilter ] = useState("all");
  function addStudent(newStudent){
    setStudents([...students, newStudent]);
  }

  return(
    <div className="app">
      <Student addStudent={addStudent}/>
      <Display students={students} activeFilter={activeFilter} />
      <Filter setFilter={setFilter} activeFilter={activeFilter} />
      <Statistic students={students} />
    </div>
  )
}

export default App;