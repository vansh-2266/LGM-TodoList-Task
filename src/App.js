import './App.css';
import { useState } from 'react';
import Task from './Task';
import "./TodoStyles.css"

function App() {

  const [todoTasks, setTodoTasks] = useState([]);
  const [task, setTask] = useState("");
 
  const grabTask = (event) =>{
    setTask(event.target.value);
    // console.log(task);
  }

  // const addTask = () => {
  //   const newTodosList = [...todoTasks, task];
  //   setTodoTasks(newTodosList);
  // }

  const addTask = () => {
    const taskObj = {
id: todoTasks.length === 0 ? 1 : todoTasks[todoTasks.length - 1].id + 1,
        taskName: task ,
        completed: false,
    };
    setTodoTasks([...todoTasks, taskObj]);
  }

  const deleteTask = (id) => {
    const newTodosList = todoTasks.filter( (task) => {
      return id !== task.id;
    })

    setTodoTasks(newTodosList);
  }

  const completeTask = (id) => {
    setTodoTasks(
      todoTasks.map((task) => {
        if(task.id == id){
          return {...task, completed: true };
        }
        else{
          return task;
        }
      })
    )
  }

  return (
    <div className="App">
      <h1 className='title-app'>Todos App</h1>
      <div className='addTask'>
          <input type= "text" onChange={grabTask}></input>
          <button onClick={addTask}> Add Task  </button>
      </div>
      <div className='list'>
        {todoTasks.map((task) => {
          return <Task 
          taskName = {task.taskName} 
          id = {task.id} 
          deleteTask = {deleteTask}
          completed= {task.completed}
          completeTask={completeTask}/>
        })}
      </div>

        

    </div>
  );
}

export default App;
