import { useState } from 'react';
import data from './data'
import { Questions } from './Questions';

const App = () => {
  const [activeId,setactiveId] = useState(null)

  const toggleQuestion =(id)=>{
    if(id !== activeId){
      setactiveId(id)
    }
    if(id ===activeId){
      setactiveId(null)
    }
  }

  return (
    <main>
      <div className='container'>
        <h1>Question ask you</h1>
        <Questions data = {data} toggleQuestion={toggleQuestion} activeId = {activeId}/>
      </div>
    </main>
  )
};
export default App;
