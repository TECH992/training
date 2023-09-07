import React from "react";

export default function Data(props) {
  let ArrVal = props.dataArr;
  console.log(ArrVal);
  return (
    <div>
     
      <ul>
        {ArrVal &&   
          ArrVal.map((item, i) => {
            return <li>{item}</li>;
          })}
      </ul>
    </div>
  );
}
