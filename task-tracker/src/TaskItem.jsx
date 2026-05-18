import {useState} from "react";

function TaskItem({task, index, toggleTask, deleteTask, editTask}){
    const [isEditing, setIsEditing] = useState(false);
    const [newText, setNewText] = useState(task.text);
    

    function handleSave(){
        if(newText.trim() === "")return;
        editTask(index, newText);
        setIsEditing(false);
    }
    return(
        
        <li>
            <input
            type = "checkbox"
            checked = {task.completed}
            onChange = {() => {toggleTask(index)}}/>
            {isEditing ? (
                    <> 
                    <input
                    value = {newText}
                    onChange = {(e) =>{setNewText(e.target.value)}}/>
                    <button
                        onClick = {handleSave}>Save</button>
                    <button
                        onClick = {() => {deleteTask(index)}}>Delete</button>

                    </>

                    ) : (
                <span
                style = {{textDecoration: task.completed ? "line-through" : "none"}}>{task.text}</span>
                
            )}
            <button
            onClick = {() => {deleteTask(index)}}>Delete</button>
            <button onclick ={() => setIsEditing(true)}>
                Edit
            </button>
            
        </li>
        )
        
}

export default TaskItem;