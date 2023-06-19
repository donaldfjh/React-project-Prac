import React from 'react'
import {FaAngleDoubleRight} from 'react-icons/fa'
import {v4 as uuidv4} from 'uuid'
export const Duties = ({duties}) => {
console.log(duties)
  return (
    <div>
        {/* we cannot always use index as key if we don't have index, so we can use uuid package */}
        {/* what uuid do is, we do not need to provide unique id  */}
        {duties.map((duty,index)=>{
            const id = uuidv4()
            console.log(id)
            return <div key={id} className = "job-desc">
                <FaAngleDoubleRight className='job-icon'/>
                <p>{duty}</p>
            
            </div>
        })}
    </div>
  )
}
