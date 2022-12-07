import React, { useState } from 'react'

function FormEx() {
  const [UserName,setUserName]=useState('');
  const [password,setPassword]=useState('');
  const formHandler=(eve)=>
  {
    eve.preventDefault();
    const loginObj={
      name:UserName,
      pwd:password
    }
    console.log(loginObj);
    alert(JSON.stringify(loginObj));
  }
  
  return (
    <div>
   <h3>LOGIN PAGE</h3>
   <form onSubmit={formHandler}>
   Username :<input type="text" value={UserName}  placeholder="User Name" onChange={(e)=>setUserName(e.target.value)}/><br/>
   Password :<input type="password" value={password} placeholder="Password" onChange={(e)=>setPassword(e.target.value)}/><br/>
   <button type="submit">Login</button>
   </form>
    </div>
  )
}

export default FormEx