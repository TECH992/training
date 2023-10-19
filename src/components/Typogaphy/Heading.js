import React from 'react'

export default function Heading(props) {
  return (
    <div>
        <h2 className={props.className?props.className:""}>{props.headingText}</h2>
    </div>
  )
}
