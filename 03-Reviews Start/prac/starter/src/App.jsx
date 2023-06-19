import { useState } from 'react';
import data from './data'
import {FaQuoteRight,FaChevronLeft,FaChevronRight} from 'react-icons/fa'
const App = () => {
  
  const [index,setIndex] = useState(0)
  const {name,id,image,job,text} = data[index]

  const prevHandler=()=>{
    const newIndex = (index + data.length -1) % data.length

    setIndex(newIndex)
    // setIndex(checkNumber(newIndex))
  }

  const nextHandler=()=>{
    const newIndex = (index + 1) % data.length
    setIndex(newIndex)
  }

  const changeRandomIndex = ()=>{
    let radomIndex = Math.floor(Math.random() * data.length) 
    if(radomIndex === index){
      radomIndex = radomIndex + 1
    }
    setIndex(checkNumber(radomIndex))
    
  }
  return (
    <main>
      <article className='review'> 
        
     
        <div className='img-container'>
        
        <img src={image} alt={name} className = 'person-img' />
        <span className='quote-icon'><FaQuoteRight/></span>
        </div> 
        <div>
          <h2 className='author'>{name}</h2>
          <p className='job'>{job}</p>
          <p className='info'>{text}</p>
        </div>
        <div className='btn-container'> 

        <button className='prev-btn' onClick = {prevHandler}><FaChevronLeft/></button>
        <button className='next-btn' onClick={nextHandler}><FaChevronRight/></button> 
          
        </div>

        <button type="button" className="btn btn-outline-primary" onClick={changeRandomIndex}>Suprice Me</button>
      </article>
    </main>
  )
};
export default App;
