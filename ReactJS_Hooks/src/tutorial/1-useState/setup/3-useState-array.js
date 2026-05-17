import React, { useState } from "react";
import { data } from "../../../data";

const UseStateArray = () => {
  const [people, setPeople] = useState(data);
  const removePerson = (id) => {
    let newPeople = people.filter((person) => person.id !== id);
    setPeople(newPeople);
  };
  return people.map((person) => {
    const { id, name } = person; //array destructing
    return (
      <div className="item" key={id}>
        {/* key is must to make the element unique */}
        <h4>{name}</h4>
        <button onClick={() => removePerson(id)}>remove</button>
      </div>
    );
  });
};

export default UseStateArray;
