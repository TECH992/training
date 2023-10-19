import "./App.css";
import HomePage from "./Page/HomePage";
import Setting from "./Page/Setting";


function App(props) {

  

  return (
    <div className="">
   <HomePage name="Deeepesh" age="21" dob="24/123" buttonName="add" />
   <Setting name="Deeepesh"/>
    </div>
  );
}

export default App;
