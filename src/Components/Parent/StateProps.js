import React from "react";
import Todo from "../State-Props/Todo";
import Counter from "../State-Props/Counter";
import { useState } from "react";
export default function StateProps(props) {
  const [data, setData] = useState(0);
  
  const [inp, setInp] = useState();
  const [add, setAdd] = useState([]);
  const inc = () => {
    setData(data + 1);
  };

  const inputData = (e) => {
    setInp(e.target.value);
  };

  const addData = () => {
    setAdd((prev) => {
      return [...prev, inp];
    });
  };
  return (
    <div>
      <Todo
        heading="counter-DO"
        buttonName="Add-Todo"
        handleInputChange={inputData}
        handleAddData={addData}
        listData={add}
      />
      <Counter increase={inc} data={data} />
    </div>
  );
}
