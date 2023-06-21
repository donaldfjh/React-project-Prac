import React from 'react'
import { useGlobalContext } from './context'
import data from './data'
import { useRef } from 'react'
export const Submenu = () => {
  const {pageId,setPageId} = useGlobalContext()
  const currentPage = data.find((item)=>item.pageId === pageId)
  const submeuContainer =useRef(null)

  const handleMouseLeave = (event)=>{
    const submenu  = submeuContainer.current
    const {right,left,bottom} = submenu.getBoundingClientRect()
    const {clientX,clientY} = event;
    if(clientX < left || clientX > right || clientY > bottom){
      setPageId(null)
    }
    
  }
  
  return (
    <div className={currentPage?'submenu show-submenu':'submenu'} 
    onMouseLeave={handleMouseLeave}
    ref = {submeuContainer}
    >
      <h5>{currentPage?.page}</h5>
      <div className="submenu-links" 
      style={{gridTemplateColumns: 
      currentPage?.links?.length > 3 ? '1fr 1fr' : '1fr',
      }}>
        {currentPage?.links?.map((item)=>{
          const {id,url,label,icon} = item
          return (
            <a href={url} key={id}>{icon}{label}</a>
          )
        })}
      </div>
    </div>
  )
}
