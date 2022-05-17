import React from 'react'
import { useState } from "react";

export const Counter = () => {
    
    const [count,setCount]=useState(0);
    const sor={
      color:"green"
    }
    
    let cou=count
    console.log(count)
    if(cou%2!=0){
      sor.color="red"

    }
     

  return (
   
    <div>
        
        <h1>Conter App:<span style={sor}>{count}</span></h1>
      

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
