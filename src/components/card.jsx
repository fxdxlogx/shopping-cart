import React from 'react'
import './components.css'

function card(props) {
  return (
    <div>
        <div className="card">
            {props.productName}
        <button onClick={()=>{
                props.addItemInArray(props.productName)
         }}>Add Items</button>
        </div>
        
    </div>
  )
}

export default card;