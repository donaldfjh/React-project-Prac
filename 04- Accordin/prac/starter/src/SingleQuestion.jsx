import React from 'react'
import { useState } from 'react'
import {AiOutlinePlus,AiOutlineMinus} from 'react-icons/ai'

export const SingleQuestion = ({id,title,info,activeId,toggleQuestion}) => {
    
    const newId = id === activeId
    return (
    <article>
        <div className='question'>
            <header>
                {title}
            </header>
            <p>{`${newId ? info : ''}`}</p>
            <button onClick={()=>toggleQuestion(id)}>{newId ? <AiOutlinePlus/> : <AiOutlineMinus/>}</button>
        </div>
    </article>
  )
}
