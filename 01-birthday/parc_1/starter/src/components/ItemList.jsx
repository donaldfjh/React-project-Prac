import ItemPhoto from "./ItemPhoto";


const ItemList=(props)=>{
    const {people} = props
    console.log(people)
    return(
       <section>

        {people.map((item)=>{
           return <ItemPhoto key = {item.id} {...item}/>
        })}

       </section>
    )
      
}


export default ItemList;