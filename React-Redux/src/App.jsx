import React from "react";
import Counter from "./features/counter/Counter";
import PostList from "./features/posts/PostList";
import AddPostsForm from "./features/posts/AddPostsForm";

const App = () => {
  return (
    <main className="App">
      {/* <Counter /> */}
      <AddPostsForm />
      <PostList />
    </main>
  );
};

export default App;
