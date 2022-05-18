import React from 'react'
import { useState } from "react";
import "../App.css"

export const Counter = () => {
    
    const [count,setCount]=useState(0);
 

  return (
   
    <div>
        
        <h1>Conter App:<span classname ={ count%2==1?"red":"green"}>{count}</span></h1>
      

        <button onClick={()=>{setCount(count + 1)
         
      
        }}>Increment</button>
        <button onClick={()=>{
            if(count>0)setCount(count - 1)}}>Decrement</button>
            <button onClick={()=>{
              setCount(count*2)
            }}>Double The Value</button>
            
   
    </div>
  )
}
