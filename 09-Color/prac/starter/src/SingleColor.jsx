import React from 'react'

export const SingleColor = ({color,index,copyHandler}) => {
    const {weight,hex} = color
    const TransferHandler=()=>{
        copyHandler(`#${hex}`)
    }
  return (
    <article className='color color-light' style={{background:`#${hex}`}} onClick={TransferHandler}>
        <p className={index > 10 ? `color-value` : ''}>{`#${hex}`}</p>
        <p className={index > 10 ? `percent-value` : ''}>{`${weight}%`}</p>
    </article>
  )
}
