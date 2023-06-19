import data from './data'
import { useState } from 'react'
import ItemList from './components/itemList';
const App = () => {
  const [people,setPeople] = useState(data)
  console.log(people)

  const CancelHandler=()=>{
    setPeople([])
  }
  return (
    <main>
    
      <section className='container'>
        <h2>Birthday Reminder - {people.length}</h2>
        <ItemList people = {people}/>
        <button onClick={CancelHandler} className = 'btn'>clear</button>
      </section>
        
    </main>
  )
};
export default App;
