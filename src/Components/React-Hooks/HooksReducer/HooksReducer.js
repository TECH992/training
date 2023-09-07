import { useReducer } from "react";

function reducer(state, action) {
  if (action.type === "incremented_age") {
    return {
      age: state.age + 1
    };
  }
  if (action.type === "decrement_age") {
    return {
      age: state.age - 1
    };
  }
  throw Error("Unknown action.");
}

export default function HooksReducer() {
  const [state, dispatch] = useReducer(reducer, { age: 42 });

  return (
    <>
      <button
      className="bg-[#35BDD0]"
        onClick={() => {
          dispatch({ type: "incremented_age" });
        }}
      >
        Increment age
      </button>
      <button
      className="bg-[#E21717]"
        onClick={() => {
          dispatch({ type: "decrement_age" });
        }}
      >
        decrement age
      </button>
      <p>Hello! You are {state.age}.</p>
    </>
  );
}
