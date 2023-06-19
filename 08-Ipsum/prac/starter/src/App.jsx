import { useState } from "react";
import data from './data'
import { nanoid } from "nanoid";
const App = () => {
 const [count,setCount] = useState(1)
  const [text,setText] = useState([])
 const handlerSub=(e)=>{
  e.preventDefault()
  let mount = parseInt(count)
  setText(data.slice(0,mount))
 }
//  const id = nanoid()
  return (
    <section className="section-center">
      <h4>Tired of bording lorem ipsum</h4>
      <form className="lorem-form" onSubmit={handlerSub}>
        <label htmlFor="amount">Paragraph</label>
        <input type="number"
        id="amount"
        min="1"
        max="7"
        step="1"
        value={count}
        onChange={(e)=>setCount(e.target.value)}
        />
        <button type="submit" className="btn">Generate</button>
      </form>
      <article className="lorem-text">
        {text.map((item)=>{
          return(
            <p key={nanoid()}>{item}</p>
          )
        })}
      </article>
    </section>
  )
  
};
export default App;
