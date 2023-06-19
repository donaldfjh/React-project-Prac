import { useState } from "react";
import Tour from "./Tour";
const Tours= ({tours,removeItem})=>{
    
    return (
        <section>
            <div className="title">
                <h2>Tours</h2>
                <div className="title-underline">

                </div>
            </div>
            <div className="tours">
                {tours.map((item)=>{
                    console.log(item)
                    return <Tour key={item.id} {...item} removeItem ={removeItem}/>
                })}
            </div>
        </section>
    )
}

export default Tours;