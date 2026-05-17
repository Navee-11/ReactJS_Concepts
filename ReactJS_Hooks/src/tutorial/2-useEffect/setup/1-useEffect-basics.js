import React, { useState, useEffect } from "react";
// by default runs after every re-render
// cleanup function
// second parameter
const UseEffectBasics = () => {
  const [value, setValue] = useState(0);
  // const [event, NewEvent] = useState(0);

  //This runs when ever state changes
 /*  useEffect(() => {
    console.log("Call UseEffect");
    document.title = `New Message (${value})`;
  }); */

  /*  if (value >= 1) {
    useEffect(() => {
      console.log("Call UseEffect");
      document.title = `New Message (${value})`;
    });
  } */
  //This above code will through the error as we cannot use Hook conditionally.So we can write as shown in the below
 /*  useEffect(() => {
    console.log("Call UseEffect");
    if (value >= 1) document.title = `New Message (${value}) `;
  },[value]); */
  //For above code useEffect will be executed only when value variable is changed and it will not be executed when event variable is changed because we are passing only one dependency i.e..,[value]
 /*  useEffect(() => {
    console.log("Call UseEffect");
    if (value >= 1) document.title = `New Message (${value}) `;
  }, [value,event]);  */ 
  //For above code useEffect will be executed when value or event variable is changed because we have added both the dependencies [value,event]
  useEffect(() => {
    console.log("Run Only Once");
    document.title = `Run Only Once`;
  }, []);
  //For above code useEffect will be executed only once
  return (
    <>
      <h1>{value}</h1>
      <button className="btn" onClick={() => setValue(value + 1)}>
        Click me
      </button>
      {/* <h1>{event}</h1>
      <button className="btn" onClick={() => NewEvent(event - 1)}>
        Click me
      </button> */}
    </>
  );
};

export default UseEffectBasics;
