import React from 'react'

export const Navigate = ({cat,findCat}) => {
  return (
    <div className='btn-container'>
        {cat.map((item)=>{
            return <button key={item} className = 'btn' onClick={()=>findCat(item)}>{item}</button>
        })}
    </div>
  )
}
