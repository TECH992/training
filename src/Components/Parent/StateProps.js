import React from "react";
// import Todo from "../State-Props/Todo";
// import Counter from "../State-Props/Counter";
import { Outlet } from "react-router-dom";
export default function StateProps(props) {
  
  
  return (
    <div>
      {/* <Counter /> */}
      {/* <Todo/> */}
      <Outlet />
    </div>
  );
}
