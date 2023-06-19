import React from 'react'
import { useState } from 'react'
import { toast } from 'react-toastify'

export const Form = ({addHandler}) => {
    const [items,setItems] = useState('')
    

    const SubHandler =(e)=>{
        e.preventDefault()
        if(!items){
            toast.error('Cannot enter empty value')
        }else{
            toast.success('task add sucess')
            addHandler(items)
        }
        
    }
  return (
    <div>
        <form type = "submit" onSubmit={SubHandler}>
            <h4>Bund</h4>
            <div className='form-control'>
                <input type="text" 
                className='form-input'                
                value={items}
                onChange = {(event)=>setItems(event.target.value)}
                />
                <button className='btn' type='submit'>Submit</button>
            </div>
        </form>
    </div>
  )
}
