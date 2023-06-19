import { nanoid } from "nanoid";
import { useState } from "react";
import { Form } from "./Form";
import { ToastContainer, toast } from 'react-toastify';
import { Items } from "./Items";

// const getLocalStorage = ()=>{
//   let list = localStorage.getItem('list')
//   if(list){
//     list = JSON.parse(localStorage.getItem('list'))
//   }
//   else{
//     list =[]
//   }
//   return list
// }

const setLocalStorage =(items)=>{
  localStorage.setItem('list',JSON.stringify(items))
}
const defaultList =JSON.parse(localStorage.getItem('list') || '[]')
const App = () => {
  
  const [items,setItems] = useState(defaultList)
  const addItem = (itemName)=>{
    const newItem = {
      name:itemName,
      completed:false,
      id:nanoid()
    }
    const totalNew = [...items,newItem]
    setItems(totalNew)
    setLocalStorage(totalNew)
    
  }
  const removeItem =(itemId)=>{
    const newItem = items.filter((item)=> item.id != itemId)
    setItems(newItem)
    setLocalStorage(newItem)
  }

  const editItem =(itemId)=>{
    const newItems = items.map((item)=>{
      if(item.id === itemId){
        const newItem = {...item, completed:!item.completed}
        return newItem
      }
      return item
    })
    setItems(newItems)
    setLocalStorage(newItems)
  }
  return (
    <section className="section-center">
      <Form addItem={addItem}/>
      <ToastContainer position = 'top-center'/>
      <Items items= {items} removeItem= {removeItem} editItem={editItem}/>
    </section>
  );
};

export default App;
