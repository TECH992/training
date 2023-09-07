import React, { useState } from "react";
const HooksState = () => {
  const [inc, setInc] = useState(0);
  const [dec, setDec] = useState(0);

  const increment=()=>{
setInc(inc+1)
  }
const decrement=()=>{
          setDec(dec-1)
}
  return (
    <div>
          <h1>{inc}</h1> <br/>
          <h2>{dec}</h2>
      <button onClick={increment}>INC</button>
      <button onClick={decrement}>dec</button>
    </div>
  );
};

export default HooksState;
