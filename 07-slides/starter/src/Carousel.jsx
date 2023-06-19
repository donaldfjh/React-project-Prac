import React from 'react'
import { useState } from 'react'
import {shortList,list,longList} from './data'
import {FaQuoteLeft} from 'react-icons/fa'
import {FiChevronRight,FiChevronLeft} from 'react-icons/fi'
import { useEffect } from 'react'
export const Carousel = () => {
    const [people,setPeople] = useState(list)
    const [currentId, setCurrentId]= useState(0)
    const prev=()=>{
        const newValue = (currentId - 1 + list.length) % list.length
        setCurrentId(newValue)
    }

    const next = ()=>{ 
       setCurrentId((old)=>{
        const newId = (old + 1 )% people.length
        return newId
       })
    }

    useEffect(()=>{
       let sliderId =  setInterval(()=>{
            next()
        },2000);
        return  ()=>{clearInterval(sliderId)}
    },[currentId])

    
  return (
   <section className='slider-container'>
    {people.map((person,personIndex)=>{
        const {id, image,name,title,quote} = person;
        return <article className='slide' style={{
            transform:`translateX(${100 * (personIndex-currentId)}%)`,
            opacity: personIndex === currentId? 1: 0,
            visibility: personIndex ===currentId ? 'visible' : 'hidden'
            
            
            }} key={id}>
            <img src={image} alt={name} className = "person-img" />
            <h5 className='name'>{name} </h5>
            <p className='title'>{title}</p>
            <p className='text'>{quote}</p>
            <FaQuoteLeft className='icon'/>
        </article>
    })}
    <button type = 'button' className='prev' onClick={prev}><FiChevronLeft/></button>
    <button type = 'button' className='next' onClick={next}><FiChevronRight/></button>
   </section>
  )
}
