import React from 'react'

const TableData = (props) => {
  return (
    <>
        <tr>
                <td>{props.sr+1}</td>
                <td>{props.ticker}</td>
                <td>{props.data.o}</td>
                <td>{props.data.h}</td>
                <td>{props.data.l}</td>
                <td>{props.data.c}</td>
                <td>{props.data.vw}</td>
                
                </tr>
           
    </>
  )
}

export default TableData
