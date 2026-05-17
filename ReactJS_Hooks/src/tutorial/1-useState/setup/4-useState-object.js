import React, { useState } from "react";

const UseStateObject = () => {
  const [person, setPerson] = useState({
    name: "peter",
    age: 15,
    message: "Random message",
    count: 0,
  });
  const changeMessage = () => {
    setPerson({
      ...person,
      age: "25",
      message: "Hello World",
      count: person.count + 1,
      mymessage: "Hello World2",
    });
    setTimeout(() => {
      console.log(person.count);
    }, 3000);
  };

  return (
    <>
      <h3>{person.name}</h3>
      <h3>{person.count % 2 === 0 ? person.age : "15"}</h3>
      <h3>{person.count}</h3>
      <h3>{person.message}</h3>
      <h2>{person.mymessage}</h2>
      <button className="btn" onClick={changeMessage}>
        Change the message
      </button>
    </>
  );
};

export default UseStateObject;

// why the person count is always less than the actual count by one??
// React's State Update Process:
// State is updated asynchronously:

// When you call setPerson, React schedules the state update, but the actual state change does not happen immediately. React batches state updates for performance reasons.
// The component will re-render in the next render cycle, and during this render, the updated state will be reflected.
// DOM update happens after re-render:

// Once React's state is updated, it triggers a re-render of the component. After this re-render, the new state is reflected in the DOM.
// The old state is still accessible until the next re-render:

// In the same render cycle (before the component re-renders), any state you access directly (such as person.count) will still show the old value of the state.
// This is why you're seeing that person.count is always one less than the actual updated value: because the console.log inside the setTimeout is still working with the old state from the current render cycle.
// To summarize:
// The state change doesn't immediately take effect. React schedules the update, and the new state is available after the next render cycle.
// DOM updates happen after React finishes processing the state update and re-renders the component.
// If you try to access the state during the current render cycle (before React has re-rendered), you'll still be working with the old value.
