import React from 'react'

export const SingleItem = ({title,price,img,desc}) => {
  return (
    <article>
        <div className='section-center'>
            <div className='menu-item'>
                <img src={img} alt={title} className = "img"/>
                <div className='item-info'>
                    <header>
                         <h5>{title}</h5>
                         <span className='item-price'>{price}</span>
                         <p className='item-text'>{desc}</p>
                    </header>
                    

            </div>
        </div>
        

    </div>
        
    </article>
  )
}
