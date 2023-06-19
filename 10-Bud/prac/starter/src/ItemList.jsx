import React from 'react'
import { SingleItem } from './SingleItem'

export const ItemList = ({items,changeState,removeItems}) => {
  return (
    <div className='items'>
        {items.map((item)=>{
            return <SingleItem item={item} key = {item.id} changeState={changeState} removeItems={removeItems}/>
        })}
    </div>
  )
}
