import { useState } from "react";
import TaskItem from "./TaskItem";
import { useEffect }  from "react";
import "./App.css";

function App(){

  const [tasks, setTasks] = useState(() => {
    const saved = localStorage.getItem("tasks");
    return saved ? JSON.parse(saved) : [];
  });

    useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
    },[tasks]);
  const [input, setInput] = useState([]);
  const completedCount = tasks.filter(t => t.completed).length;
  function editTask(index, newText){
    const newTexts = tasks.map((t, idx)=>{
      if(idx === index){
        return {...t, text : newText};
      } return t;

    });
    setTasks(newTexts);
  }
  const [filter, setFilter] = useState("all");

    const filteredTasks = tasks.filter(task => {
  if(filter === "completed") return task.completed;
  if(filter === "pending") return !task.completed;
  return true;
});
  function toggleTask(index){

    const newTasks = tasks.map((t, idx) => {
    if(idx === index){
      return {...t, completed : !t.completed};
    }
      return t;
    })
    setTasks(newTasks);
    }

    function deleteTask(index){
     const newTasks = tasks.filter((_, idx) => idx !== index);
          setTasks(newTasks);
      }

  return(
    <div className="container">
      <h1> Task Tracker</h1>
       <input type="text"
    value = {input}
    onChange = {(e) => setInput(e.target.value)}
    placeholder = "Enter task" />
    <button onClick = {()=> {
            if(input.trim() === "")return;

      setTasks([... tasks, {text: input, completed: false}]);
      setInput("")
    }}
    >Add task </button>
    <ul>
      {filteredTasks.map((task, index) => (
        <TaskItem
        key = {index}
        task = {task}
        index = {index}
        toggleTask = {toggleTask} 
        deleteTask = {deleteTask}
        editTask = {editTask}
        />
        
      ))}
       <button onclick ={() => setFilter("all")}>
                All
            </button>
             <button onclick ={() => setFilter("completed")}>
                Completed
            </button>
             <button onclick ={( )=> setFilter("pending")}>
                Pending
            </button>
      {tasks.length === 0 && <p>No tasks yet ...</p>}
    </ul>
      <p>
        mood : {completedCount === 0? " confuse" :  completedCount < 3 ? "happy" : "sad"}
      </p>
      
    </div>
   
  
  )
}

export default App;