import React from 'react'

export const SingleItem = ({item,changeState,removeItems}) => {

   const finishHandler =()=>{
        changeState(item.id)
   }
   
  return (
    <div className='single-item'>
        <input type="checkbox" onClick={finishHandler}/>
        <p style= {{textDecoration:item.completed && 'line-through'}}>{item.name}</p>
        <button className='btn'onClick={()=>removeItems(item.id)}>Delete</button>
    </div>
  )
}
