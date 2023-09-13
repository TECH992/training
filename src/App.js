import "./App.css";
//import { HooksRef2 } from "./Components/React-Hooks/HooksRef/HooksRef2";
//import HooksCallback  from "./Components/React-Hooks/HooksCallback/HooksCallback";
//import { MultipleState } from "./Components/React-Hooks/HooksReducer/MultipleState";
//import MultipleStateIntoReducer from "./Components/React-Hooks/HooksReducer/MultipleStateIntoReducer";
// import Unmount from "./Components/LifeCycleMethod/Unmount";
// import Mount from "./Components/LifeCycleMethod/Mount";
// import { HooksEffect } from "./Components/React-Hooks/HooksEffect";
//import HooksReducer from "./Components/React-Hooks/HooksReducer/HooksReducer"
 import StateProps from "./Components/Parent/StateProps"
//import Update from "./Components/LifeCycleMethod/Update";
//import React, {createContext } from "react"
//import { HooksRef } from "./Components/React-Hooks/HooksRef/HooksRef";
//import { HooksRef2 } from "./Components/React-Hooks/HooksRef/HooksRef2";
//import { HooksRef4 } from "./Components/React-Hooks/HooksRef/HooksRef4";
//import { HooksRef3 } from "./Components/React-Hooks/HooksRef/HooksRef3";
//import { HooksContext } from "./Components/React-Hooks/HooksContext/HooksContext";
//import HooksRef1 from "./Components/React-Hooks/HooksRef/HooksRef1";
//import {firstName,lastName} from "./Context"
// import jsonData from "./data.json"
// const user = createContext()
// const lastName =createContext()
function App() {
  // const data = jsonData&& jsonData.data.map((item, index) => {
  // return item.attributes
  // })
  // console.log(data)
  return (
    <div className="App">
      {/* <HooksEffect/> */}
      {/* <HooksReducer/> */}
      <StateProps/>
      {/* <Mount/> */}
      {/* <Unmount/> */}
      {/* <Update/> */}
      {/* <MultipleStateIntoReducer/> */}
      {/* <HooksCallback/> */}
      {/* <MultipleState /> */}
      {/* <user.Provider value={jsonData}>
         <lastName.Provider value={"Kumar"}> 
          <HooksContext />
         </lastName.Provider> 
      </user.Provider> */}
      {/* <HooksRef1/> */}
      {/* <HooksRef/> */}
     {/* <HooksRef2/> */}
      {/* <HooksRef3 /> */}
      {/* <HooksRef4/> */}
    </div>
  );
}

export default App;
//export{user,lastName}  