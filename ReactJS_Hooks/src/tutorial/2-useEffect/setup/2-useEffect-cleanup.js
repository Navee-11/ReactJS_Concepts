import { clear } from "@testing-library/user-event/dist/clear";
import React, { useState, useEffect } from "react";

// cleanup function
// second argument

const UseEffectCleanup = () => {
  const [size, setSize] = useState(window.innerWidth);
  const checkSize = () => setSize(window.innerWidth);

  // const debounce = () => {
  //   let timer;
  //   return function debounced() {
  //     clearTimeout(timer);
  //     timer = setTimeout(() => {
  //       setSize(window.innerWidth);
  //     }, 1000);
  //   };
  // };

  useEffect(() => {
    console.log("Use Effect");
    // window.addEventListener("resize", debounce());
    //Above line will work as debounce() will return the debounced function and it will be added as event listener for resize event.But the problem is that every time the component re-renders a new debounced function will be created and added as event listener for resize event.Hence we need to use useCallback hook to memoize the debounced function so that it will not be recreated on every re-render. and also cannot be cleanup the event listener as we are not storing the reference of the debounced function in a variable. Hence we can write as shown in the below code
    /*  const debounceResized = debounce();
    window.addEventListener("resize", debounceResized); */

    window.addEventListener("resize", checksize);
    //If we use event listener here it will keep adding on to local storage.Hence your app becomes slow.So inorder to cleanup this event listener we use clean up function

    // return () => {
    //   console.log("Clean Up");
    //   window.removeEventListener("resize", checkSize);
    //   window.removeEventListener("resize", debounceResized);
    // };
  }, [size]);
  return (
    <>
      <h1>Window Size</h1>
      <h1>{size}px</h1>
    </>
  );
};

export default UseEffectCleanup;
