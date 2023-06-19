import { useState } from 'react';
import data from './data'
import { Menu } from './Menu';
import { Nagivate } from './Nagivate';
import { Title } from './Title';



const tempCat = data.map((item)=>item.category)

const temSet = new Set(tempCat)
const temItems = ['all',...temSet]

const App = () => {

  const [menu,setMenu] = useState(data)
  const [filt, setfilt] = useState(temItems)
  const filterItems=(category)=>{
    if(category === 'all'){
      setMenu(data)
      return
    }
    const newArry = data.filter((item)=>
      item.category === category)
    setMenu(newArry)
  }

  // const filterCat = (category)=>{
  //   const newArray = menu.filter(()=>category === menu.category)
  //   setfilt(newArray)  

  // }
  
   // outPut : ['all', 'breakfast', 'lunch', 'shakes']

  return (
    <main>
      <section className='menu'>

        <Title text='our menu'/>
        <Nagivate  filt = {filt} filterItems={filterItems}/>
        <Menu menu = {menu}/>

      </section>
  
    </main>
  );

};
export default App;

