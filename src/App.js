import { Outlet } from "react-router-dom";
import Footer from "./ApiFetching/Footer";
import Header from "./ApiFetching/Header";
import "./App.css";
import NavBarShort from "./Components/NavBar/NavBarShort";
import NavBar from "./Components/NavBar/NavBar";
import Routers from "./React-Router/AllRouters";
import RoutesUsingHooks from "./React-Router/RoutesUsingHooks";

function App(props) {





  return (
    <div>
      {/* <NavBar/> */}
      {/* {/* <NavBarShort/> */}
      {/* <Routers/> */}
      {/* <RoutesUsingHooks /> */} 
      <Header />
      <Outlet/>
      <Footer/>
    </div>
  );
}

export default App;
