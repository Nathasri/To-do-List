import { useState } from 'react';
import './App.css';

function App() {

  const [date,setDate]=useState("");
  const [work,setWork]=useState("");
  const [states,setStates]=useState(true);
  const [tasks, setTasks] = useState([]);
  
  const lists=()=>{
    if(date.trim()===" " || work.trim()===" "){
      alert("Please enter the date and work ")
      return;
    }
    const newTask = { date, work };
    setTasks([...tasks, newTask]);
    setDate('');
    setWork('');
    setStates(true);

  }

  const remove=(index) =>{
    
    setTasks((previousTask)=>
    previousTask.filter((tasks,i) => i!==index)

    )
  }

  return (
    <>
    <h1>To Do List</h1>
    <div className="enter">
      <input type="date" value={date} placeholder="Date" className="date" onChange={(e)=>setDate(e.target.value)}/><br></br>
      <input type="text" value={work} placeholder="Work to do" className="work" onChange={(e)=>setWork(e.target.value)}/><br></br>
      <button className="add" onClick={lists}>Add Work</button>
    </div>
    <br></br>

    <div className="output">
      <>
      <h1>Task list</h1>
      <ul className='ul'>
          {states && tasks.map((task, index) => (
            <li className='l1' key={index}>
             <p>{task.date}</p>  <br/>
               <h3>{task.work}</h3><br/>
               <button className='com' onClick={()=> remove(index)}>Complete</button>
            </li>
          ))}
      </ul>
      </>
    </div>
    </>
  );
}

export default App;
