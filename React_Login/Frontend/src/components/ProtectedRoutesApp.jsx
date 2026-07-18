//Roles based protecttion for the routes

import React from "react";
import Register from "../Register";
import Login from "../Login";
import { Routes, Route } from "react-router-dom";
import Layout from "../Layout";
import LinkPage from "./LinkPage";
import Unauthorized from "./Unauthorized";
import Home from "./Home";
import Editor from "./Editor";
import Admin from "./Admin";
import Lounge from "./Lounge";
import Missing from "./Missing";
import RequireAuth from "./RequireAuthUser";

const ROLES = {
  user: 2001,
  editor: 1984,
  admin: 5150,
};
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route path="login" element={<Login />} />
        <Route path="register" element={<Register />} />
        <Route path="linkpage" element={<LinkPage />} />
        <Route path="unauthorized" element={<Unauthorized />} />
        {/* Protected Routes */}
        <Route element={<RequireAuth allowedRoute={[ROLES.user]} />}>
          <Route path="/" element={<Home />} />
        </Route>

        <Route element={<RequireAuth allowedRoute={[ROLES.editor]} />}>
          <Route path="editor" element={<Editor />} />
        </Route>

        <Route element={<RequireAuth allowedRoute={[ROLES.admin]} />}>
          <Route path="admin" element={<Admin />} />
        </Route>
        <Route
          element={<RequireAuth allowedRoute={[ROLES.editor, ROLES.admin]} />}
        >
          <Route path="lounge" element={<Lounge />} />
        </Route>
      </Route>

      <Route path="*" element={<Missing />} />
    </Routes>
  );
};

export default App;
