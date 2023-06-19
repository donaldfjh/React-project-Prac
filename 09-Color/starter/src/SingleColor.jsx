import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify';

export const SingleColor = ({color,index}) => {
    const {hex,weight} = color;
    const saveTo = async()=>{
        if(navigator.clipboard){
            try {
                await navigator.clipboard.writeText(`${hex}`)
                toast.success('Color copied')
            } catch (error) {
                toast.error('Fail to copied')
            }
        }
        else{
            toast.error('Clipboard access is not available')
        }
    }
  return (
    <article className={index > 10 ? 'color color-light' : 'color'} style={{background:`#${hex}`}} onClick = {saveTo}>
        <p className='percent-value'>{weight}% </p>
        <p className='color-value'>#{hex}</p>
    </article>
  )
}
