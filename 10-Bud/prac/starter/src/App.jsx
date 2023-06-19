import { nanoid } from "nanoid";
import { useState } from "react";
import { Form } from "./Form";
import { ItemList } from "./ItemList";

const setLocalStorage =(items)=>{
  localStorage.setItem('list',JSON.stringify(items))
}

const getLocalStorage = ()=>{
  let list = localStorage.getItem('list')
  if(list){
    list = JSON.parse(localStorage.getItem('list'))
  }else{
    list = []
  }
  return list
}

const App = () => {
  const [items,setItems] = useState(getLocalStorage)

  const changeState =(itemId)=>{
    const newItems = items.map((item)=>{
      if(item.id === itemId){
        const finalNew = {...item,completed:!item.completed}
        return finalNew
      }else{
        return item
      }
    })
    setItems(newItems)
    setLocalStorage(newItems)
  } 

  const removeItems=(itemid)=>{
    const newItems = items.filter((item)=>item.id != itemid)
    setItems(newItems)
    setLocalStorage(newItems)
  }

  const addItems =(itemName)=>{

    const newItem = {
      name:itemName,
      id:nanoid(),
      completed:false
    }
    const finalNew = [...items,newItem]
    setItems(finalNew)
    setLocalStorage(finalNew)
  }
  return (
    <section className="section-center">
      <Form addItems={addItems}/>
      <ItemList items={items} changeState={changeState} removeItems={removeItems}/>
    </section>
  )
};

export default App;
