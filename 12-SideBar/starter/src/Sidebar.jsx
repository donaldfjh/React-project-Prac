import React from 'react'
import logo from './logo.svg'
import { useGlobalContext } from './context'
import { social,links } from './data'
import { FaTimes } from 'react-icons/fa'
export const Sidebar = () => {
    const {isSideBarOpen,closeSideBar}= useGlobalContext()
  return (
   <aside className={isSideBarOpen ? 'sidebar show-sideBar':'sidebar'}>
    <div className="sidebar-header">
        <img src={logo} alt = 'coding' className='logo'/>
        <button className='close-btn' onClick={closeSideBar}>
            <FaTimes/>
        </button>
    </div>
    <ul className="links">
        {links.map((link)=>{
            const {id,url,text,icon} = link
            return(
                <li key={id}>
                    <a href={url}>{icon}{text}</a>
                </li>
            )
        })}
    </ul>
    <ul className="social-links">
        {social.map((item)=>{
            const {id,url,icon} = item
            return(
                <li key={id}>
                    <a href={url}>{icon}</a>
                </li>
            )
        })}
    </ul>
   </aside>
  )
}
