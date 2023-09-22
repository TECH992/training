import "./App.css";
import NavBarShort from "./Components/NavBar/NavBarShort";
import NavBar from "./Components/NavBar/NavBar";
import Routers from "./React-Router/AllRouters";
//import RoutesUsingHooks from "./React-Router/RoutesUsingHooks";

function App(props) {

  return (
    <div>
      {/* <NavBar/> */}
      <NavBarShort/>
      <Routers/>
      {/* <RoutesUsingHooks /> */}
    </div>
  );
}

export default App;
