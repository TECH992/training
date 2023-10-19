import React from 'react'

export default function Paragraph(props) {
console.log(props)
  return (
    <div>
        <p className={props.className?props.className:""}>{props.paragraphText}</p>
    </div>
  )
}
