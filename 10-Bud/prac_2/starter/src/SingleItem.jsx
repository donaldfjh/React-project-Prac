import React from 'react'
import { toast } from 'react-toastify'

export const SingleItem = ({item,removeItem,changeState}) => {
    const removeHandler =()=>{
        try {
            removeItem(item.id)
            toast.success('Delete item success')
        } catch (error) {
            toast.error('item cannot delete')
        }
    }
  return (
    <div className='single-item'>
        <input type="checkbox" onChange={()=>changeState(item.id)} checked={item.completed}/>
        <p style={{textDecoration:item.completed && 'line-through', textTransform:'capitalize'}}>{item.name}</p>
        <button className='btn' onClick={removeHandler}>Delete</button>
    </div>
  )
}
