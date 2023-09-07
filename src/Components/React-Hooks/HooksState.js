import React from "react";
import {useState} from "react"
// useState we  are using update data in the Ui  after getting render. useState is hooks that avilable in functional based application.
//Syntax are const[state,setState]=useState
// State: state is initialise  value
//setState: if in want to update initial value the we will setSate to update value.
// in class based application we are using state to update data in the Ui
//syntax this.state: we are using initialise value
//this.setState: if in want to update initial value the we will setSate to update value.
function HooksState() {
  const [color, setColor] = useState("red");
  const changeValue =()=>{
    setColor("YELLOW")
  }
  return (<div>
          <h1>{color}</h1>
          <button onClick={changeValue}>Change_color</button>
  </div>);
}

export default HooksState;
