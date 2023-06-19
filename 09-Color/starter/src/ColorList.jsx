import { nanoid } from 'nanoid'
import React from 'react'
import {SingleColor} from './SingleColor'
export const ColorList = ({colors}) => {
  return (
    <section className='colors'>
        {colors.map((color,index)=>{
            return <SingleColor color = {color} key = {nanoid()} index = {index}/>
        })}
    </section>
  )
}
