import "./App.css";
import HomePage from "./Page/HomePage";
import Setting from "./Page/Setting";

import Counter from "./Page/Counter"
function App(props) {

  

  return (
    <div className="">
   {/* <HomePage name="Deeepesh" age="21" dob="24/123" buttonName="add" />
   <Setting name="Deeepesh"/> */}
      <Counter/>
    </div>
  );
}

export default App;
