import React from 'react'
import { useState } from "react";

export const Counter = () => {
    
    const [count,setCount]=useState(0);
  return (
    <div>
        <h1>Conter App:{count}</h1>
        <button onClick={()=>{setCount(count + 1)}}>Increment</button>
        <button onClick={()=>{
            if(count>0)setCount(count - 1)}}>Decrement</button>
   
    </div>
  )
}
