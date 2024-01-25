import React from 'react'

export default function TableRaw(props) {
  return (
    ///* div was removed//
        <tr>
            <td>{props.val.number}</td>
            <td>{props.val.name}</td>
            <td>{props.val.logCounter}</td>
            <td>{props.val.finishTaskCounter}</td>
        </tr>
    
  )
}
