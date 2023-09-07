import React from "react";
import { useState, useEffect } from "react";
export default function Unmount() {
  const [count, setCount] = useState(0);
  
// we are using this unmount method to remove data from or Ui then we can use useEffect with return function. inside return function we have to write what i want to remove. 
  useEffect(() => {
    let timer = setTimeout(() => {
      setCount((count) => count + 1);

    }, 10000);
    return () => clearTimeout(timer);
  }, []);
  return (
    <div>
      <p>Hi I am rendering after that removingTime out {count} </p>
    
    </div>
  );
}
