import React, { useState } from "react";
import { data } from "../../../data";

// more components
// fix - context api, redux (for more complex cases)

const PropDrilling = () => {
  const [people, setPeople] = useState(data);

  const removePerson = (id) => {
    setPeople((person) => {
      return people.filter((person) => person.id !== id);
    });
  };

  return (
    <section>
      <h2>prop drilling</h2>
      <List people={people} removePerson={removePerson} />
    </section>
  ); 
};


const List = ({ people, removePerson }) => {
  return (
    <>
      {people.map((person, index) => {
        return (
          <SinglePerson key={index} {...person} removePerson={removePerson} />
        );
      })}
    </>
  );
};
const SinglePerson = ({ name, id, removePerson }) => {
  return (
    <div className="item" key={id}>
      <h4>{name}</h4>
      <button className="" onClick={() => removePerson(id)}>
        remove
      </button>
    </div>
  );
};

export default PropDrilling;
