import React from 'react'

export const ComButtom = ({jobs,currentItem,setCurrentItem}) => {
    console.log(jobs)
  return (
    <div className='btn-container'>
        {jobs.map((item,index)=>{
            return <button key={index} className={`${currentItem  === index? 'job-btn active-btn':'job-btn'}`}  onClick={()=>setCurrentItem(index)}>{item.company}</button>
        
            
        })}
    </div>
  )
}
