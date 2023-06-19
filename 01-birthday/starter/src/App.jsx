import ListItemPage from "./page/ListItemPage";
import data from "./data";
import { useState } from "react";
const App = () => {
  const [people , setPeople] = useState(data)

  const clearHanlder =()=>{
    setPeople([])
  }

  return(
    <main>
      <section className="container">
      <h2>Birthday Reminder - Starter {people.length}</h2>
      <ListItemPage people ={people}/>
      <button onClick={clearHanlder} className='btn-block'>Clear</button>
      </section>
     
   
     </main>
  )
 
  
};
export default App;
