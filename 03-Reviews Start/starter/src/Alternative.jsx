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
      const newIndex = currentIndex + 1
      //always remember to return value, if you not do so, the index value will be undefine
      //the length is x but the index is x-1
      
      return checkNumber(newIndex)
    })
  }

  const prevPerson=()=>{
    setIndex((currentIndex)=>{
      const newIndex = currentIndex - 1
      //always remember to return value, if you not do so, the index value will be undefine
      
      return checkNumber(newIndex);
    })
  }

  const randomPerson = ()=>{
    let ranDomNumber = Math.floor(Math.random() * data.length)
    console.log(ranDomNumber+ 'RanDom')
    console.log(index + 'currentIndex')
    if(ranDomNumber === index){
      ranDomNumber  = index + 1
    }
    console.log(ranDomNumber + 'after')
    setIndex(()=>checkNumber(ranDomNumber))
   
  }

  console.log(index+ 'after render')

  const checkNumber=(number)=>{
    console.log('Checking....' + number)
    
    if(number > data.length -1){
      return 0
    }
    if(number < 0){
      return data.length -1
    }

    return number
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
