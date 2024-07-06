const TodoItem = ({item, todos,setTodos}) => {
  function removeHandler(item){
    const remove=todos.filter((todo)=>todo!==item)
    setTodos(remove)
  }
  function clickHandler(name){
    const done=todos.map((todo)=>todo.name===name ? {...todo,done:!todo.done}:todo)
    setTodos(done)

  }
   const complete= item.done? "line-through" :""
  return (
    <div className="flex m-auto mt-5 border-solid border-2 border-black w-80">
      <h1   onClick={()=>clickHandler(item.name)}  className={`text-2xl font-bold w-72 ${complete}`}>{item.name}</h1>

 
      <button className="border-solid border-2 border-black ml-3 bg-blue-950 text-yellow-100 px-2" onClick={()=>removeHandler(item)}>Remove</button>
    </div>
  )
}
export default TodoItem