import "./App.css";
///import HooksCallback  from "./Components/React-Hooks/HooksCallback/HooksCallback";
//import { MultipleState } from "./Components/React-Hooks/HooksReducer/MultipleState";
//import MultipleStateIntoReducer from "./Components/React-Hooks/HooksReducer/MultipleStateIntoReducer";
// import Unmount from "./Components/LifeCycleMethod/Unmount";
// import Mount from "./Components/LifeCycleMethod/Mount";
// import { HooksEffect } from "./Components/React-Hooks/HooksEffect";
//import HooksReducer from "./Components/React-Hooks/HooksReducer/HooksReducer"
// import StateProps from "./Components/Parent/StateProps"
//import Update from "./Components/LifeCycleMethod/Update";
import React from "react"
import { HooksContext } from "./Components/React-Hooks/HooksContext/HooksContext";
//import {firstName,lastName} from "./Context"
const firstName = React.createContext()
const lastName = React.createContext()
function App() {
  return (
    <div className="App">
      {/* <HooksEffect/> */}
      {/* <HooksReducer/> */}
      {/* <StateProps/> */}
      {/* <Mount/> */}
      {/* <Unmount/> */}
      {/* <Update/> */}
      {/* <MultipleStateIntoReducer/> */}
      {/* <HooksCallback/> */}
      {/* <MultipleState /> */}
      <firstName.Provider value={"Deepesh"}>
        <lastName.Provider value={"Kumar"}>
          <HooksContext />
        </lastName.Provider>
      </firstName.Provider>

    </div>
  );
}

export default App;
export{firstName,lastName}  