
const Item =(props)=>{

    console.log(props)
    const {id,name,age,image} = props
    return(
        <article className="person">
            <img src={image} alt={name} className = 'img'/>
            <div>
                <h4>{name}</h4>
                <p>{age}</p>
            </div>
        </article>
    )
}
export default Item