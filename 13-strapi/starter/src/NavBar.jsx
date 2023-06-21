import React from 'react'
import { useGlobalContext } from './context'
import {FaBars} from 'react-icons/fa'
import { NavLinks } from './NavLinks'
export const NavBar = () => {
    const {openSideBar,setPageId} = useGlobalContext()
    const handleSubMenu=(e)=>{
        if(!e.target.classList.contains('nav-link')){
            setPageId(null)
        }
    }
  return (
    <nav onMouseOver={handleSubMenu}>
        <div className='nav-center'>
            <h3 className='logo'>strapi</h3>
            <button className='toggle-btn' onClick={openSideBar}>
                <FaBars/>
            </button>
            <NavLinks/>
        </div>
    </nav>
   
  )
}
