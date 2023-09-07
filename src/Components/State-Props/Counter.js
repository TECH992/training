import React from 'react'

export default function Counter(props) {
          //console.log(props)
  return (
    <div>
          <h1>{props.data}</h1>
          <button onClick={props.increase}>Incr.</button>
    </div>
  )
}
