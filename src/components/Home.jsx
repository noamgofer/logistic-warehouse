import React from 'react'
import { Link } from 'react-router-dom'

export default function Home() {
  return (
    <div className='homePage'>
        <h1 className='HomePageHeader'>Logistics Management</h1>
        <Link to='/signin'><button className='homeBtn'>Sign Up</button></Link>
        <br />
        <Link to='/login'><button className='homeBtn'>Log In</button></Link>
    </div>
  )
}
// regex