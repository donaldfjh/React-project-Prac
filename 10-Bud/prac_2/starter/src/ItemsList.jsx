import React from 'react'
import { SingleItem } from './SingleItem'

export const ItemsList = ({items , removeItem,changeState}) => {
    console.log(items)
  return (
    <div className='items'>
       {items.map((item)=>{
            return <SingleItem item ={item} key = {item.id} removeItem={removeItem} changeState={changeState} />
       })}
    </div>
  )
}
