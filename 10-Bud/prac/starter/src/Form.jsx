import React from 'react'
import { useState } from 'react'

export const Form = ({addItems}) => {
    const [item,setItem] = useState('')

    const submitHandler=(e)=>{
        e.preventDefault();
        console.log(item)
        addItems(item)
        setItem('')
    }
  return (
    <div>
        <form onSubmit={submitHandler}>
            <h4>Grocery Bud</h4>
            <div className='form-control'>
            <input type="text" 
            className='form-input'
            onChange={(event)=> setItem(event.target.value)}
            value={item}
            />
            <button className='btn' type='submit'>Submit</button>
            </div>
           
        </form>
    </div>
  )
}
