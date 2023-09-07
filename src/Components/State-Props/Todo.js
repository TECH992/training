import React from 'react'
import Button from './Button'
import Data from './Data'
import Input from './Input'
export default function Todo(props) {
    let listArr=props.listData
    //console.log(listArr)
  return (
    <div>
          <h1>{props.heading}</h1>
         <Input changeValue={props.handleInputChange}/><br/>
         <Button handleSubmit={props.handleAddData} name={props.buttonName}/>
         <Data dataArr={listArr}/>
         
    </div>
  )
}
