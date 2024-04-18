import React from 'react'

function cart(props) {
    console.log(props)
  return (
    <div>
        <div className="cart">
            <ul>
                {props.children}
            </ul>
        </div>
    </div>
  )
}

export default cart