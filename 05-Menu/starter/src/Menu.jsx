import React from 'react'
import { MenuItem } from './MenuItem'

export const Menu = ({menu,filterCat,filt}) => {
  return (
    <div className='section-center'>
        
        {menu.map((item)=>{
            return <MenuItem key={item.id} {...item} filterCat={filterCat} filt = {filt}/>
        })}
        
    </div>
    
  )
}
