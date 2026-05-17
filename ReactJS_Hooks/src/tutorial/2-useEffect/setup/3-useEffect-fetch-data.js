import React, { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  const getUsers = async () => {
    const res = await fetch(url);
    const result = await res.json();
    setUsers(result);
    console.log(result);
  };
  useEffect(() => {
    getUsers();
  }, []);

  return (
    <>
      <h3>github Users</h3>
      <ul className="users">
        {users.map((user) => {
          const { id, login, avatar_url, html_url } = user;
          return (
            <li key={id}>
              <img src={avatar_url} alt="" />
              <div>
                <h4>{login}</h4>
                <a href={html_url} target="_blank">
                  Profile
                </a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
