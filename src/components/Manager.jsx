import React from 'react'
import TableRaw from './TableRaw'
import { Link } from 'react-router-dom'

export default function Manager(props) {
  return (

    <div className='manager'>
      <h1>Manager</h1>
    
      <table className='table'>
        <tr>
        <th>NO.</th>
        <th>Full Name</th>
        <th>Logs</th>
        <th>Finish Tasks</th>
        </tr>
        {props.workers.map((val,index)=>(
          <TableRaw key={index} index={index} val={val}/>
        ))}
      </table>
      <br /><br /><br /><br />
      <Link to={'/'}><button>Log Out</button></Link>
      



    </div>
  )
}
