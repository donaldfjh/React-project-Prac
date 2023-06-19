import React from 'react'

export const Title = ({title}) => {
  return (
    <div className='title'>
        <h1>{title || 'Our Menu'}</h1>   
        <div className="title-underline"></div>
    </div>
  )
}
