import React, { useState } from "react";
//WHenevr you used use hook import it from React
const UseStateBasics = () => {
  const [text, setText] = useState("random title");

  const handleClick = () => {
    if (text === "random title") setText("Hello World");
    else setText("random title");
  };
  //Whenever the button is clicked then setText("Hello World") will call useState function and passing the arguments i.e., useState("Hello World").Hence text value will change to "Hello World"
  return (
    <React.Fragment>
      <h2>{text}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change the Name
      </button>
    </React.Fragment>
  );
};

export default UseStateBasics;
