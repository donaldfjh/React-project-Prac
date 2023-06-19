import React from 'react'
import { useGlobalContext } from './context'
import { FaBars } from 'react-icons/fa';
export const Home = () => {
    const {openSideBar,openModal} = useGlobalContext();
    console.log(openSideBar)
  return (
    <main>
        <button onClick={openSideBar} className = 'sidebar-toggle'>
            <FaBars/>
        </button>
        <button onClick={openModal} className = 'btn'>show Modal</button>
    </main>
  )
}
