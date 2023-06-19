
import { useState,useEffect } from "react";
import { ComButtom } from "./ComButtom";
import { JobInfo } from "./JobInfo";

const url = 'https://course-api.com/react-tabs-project';

const App = () => {
  const [jobs, setJobs] = useState([])
  const [isLoading,setIsLoading]= useState(true)
  const [currentItem,setCurrentItem] = useState(0)

  const getData= async() =>{
    const response = await fetch(url)
    const data = await response.json()
    setJobs(data)
    setIsLoading(false)
  }

  useEffect(()=>{
    getData();
  },[])

  if(isLoading){
    return <section className="jobs-center">
      <div className="loading"></div>
    </section>
  }
  return (<section className="jobs-center">
   
  <ComButtom jobs = {jobs} currentItem ={currentItem} setCurrentItem= {setCurrentItem}/>
  
  <JobInfo jobs={jobs} currentItem={currentItem}/>
  
  
</section>);
};
export default App;
