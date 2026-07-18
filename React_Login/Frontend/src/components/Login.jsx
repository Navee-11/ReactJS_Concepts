import React, { useContext, useEffect, useRef, useState } from "react";
// import AuthContext from "./context/AuthProvider";
import axios from "../api/axios.js";
import useAuth from "../hooks/useAuth"; //This eliminates the use of auth provider in each file
import { useLocation, useNavigate } from "react-router-dom";
const LOGIN_URL = "/api/auth";

const Login = () => {
  // const { setAuth } = useContext(AuthContext);
  const { auth, setAuth } = useAuth();
  const userRef = useRef();
  const errRef = useRef();

  const [user, setUser] = useState("");
  const [pwd, setPwd] = useState("");
  const [errMsg, setErrMsg] = useState("");
  const [success, setSuccess] = useState(false);

  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/";

  useEffect(() => {
    userRef.current.focus();
  }, []);

  useEffect(() => {
    setErrMsg("");
  }, [user, pwd]);

  useEffect(() => {
    console.log(auth);
  }, [user, pwd]);
  const handleSubmit = async (e) => {
    e.preventDefault();
    // setAuth(true);
    console.log(location);

    try {
      const response = await axios.post(
        LOGIN_URL,
        JSON.stringify({ user, pwd }),
        {
          headers: { "Content-Type": "application/json" },
          withCredentials: true,
        },
      );
      console.log(JSON.stringify(response?.data));
      const accessToken = response?.data?.accessToken;
      const roles = response?.data?.roles;
      setAuth({ user, pwd, roles, accessToken });
      setUser("");
      setPwd("");
      navigate(from, { replace: true });
      // setSuccess(true);
    } catch (error) {
      if (!error?.response) {
        setErrMsg("No Server response");
      } else if (error.response?.status === 400) {
        setErrMsg("Missing username or password");
      } else if (error.response?.status === 401) setErrMsg("Unauthorized");
      else setErrMsg("Login Failed");
    }
    errRef.current.focus();
  };

  return (
    <>
      {success ? (
        <section>
          <h1>You are logged in!</h1>
          <br />
          <p>
            <a href="#">Go Home</a>
          </p>
        </section>
      ) : (
        <section>
          <p
            ref={errRef}
            className={errMsg ? "errmsg" : "offscreen"}
            aria-live="assertive"
          >
            {errMsg}
          </p>
          <h1>Sign in</h1>
          <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username:</label>
            <input
              type="text"
              id="username"
              autoComplete="off"
              ref={userRef}
              onChange={(e) => setUser(e.target.value)}
              value={user}
              required
            />
            <label htmlFor="password">Password:</label>
            <input
              type="password"
              id="password"
              autoComplete="off"
              onChange={(e) => setPwd(e.target.value)}
              value={pwd}
              required
            />
            <button>Sign In</button>
            <p>
              Need an Account?
              <br />
              <span>
                <a href="#">Sign Up</a>
              </span>
            </p>
          </form>
        </section>
      )}
    </>
  );
};

export default Login;
