import React from 'react'

const Task = (props) => {

    const CsOperation = {
        textDecoration: props.completed ? "line-through" : "none",
        background: props.completed ? "green" : "#555",
    } 

    return(
        <div className='todo-name-btns'>
               <h1 style={CsOperation}>{props.taskName}</h1>
               <button className='delete-btn' onClick={() => props.deleteTask(props.id)}> Delete</button>
               <button className='done-btn' onClick={() => props.completeTask(props.id)} > Done</button>
        </div>   
     )
}

export default Task;