import React from 'react'

export default function Button(props) {
  
  return (
    <div>
        <button className={props.className?props.className:""} on    Click={props.click}>{props.buttonText}</button>

    </div>
  )
}
