import React from 'react'

const Counter = props => {
  let increment = () => props.onIncrementClick()
  let decrement = () => props.onDecrementClick()

  return(
    <p>
      Clicked: {props.count} times
      <br />
      <button onClick={increment}>+</button>
      <button onClick={decrement}>-</button>
    </p>
  )
}

export default Counter
