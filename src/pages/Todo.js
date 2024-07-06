import { useState } from "react"
import TodoItem from "../components/TodoItem"
import Total from "../components/Total"

const Todo = () => {
  const[todo,setTodo]=useState({name:"",done:false})
  const[todos,setTodos]=useState([])
  const handleSubmit=(e)=>{
    e.preventDefault();
    setTodos([...todos,todo])
    setTodo({name:"",done:false})
   

  }
  const completeTodo=todos.filter((todo)=>todo.done).length
  const totalTodo=todos.length
  const sortedTodos= todos.slice().sort((a,b)=>Number(a.done)-Number(b.done))
  
  return (
    <div>
      <form onSubmit={handleSubmit} className="flex justify-center items-center mt-6 ">
      <input className="border-solid border-2 border-black w-80" onChange={(e)=>setTodo({name:e.target.value,done:false})} type="text" value={todo.name} />
      <button className="border-solid border-2 border-black ml-3 bg-blue-950 text-yellow-100 px-5" >Add</button>


      </form>
      {sortedTodos.map((item)=><TodoItem key={item.name} item={item} todos={todos} setTodos={setTodos} />)}

      <Total completeTodo={completeTodo} total={totalTodo} />
      
      
    </div>
  )
}
export default Todo