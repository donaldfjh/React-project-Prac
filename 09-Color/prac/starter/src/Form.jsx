import React from 'react'
import { useState } from 'react'

export const Form = ({addColor}) => {
    const [colors,setColors] = useState('#f6b73c')
    const handlerSub = (e)=>{
        e.preventDefault()
        addColor(colors)
    }
  return (
    <section className='container'>
        <h4>Color Generator</h4>
        <form onSubmit={handlerSub} className= 'color-form'>
            <input type="color" onChange={(e)=>setColors(e.target.value)} value={colors}/>
            <input type="text"
            value={colors}
            onChange = {(e)=>setColors(e.target.value)}
            placeholder = "#f6b73c"
            />
            <button className='btn' type='submit' style={{background:`${colors}`}}>Submit</button>
        </form>
    </section>
  )
}
