import React from "react";

const ErrorExample = () => {
  let title = "random title";

  const handleClick = () => {
    title = "Hello World";
    console.log(title);
  };
  //React will allow you to change but will not show that directly in the DOM. Hence we have concept called useState Hook.
  return (
    <React.Fragment>
      <h2>{title}</h2>
      <button type="button" className="btn" onClick={handleClick}>
        Change the Name
      </button>
    </React.Fragment>
  );
};

export default ErrorExample;
