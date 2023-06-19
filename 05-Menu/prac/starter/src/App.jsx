import { useState } from 'react';
import data from './data'
import { Menu } from './Menu';
import { Navigate } from './Navigate';
import { Title } from './Title';


const carItem = data.map((item)=> item.category)
const beforeCat = new Set(carItem)
const newArray = ['All',...beforeCat]

const App = () => {
  const [things,setThings] = useState(data)
  const [cat,setCat] =useState(newArray)

  const findCat =(category)=>{
   const filt = data.filter((item)=>item.category === category)
   if(category === 'All') {
    setThings(data)
    return
   }
   setThings(filt)
   
  }
  return (
    <main>
      <section className='menu'>
        <Title/>
        <Navigate cat = {cat} findCat={findCat}/>
        <Menu things= {things}/>
      </section>
    </main>
  )
   
};
export default App;

