import React, { useState, useReducer } from "react";
import Modal from "./Modal";
// import { data } from "../../../data";

// const Index = ()=>{
//   const [name, setName] = useState("");
//   const [people, setPeople] = useState(data);
//   const [showModal, setShowModal] = useState(false);

//   const handleSubmit = (e) => {
//     e.preventDefault();
//     if (name) {
//       setShowModal(true);
//       setPeople([...people, { id: new Date().getTime().toString(), name }]);
//       setName("");
//     } else {
//       setShowModal(true);
//     }
//     console.log(people);
//   };
//   return (
//     <>
//       {showModal && <Modal />}
//       <form action="" onSubmit={handleSubmit} className="form">
//         <div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//         </div>
//         <button type="submit">Add person</button>
//       </form>
//       {people.map((person) => {
//         return (
//           <div key={person.id}>
//             <h4>{person.name}</h4>
//           </div>
//         );
//       })}
//     </>
//   );
// };

//reducer function
import { reducer } from "./reducer";

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "hello World",
};

const Index = () => {
  const [name, setName] = useState("");

  const [state, dispatch] = useReducer(reducer, defaultState);
  //useReducer(function,state)
  //Default State-->Whatever the initial value that will be in my state is called defaultstate
  //Dispatch-->It is a function which is used to update the state and it takes an object as an argument and this object should have a type property which is used to identify the action that we want to perform and it can also have a payload property which is used to pass the data that we want to update in our state.

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      const newPerson = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newPerson }); //This create an object inside the action
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };
  return (
    <>
      {state.isModalOpen && (
        <Modal modalContent={state.modalContent} closeModal={closeModal} />
      )}
      <form action="" onSubmit={handleSubmit} className="form">
        <div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <button type="submit">Add person</button>
      </form>
      {state.people.map((person) => {
        return (
          <div key={person.id} className="item">
            <h4>{person.name}</h4>
            <button
              onClick={() =>
                dispatch({ type: "REMOVE_ITEM", payload: person.id })
              }
            >
              remove
            </button>
          </div>
        );
      })}
      <button className="btn" onClick={() => dispatch({ type: "CLEAR_LIST" })}>
        Clear Items
      </button>
    </>
  );
};

export default Index;
