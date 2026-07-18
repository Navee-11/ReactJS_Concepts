import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
// import "./counter.css";
import "./posts.css";
import App from "./App.jsx";
import { store } from "./app/store.js";
import { Provider } from "react-redux";

//To load the users as soon as the App starts
import { fetchUsers } from "./features/users/usersSlice.js";
store.dispatch(fetchUsers());

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>,
);
