import React from "react";
import { useState, useEffect } from "react";
export default function Update() {
  const [count, setCount] = useState(0);
  const [calculation, setCalculation] = useState(0);

  /// what componentdidUpdate is doing in class based component same thing doing useEffect with  dependency is doing. componentdidUpdate we are using to update data  after Ui is getting render.

  useEffect(() => {
    setCalculation(() => count * 2);
  }, [count]); 

  return (
    <>
      <p>Count: {count}</p>
      <button onClick={() => setCount((c) => c + 1)}>+</button>
      <p>Calculation: {calculation}</p>
    </>
  );
}
