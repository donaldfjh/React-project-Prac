import React from 'react'

export const Nagivate = ({filt,filterItems}) => {
  return (
    <div className='btn-container'>
        {filt.map((item)=>{
            return <button  
            type = "button" 
            className='btn' 
            key={item}
            onClick={()=>filterItems(item)}
            >
                {item}
            </button>
        })}
    </div>
  )
}
