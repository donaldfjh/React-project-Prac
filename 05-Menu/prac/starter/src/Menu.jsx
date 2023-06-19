import React from 'react'
import { SingleItem } from './SingleItem'

export const Menu = ({things}) => {
  return (
    <div>
        {things.map((item)=>{
            return <SingleItem key={item.id} {...item}/>
        })}
    </div>
  )
}
