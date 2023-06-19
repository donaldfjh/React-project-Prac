import React from 'react'
import { SingleItem } from './SingleItem'
import { nanoid } from "nanoid";
export const Items = ({items,removeItem, editItem}) => {
  return (
    <div className='items'>
        {items.map((item)=>{
            return(
                <SingleItem key={item.id} item={item} removeItem = {removeItem} editItem={editItem}/>
            )
        })}
    </div>
  )
}
