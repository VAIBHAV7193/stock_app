import React, { useState } from 'react'
import './Form.css'
import axios from 'axios'

const Form = (props) => {

    const [name,setName] = useState("");
    const [date,setDate] = useState("")
    

    const submitHandler = async(e)=>{
        try{
            e.preventDefault();

            const data = {
                name:name,
                date:date
            }
            console.log(data);
            const res = await axios.post(`http://localhost:5001/api/fetchStockData`,data);
            console.log(res);
            if(res && res.data.success){

                 localStorage.setItem('auth',JSON.stringify(res.data));
                

            }

            else{
                console.log(res.data.message)
            }
            setDate("");
            setName("")

        }
        catch(err){
            console.log(err)
        }
       
        
    }
    
   
  return (
    <div className='expence'>
      <form onSubmit={submitHandler}>
        <div className="contols-main">
          <div className="control">
            <label htmlFor="">Title</label>
            <input type="text" value={name} onChange={(e)=> setName(e.target.value)} />
          </div>
         
          <div className="control">
            <label htmlFor="">Date</label>
           <input type="date" name="" id=""  value={date} onChange={(e)=> setDate(e.target.value)}  />
          </div>
          </div>
          <div className="actions">
             
              <button type="submit" >Add Expence</button>
           </div>
       
      </form> 
    </div>
  )
}

export default Form
