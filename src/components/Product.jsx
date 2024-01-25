import React from 'react'


export default function Product(props) {
    const changeProductStatus=()=>{
        if(props.val.forklift===true&&props.currentUser.forklift===false){
            alert("no forklift license")
        }else{
        props.setProducts([...props.products,props.val.onPlace = true])
        props.currentUser.finishTaskCounter++
    }
    }
    
  return (
    <div>
        <div className='singleProductDiv'>
            <p>NO. {props.val.id}</p>
            <p>Box Color: {props.val.color}</p>
            <p>Need Forklift Truck: {props.val.forklift?"yes" :"no"}</p>
            <button onClick={changeProductStatus}>update</button>
        </div>
        
    </div>
  )
}
