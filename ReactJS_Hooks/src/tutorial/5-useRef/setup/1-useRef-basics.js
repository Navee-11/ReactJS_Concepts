import React, { useEffect, useRef } from "react";

// preserves value
// DOES NOT trigger re-render
// target DOM nodes/elements

const UseRefBasics = () => {
  const refContainer = useRef(null);
  // const divContainer = useRef(null);
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(refContainer.current.firstChild.data);
    console.log(refContainer);
    console.log(refContainer.current.childNodes[0].data);
  };
  useEffect(() => {
    console.log("Render");
  });
  return (
    <>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" placeholder="Enter the text" />
          {/* <input type="text" name="email" id="email" /> */}
          <button type="submit" ref={refContainer}>
            submit
          </button>
        </div>
      </form>
    </>
  );
};

export default UseRefBasics;
