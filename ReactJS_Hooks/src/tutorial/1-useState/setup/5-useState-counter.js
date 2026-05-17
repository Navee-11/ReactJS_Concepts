// import React, { useState, useEffect } from "react";

// const UseStateCounter = () => {
//   const [value, setValue] = useState(0);
//   const [count, setCount] = useState(value);

//   //   useEffect(()=>{
//   // setCount(value);
//   //   },[value])
//   const increase = () => {
//     setValue(value + 1);
//     console.log("Value is", value);
//     setCount(value);
//     console.log("count is", count);
//   };
//   const decrease = () => {
//     setValue(value - 1);
//     console.log("Value is", value);
//     setCount(value);
//     console.log("count is", count);
//   };
//   const reset = () => {
//     setValue(0);
//     setCount(0);
//   };
//   const delay = () => {
//     setTimeout(() => {
//       setValue(value + 1);
//       console.log("Value is", value);
//       setCount(value);
//       console.log("count is", count);
//     }, 3000);
//   };
//   return (
//     <>
//       <>
//         <h1>Regular Counter</h1>
//         <h1>Value is {value}</h1>
//         <h1>Count is {count}</h1>
//         <button className="btn" onClick={increase}>
//           Increase
//         </button>
//         <button className="btn" onClick={reset}>
//           Reset
//         </button>
//         <button className="btn" onClick={decrease}>
//           Decrease
//         </button>
//       </>
//       <>
//         <h1>More Complex Counter</h1>
//         <h1>{value}</h1>
//         <button className="btn" onClick={delay}>
//           Delay
//         </button>
//       </>
//     </>
//   );
// };

// export default UseStateCounter;
// ======================================================================================================
import React, { useState } from "react";

const UseStateCounter = () => {
  const [value, setValue] = useState(0);
  const [count, setCount] = useState(0);

  const increase = () => {
    setValue(value + 1);
    setCount((prevValue) => prevValue + 1);
    // setCount(count + 1);
  };

  const decrease = () => {
    setValue(value - 1);
    setCount((prevValue) => prevValue - 1);
    // setCount(count - 1);
  };

  const reset = () => {
    setValue(0);
    setCount(0);
  };

  const delay = () => {
    setTimeout(() => {
      setValue(value + 1);
      setCount((prevValue) => prevValue + 1);
    }, 3000);
  };

  return (
    <>
      <h1>Regular Counter</h1>
      <h1>Value is {value}</h1>
      <h1>Count is {count}</h1>
      <button className="btn" onClick={increase}>
        Increase
      </button>
      <button className="btn" onClick={reset}>
        Reset
      </button>
      <button className="btn" onClick={decrease}>
        Decrease
      </button>

      <h1>More Complex Counter</h1>
      <h1>{value}</h1>
      <button className="btn" onClick={delay}>
        Delay
      </button>
    </>
  );
};

export default UseStateCounter;
