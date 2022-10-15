import { useState } from "react";
import AddTask from "./AddTask";
import './App.css';
import Header from './Header';
import Tasks from './Tasks';

const App = () => {
  const [showAddTask, setShowAddTask] = useState(!true)
  const [tasks, setTasks] = useState(
    [
        {
            id:1,
            text:'Doctor`s Appointment',
            day:'Feb 5th at 2:30pm',
            reminder:'true',
        },
        {
            id:2,
            text:'Meeting at School',
            day:'Feb 6th at 1:30pm', 
            reminder:'true',
        },
        {
            id:3,
            text:'Food Shopping',
            day:'Feb 5th at 2:30pm',
            reminder:'false',
        },
    ]
)
//addtask
const addTask = (task) =>{
  const id = Math.floor(Math.random()* 10000)+1
  const newTask = {id,  ...task}
  setTasks([...tasks, newTask])
}
//delete task
const deleteTask = (id) => {
   setTasks(tasks.filter((task)=>task.id !== id))
}
const toggleReminder = (id) =>{
  setTasks(tasks.map((task)=> task.id===id ? {...task, reminder : !task.reminder} : task))
}
  return (
    
    <div className="container">
      <Header onAdd = {() => setShowAddTask(!showAddTask)} showAdd={showAddTask}/>
      {showAddTask && <AddTask onAdd={addTask}/>}
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder}/> : 'No Tasks to Show' }   
    </div>
  );
}

export default App;
