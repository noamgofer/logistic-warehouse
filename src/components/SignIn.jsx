import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'


export default function SignIn(props) {
    const [number,setNumber]=useState("")
    const [name,setName]=useState("")
    const [forkliftLsn,setForkliftLsn]=useState(false)
    const [logCounter,setLogCounter]=useState(0)
    const [finishTaskCounter,setFinishTaskCounter]=useState(0)
    const nav=useNavigate()

    const numberLesThen5=()=>{
        if(number.length>0){
        if(number.length<5){
            return <p style={{color:"#50234c"}}>the number must be with 5 digits.</p>
        }}
    }
    const nameValidation=()=>{
        if(name.length>0){
        if(name.includes(" ")===false||isNaN(name)===false||name.length<5){
            return <p style={{color:"#50234c"}}>the name must contain minimum 4 characters.</p>
        }}
    }


    const signInValidation=()=>{
      
        // if(number.length<5){
        //     alert("the number must be with 5 digits.")
        // }
        // else if(name.includes(" ")===false||isNaN(name)===false||name.length<5){
        //     alert("the name must contain minimum 4 characters.")
        // }
        
            const userExist=props.workers.some(e=>e.number===number)
            if(userExist){
                alert("user is already exist in system")

            }else{
                let temp={
                    number:number,
                    name:name,
                    forklift:forkliftLsn,
                    logCounter:logCounter,
                    finishTaskCounter:finishTaskCounter
                }
            props.setWorkers([...props.workers,temp])
            nav('/')
            }
        
         
    }

    const forkLiftTrueToFalse=()=>{
    if(forkliftLsn){setForkliftLsn(false)}
    }
    const forkLiftFalseToTrue=()=>{
        if(!forkliftLsn){setForkliftLsn(true)}
    }

  return (
    <div className='signUpDiv'>
<h1>Sign Up</h1>
<div className='inputBox'>
        <label >No.</label>
        <input type="text"  onChange={e=>{setNumber(e.target.value)}} />
        {numberLesThen5()}
        <br />
        <label >fullName</label>
        <input type="text"  onChange={e=>{setName(e.target.value)}} />
        {nameValidation()}
        <br />
        </div>
        <h4>Forklift Truck:  </h4>
        
        
        <label >no</label>
        <input name='radio' type="radio" className='radio' onClick={forkLiftTrueToFalse} defaultChecked />
        <label>    yes</label>
        <input name='radio' type="radio" className='radio' onClick={forkLiftFalseToTrue} /><br />
        <button onClick={signInValidation}>Create</button>


        
    </div>
  )
}
