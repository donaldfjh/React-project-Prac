import { useState } from 'react';
import { FaChevronLeft, 
  FaChevronRight,
  FaQuoteLeft,
  FaQuoteRight} from "react-icons/fa";
import data from './data'
const App = () => {
  const [index,setIndex]=useState(0)
  const {name,job,image,text} = data[index]
  const [readMore,setReadMore] = useState(false)
  
  const nextPerson=()=>{
    setIndex((currentIndex)=>{
      const newIndex = (currentIndex + 1) % data.length
      //always remember to return value, if you not do so, the index value will be undefine
      //the length is x but the index is x-1
      
      return newIndex
    })
  }

  const prevPerson=()=>{
    setIndex((currentIndex)=>{
      const newIndex = (currentIndex - 1+ data.length) % data.length
      //always remember to return value, if you not do so, the index value will be undefine
      return newIndex
    })
  }

  const randomPerson = ()=>{
    let ranDomNumber = Math.floor(Math.random() * data.length)
    if(ranDomNumber === index){
      ranDomNumber  = index + 1
    }
    const newIndex = ranDomNumber % data.length
    setIndex(newIndex)
   
  }



  

  return (
      <main>
        <article className='review'>
          <div className="img-container">
            <img src={image} alt={name} className='person-img'/>
            <span className='quote-icon'><FaQuoteRight/></span>
          </div>

          <h4 className='author'>{name}</h4>
          <p className='job'>{job}</p>
          <p className='info' onClick={()=>setReadMore(!readMore)}>{`${readMore ? text : text.substring(0,20)+'...'}`}</p>
          
          <div className='btn-container'>
            <button className='prev-btn' onClick={prevPerson}><FaChevronLeft/></button>
            <button className='next-btn' onClick={nextPerson}><FaChevronRight/></button>

          </div>

          <button className='btn btn-hipster' onClick={randomPerson}>Surprised me</button>
          <p>{index}</p>

        </article>
        
      </main>
  )
};
export default App;
