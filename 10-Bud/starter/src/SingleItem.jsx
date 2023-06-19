import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const SingleItem = ({item,removeItem,editItem}) => {
    
    const removeHandler=()=>{
        try {
            removeItem(item.id)
            toast.success('Remove Item sucess')
        } catch (error) {
            toast.error('No item need to remove')
        }
        
    }
  return (
   <div className='single-item' >
        <input type="checkbox" onClick={()=>editItem(item.id)} checked={item.completed}/>
        <p style={{textTransform : 'capitalize',textDecoration : item.completed && 'line-through'}}>{item.name}</p>
        <button onClick={removeHandler} className = 'btn remove-btn'>Delete</button>
   </div>
  )
}
