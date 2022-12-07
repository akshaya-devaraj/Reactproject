
import React , {useEffect, useState}from 'react'

function HooksEx() {
    const[count,set]=useState(0)
    useEffect(()=>{
        document.title="aksh";
        console.log({count})
    }
    )
  return (
    <div>
    <h1>{count}</h1>
    <button onClick={()=>{set(count+1)}}>Click</button>
    <br/><button onClick={()=>{set(count-1)}}>min 1</button>
    <br/><button onClick={()=>{set(count+5)}}>max 5</button>
    </div>
  )
}

export default HooksEx