import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function LogIn(props) {
  
    const [logNumber,setLogNumber]=useState("")
    const nav=useNavigate()
    

    const logInValidation=()=>{
        const userExist=props.workers.some(e=>e.number===logNumber)
        const userFind=props.workers.find((element) => element.number===logNumber)
        
        if(logNumber==="99999"){
            nav('/manager')
        }
        else if(!userExist){
            alert(`user no.${logNumber} is not exist in system. you should sign up`)
        }else{
            userFind.logCounter++
            props.setCurrentUser(userFind)
            nav('/main')
        }

    }

    return (
    
    <div className='logInDiv'>
        <h1>Log in</h1>
        <div></div>
        <label >No.</label>
        <input type="text" onChange={e=>setLogNumber(e.target.value)}  />
        <br />
        <button onClick={logInValidation}>Enter</button>

    </div>
  )
}
