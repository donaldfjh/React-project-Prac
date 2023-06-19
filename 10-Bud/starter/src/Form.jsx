import React, { useState } from 'react'
import {toast } from 'react-toastify';

export const Form = ({addItem}) => {
    const [newItem,setNewItem] = useState('');
    const handleSub=(e)=>{
        e.preventDefault();
        console.log(newItem) 
        if(!newItem){
            toast.error('Cannot Enter empty input')
        }else{
            toast.success('Enter complete')
            addItem(newItem)
            setNewItem('')
        }
       
    }
  return (
    <form onSubmit={handleSub}>
        <h4>Grocery bud</h4>
        <div className='form-control'>
            <input type="text" 
            className='form-input'  
            value={newItem} 
            onChange={(event)=>setNewItem(event.target.value)}/>
            <button className='btn' type='submit'>
                Add item
            </button>
        </div>
    </form>
  )
}
