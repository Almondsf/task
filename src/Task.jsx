import {FaTimes} from 'react-icons/fa'

const Task = ({task, onDelete, onToggle}) => {
    return ( 
        <div className={`task ${task.reminder ? 'reminder' : ''}`} onDoubleClick={(id)=>onToggle(task.id)}>
            <h4>{task.text} <FaTimes style={{color:'red', cursor:'pointer', display:'flex', marginLeft:'auto'}} onClick={()=>onDelete(task.id)}/></h4>
            <p>{task.day}</p>
        </div>
     )
}
 
export default Task;