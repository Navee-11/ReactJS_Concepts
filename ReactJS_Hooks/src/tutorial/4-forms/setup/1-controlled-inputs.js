import React, { useState } from "react";
// JS
// const input = document.getElementById('myText');
// const inputValue = input.value
// React
// value, onChange

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (firstName && email) {
      const person = { id: new Date().getTime().toString(), firstName, email };
      // setPeople(...people, person); or
      setPeople((people) => {
        return [...people, person];
      });
    } else {
      console.log("List is empty");
    }
  };

  return (
    <article>
      <form action="" className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name :</label>
          <input
            type="text"
            id="firstName"
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email :</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <button type="submit">Add person</button>
      </form>

      {people.map((item) => {
        const { id, firstName, email } = item;
        return (
          <div className="item" key={id}>
            <h4>{firstName}</h4>
            <p>{email}</p>
          </div>
        );
      })}
    </article>
  );
};

export default ControlledInputs;
