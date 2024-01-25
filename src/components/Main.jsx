import React from 'react'
import Product from './Product'
import { Link } from 'react-router-dom'

export default function Main(props) {
  const fullNameSplit=props.currentUser.name.split(" ")

//   const changePlaceStatus=()=>{ props.setProducts(!props.val.onPlace)}
  const partsOnPlace=props.products.filter(val=>val.onPlace===false)
  
 


  return (
    <div className='main'>
        <div className='mainHeader'>
        <h1>WELCOME {fullNameSplit[0].toUpperCase()}!</h1>
        </div>

        <div className='detailsDiv'>
        <h4>details: <br/>  full name: {props.currentUser.name} <br /> NO.{props.currentUser.number} <br /> forklift license: {props.currentUser.forklift? "yes" : "no" }</h4>
        </div>
        <hr />
        
        <div className='productDiv'>
            <h3>List Of Products</h3>

          <div className='tasksList'>
          {partsOnPlace.map((val, index) => (
          <Product key={index} val={val} index={index} products={props.products} setProducts={props.setProducts} currentUser={props.currentUser}   />
  ))}
          </div>
          <Link to={'/'}> <button className='logOutBtn'>Log Out</button></Link>
        </div>


    </div>
  )
}
