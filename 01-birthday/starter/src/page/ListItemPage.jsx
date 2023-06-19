import ItemPage from './ItemPage'
const ListItemPage = ({people})=>{
   
   
    return (
    <section>
       {people.map(item=>{
        return <ItemPage key={item.id} {...item}/>
       })}
    </section>
        
    )
}

export default ListItemPage;