import "./App.css";
import NavBarShort from "./Components/NavBar/NavBarShort";
import NavBar from "./Components/NavBar/NavBar";
import Routers from "./React-Router/AllRouters";
import { AuthContextProvider } from "./Context/AuthContext";
//import RoutesUsingHooks from "./React-Router/RoutesUsingHooks";

function App(props) {

  return (
    <div>
      <NavBar/>
      {/* <NavBarShort/> */}
      <AuthContextProvider>
      <Routers/>
      </AuthContextProvider>
      
      {/* <RoutesUsingHooks /> */}
    </div>
  );
}

export default App;
