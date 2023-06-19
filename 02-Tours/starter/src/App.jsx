import { useEffect } from "react";
import { useState } from "react";
import Loading from "./Loading";
import Tours from "./Tours";

const url = 'https://course-api.com/react-tours-project';

const App = () => {
    const [isLoading, setIsLoading] =useState(true)
    const [tours,setTours]= useState([])
    const removeItem =(id)=>{
      const newTour = tours.filter((tour)=> tour.id !== id)
      setTours(newTour)
    }

      const fetchData = async()=>{
        setIsLoading(true)
        try {
          const response = await fetch(url)
          const data = await response.json()
          setTours(data)
          
        } catch (error) {
          console.log(error)
        }
        setIsLoading(false)
      }
    useEffect(()=>{
      fetchData()
    },[])

    if(isLoading){
      return (
        <main>
          <Loading/>
        </main>
      )
    }

    if(tours.length ===0){
      return <main>
        <div className="title">
            <h2>No Tours </h2>
            <button type="button" className="btn btn-block" onClick={()=>fetchData()} style={{marginTop:'2rem'}}>Refresh</button>
        </div>
      </main>
    }

  return (
    <main>
      <Tours tours = {tours} removeItem = {removeItem} />
    </main>
   

  )
};
export default App;
