import { useState } from "react";
import { ColorList } from "./ColorList";
import { Form } from "./Form";
import Values from 'values.js';
import { ToastContainer, toast } from 'react-toastify';
const App = () => {
  const [colors,setColors] = useState(new Values('#f6b73c').all(10))
  const addColor =(color)=>{
    console.log(color)
    setColors(new Values(`${color}`).all(10))
  }
  const copyHandler=async(f1)=>{
    if(navigator.clipboard){
      try {
        await navigator.clipboard.writeText(f1)
        toast.success('Color has been copy');
      } catch (error) {
        toast.error('Color is not found')
      }
    }else{
      toast.error('Cannot found module of navigator')
    }

  }
  return(
    <main>
       <Form addColor={addColor}/>
       <ColorList colors = {colors} copyHandler={copyHandler}/>
       <ToastContainer position="top-center"/>
    </main>
     
    
  )
};
export default App;
