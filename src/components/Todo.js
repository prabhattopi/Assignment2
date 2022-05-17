import React, { useState } from 'react'

export const Todo = () => {
   const [value, setValue] = useState("")
   const [todos, setTodos] = useState([])
  return (
    
    <div>
    Todo
    <input type="text" value={value} onChange={(e)=>{setValue(e.target.value)}} />
    <button onClick={()=>{
        setTodos([...todos],{value:value});
        setValue("")

    }}>Add</button>
    {
        todos.map((todo)=>(
            <div>{todo.value}</div>
        ))}

        
    



    </div>
  );
}
