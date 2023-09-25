import React from 'react'

export default function Button(props) {
console.log(props)
  return (
    <div>
          
          <button className="text-[#fff] text-[24px] font-bold rounded-[200px] bg-[#E21717] ml-4 px-4 pb-2 mt-4" onClick={props.handleSubmit}>{props.name}</button>
    </div>
  )
}
