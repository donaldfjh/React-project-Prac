import { nanoid } from "nanoid";
import { useState } from "react";
import { Form } from "./Form";
import { ItemsList } from "./ItemsList";
import { ToastContainer} from 'react-toastify';

const setLocalStorage = (items)=>{
  localStorage.setItem('list',JSON.stringify(items))

}

const getLocalStorage=()=>{
  let list = localStorage.getItem('list',)
  if(list){
    list = JSON.parse(localStorage.getItem('list'))
  }else{
    list = [] 
  }
  return list
}
const App = () => {
  const [items,setItems] = useState(getLocalStorage)

  const addHandler = (itemName)=>{
    const newItem ={
      name:itemName,
      id:nanoid(),
      completed:false
    }
    const final = [...items,newItem]
    setItems(final)
    setLocalStorage(final)
  }

  const removeItem=(itemId)=>{
    const newItems = items.filter((item)=>item.id != itemId)
    setItems(newItems)
    setLocalStorage(newItems)
  }

  const changeState=(itemId)=>{
    const finalState = items.map((item)=>{
      if(item.id == itemId){
        const newState = {...item,completed: !item.completed}
        return newState
      }else{
        return item
      }
    })
    setItems(finalState)
    setLocalStorage(finalState)
  }

  return (
    <section className="section-center">
      <Form addHandler={addHandler}/>
      <ItemsList items={items} removeItem = {removeItem} changeState={changeState}/>
      <ToastContainer position="top-center"/>
    </section>
  );
};

export default App;
