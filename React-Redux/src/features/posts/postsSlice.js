import { createSlice, nanoid } from "@reduxjs/toolkit";
import { sub } from "date-fns";

const initialState = [
  {
    id: 1,
    title: "Learning Redux Tool Kit",
    content: "I've heard about this on internet",
    date: sub(new Date(), { minutes: 10 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
  {
    id: 2,
    title: "Slices",
    content: "THe more I say slices, the more I want Pizza",
    date: sub(new Date(), { minutes: 5 }).toISOString(),
    reactions: {
      thumbsUp: 0,
      wow: 0,
      heart: 0,
      rocket: 0,
      coffee: 0,
    },
  },
];

const postsSlice = createSlice({
  name: "posts",
  initialState,
  reducers: {
    /* postAdded(state, action) {
      //state.push(action.payload); //Immer allows us to write mutating logic in reducers. It doesn't actually mutate the state but it uses the Immer library to detect changes to a "draft state" and produce a brand new immutable state based off those changes.
    }, */
    postAdded: {
      reducer(state, action) {
        state.push(action.payload);
      },
      prepare(title, content, userId) {
        return {
          payload: {
            id: nanoid(),
            title,
            content,
            date: new Date().toISOString(), //We can edit the payload object and add the date and log timestamp to it. This way, we don't have to worry about adding the date and timestamp in the component and we can just call the action creator function with title and content.
            userId,
            reactions: {
              thumbsUp: 0,
              wow: 0,
              heart: 0,
              rocket: 0,
              coffee: 0,
            },
          },
        };
      },
    },
    reactionAdded(state, action) {
      const { postId, reaction } = action.payload;
      const existingPost = state.find((post) => post.id === postId);
      if (existingPost) {
        existingPost.reactions[reaction]++;
      }
    },
  },
});

export const selectAllPosts = (state) => state.posts; //This makes sure the we can import posts with worrying about the state structure. We can just import selectAllPosts and use it to get the posts from the state.
//if the state structure changes, we only need to change this selector function and not all the places where we are using the posts.

export const { postAdded, reactionAdded } = postsSlice.actions; //This is automatically generated action creator function for the postAdded reducer function. We can use this to dispatch the action to the store.

export default postsSlice.reducer;
