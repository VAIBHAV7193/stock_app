import React from 'react'
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';
import './Data.css'
import TableData from './TableData';

const Data = () => {

    const data = JSON.parse(localStorage.getItem("auth"));

    
    const ticker = data.data.ticker;
    console.log(ticker)
    console.log(data)
    console.log(data.data.queryCount)
    
  return (
    <div>
        <div className='stock'>
        <h1>Stock Charts</h1>
        </div>

        <div>
        <table>
            <thead>
                <tr>
                <th>Sr.No</th>
                <th>Ticker Name</th>
                <th>Open</th>
                <th>High</th>
                <th>Low</th>
                <th>Close</th>
                <th>Volume</th>
                </tr>
                </thead>
                <tbody>
                {
                    data.data.queryCount == 0 ? <h3 className='result'>No Result Found</h3> :

                    data.data.results.map((data,index)=>{
                        return(
                            <TableData key={index} data={data} sr={index} ticker={ticker} />

                        )
                    })

                   } 
                </tbody>
        </table>
        </div>
     

      
        
     
    </div>
  )
}

export default Data
