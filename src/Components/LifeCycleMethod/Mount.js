import React from "react";
import { useState, useEffect } from "react";
export default function Mount() {
  
  const [count, setCount] = useState(0);
  /// what componentdidMount is doing in class based component same thing doing useEffect with empty dependency is doing. componentdidMount getting called just after render function. same way useEffect with empty dependency get called just after return function. mostly we are using this mount method to call api.

  useEffect(() => {
    console.log("ji");
    setCount(count + 1);
  }, []);
  return <div>After Mount{count}</div>;
}
