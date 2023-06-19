import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
  const [isLoading, setIsLoading] = useState(true)
  const [toursData,setToursData] = useState([])

  const removeItem = (id)=>{
     const newItem =  toursData.filter(item=>item.id !==id)
    setToursData(newItem)
  }

  const fetchData = async ()=>{
    setIsLoading(true)
    try {
      const response = await fetch(url)
      const data = await response.json()
      setToursData(data)
    } catch (error) {
      console.log(error)
    }
    setIsLoading(false)
  }

  useEffect(()=>{
    fetchData()
  },[])

  if(isLoading){
   return  <main>
      <Loading/>
    </main>
  }

  if(toursData.length ===0){
    return(
      <main className="title">
        <div>
          <h2>No tours Left</h2>
        </div>
        
        <button onClick={()=>fetchData()} className = 'btn'>refresh</button>
      </main>
    )
  }
  
  

  return <Tours data = {toursData} removeItem={removeItem}/>;
};
export default App;
