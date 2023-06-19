import Tour from "./Tour";
const Tours=({data,removeItem})=>{

    return(
        <section>
            <div className="title">
            <h2>Our Tours</h2>
            <div className="title-underline">

            </div>
            </div>
            
            <div className="tours">
            {data.map((item)=>{
                return <Tour key={item.id} {...item} removeItem={removeItem}/>
                })}
            </div>
               
            
            
        </section>
    )
}
export default Tours;