import { useSelector } from "react-redux";
import { selectAllPosts } from "./postsSlice";
import PostAuthor from "./PostAuthor";
import TimeAgo from "./TimeAgo";
import ReactionButtons from "./ReactionButtons";

const PostList = () => {
  /*   const posts = useSelector((state) => {
    console.log(state);
    return state.posts;
  }); */
  //Rendering posts
  /*   const posts = useSelector(selectAllPosts); //This is a selector function that we have created in the postsSlice.js file. This makes sure the we can import posts with worrying about the state structure. We can just import selectAllPosts and use it to get the posts from the state.

  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
    </article> */

  const posts = useSelector(selectAllPosts); //This is a selector function that we have created in the postsSlice.js file. This makes sure the we can import posts with worrying about the state structure. We can just import selectAllPosts and use it to get the posts from the state.
  //To render the new posts first
  const orderedPost = posts
    .slice()
    .sort((a, b) => b.date.localeCompare(a.date));
  const renderPosts = posts.map((post) => (
    <article key={post.id}>
      <h3>{post.title}</h3>
      <p>{post.content.substring(0, 100)}</p>
      <p className="postCredit">
        <PostAuthor userId={post.userId} />
        <TimeAgo timestamp={post.date} />
      </p>
      <ReactionButtons post={post} />
    </article>
  ));
  return (
    <section>
      <h2>Posts</h2>
      {renderPosts}
    </section>
  );
};

export default PostList;
