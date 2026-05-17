import React, { useState } from "react";
// short-circuit evaluation
// ternary operator

const ShortCircuit = () => {
  // const firstValue = text || "hello world";
  // const secondValue = text && "hello world";

  const [text, setText] = useState("Roopam");
  const [isError, setIsError] = useState(false);

  return (
    <>
      <h2>{text || "Rohan"}</h2>
      {/* /If text is empty or false it will return Rohan and if it is true it will return nothing, if it is anything other than these options it will return the text */}
      <h2>{isError && "Johndoe"}</h2>
      {/* /If  isError is false or empty it will return nothing and if it is true or has some value it will return the "Johndoe"*/}
      <button
        className="btn"
        onClick={() => {
          setIsError(!isError);
          setText("");
        }}
      >
        toggle error
      </button>
      {/* {isError && <h1>Error..</h1>} */}
      <h1>{isError ? <p>there is an error</p>: <h2>there is no error</h2>}</h1>
    </>
  );
};

export default ShortCircuit;
