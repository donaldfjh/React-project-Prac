import React from 'react'
import sublinks from './data'
import { FaTimes } from 'react-icons/fa'
import { useGlobalContext } from './context'
export const SideBar = () => {
    
    const {isSideBarOpen , closeSideBar} = useGlobalContext()
  return (
    <aside className={isSideBarOpen?'sidebar show-sidebar': 'sidebar'}>
        <div className='sidebar-container'>
            <button className='close-btn' onClick={closeSideBar}>
                <FaTimes/>
            </button>
            <div className='sidebar-links'>
                {sublinks.map((item)=>{
                    const {links,page,pageId} = item
                    return(
                        <article key={pageId}>
                            <h4>{page}</h4>
                            <div className="sidebar-sublinks">
                                {links.map((item)=>{
                                    const {id,label,icon,url} = item
                                    return(
                                        <a href={url} key = {id}>{icon}{label}</a>
                                    )
                                })}
                            </div>
                        </article>
                    )
                })}
            </div>
        </div>
    </aside>
  )
}
