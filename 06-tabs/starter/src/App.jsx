import { useEffect } from "react";
import { useState } from "react";
import { BtnContainer } from "./BtnContainer";
import { JonInfo } from "./JonInfo";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [isLoading,setIsLoading] = useState(true)
  const [jobs,setJobs] = useState([])
  const [currentItem,setCurrentItem] = useState(0)
  //currentItem

  const getData= async()=>{
    const response = await fetch('https://course-api.com/react-tabs-project')
    const data = await response.json()
    setJobs(data)
    setIsLoading(false)
  }

  useEffect(()=>{
    getData()
  },[])

  if(isLoading){
    return (
    <section className="jobs-center">
      <div className="loading"></div>
    </section>)
  }

  console.log(jobs)
  
  return (
  
  <section className="jobs-center">
    {/* button center */}
    {/* Job */}
    <BtnContainer jobs={jobs} currentItem={currentItem} setCurrentItem={setCurrentItem}/>
    <JonInfo jobs={jobs} currentItem={currentItem}/>
  </section>)
  
  
}
export default App
