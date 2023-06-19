import { useState } from "react";

const Tour =({id,name,info,price,image,removeItem})=>{
    const [readMore,setReadMore] =  useState(false)
    return(
        <article className="single-tour">
            <img src={image} alt={name} className = 'img'/>
            <span className="tour-price">${price}</span>
            
            <div className="tour-info">
                <h5>{name}</h5>
                <p onClick={()=>setReadMore(!readMore)}>{`${readMore ? info : info.substring(0,200)}`}...
                <button className="info-btn">{`${readMore? 'Show less':'Read More'}`}</button></p>
                
                <button className="btn btn-block delete-btn" onClick={()=>removeItem(id)}>not insterested</button>
            </div>

        
            
        </article>
    )
}

export default Tour;