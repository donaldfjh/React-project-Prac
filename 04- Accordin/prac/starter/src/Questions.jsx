import React from 'react'
import { SingleQuestion } from './SingleQuestion'

export const Questions = ({data,toggleQuestion,activeId}) => {
  return (
    <div>
        {data.map((item)=>{
            return <SingleQuestion key= {item.id} {...item} toggleQuestion={toggleQuestion} activeId={activeId}/>
        })}
    </div>
  )
}
