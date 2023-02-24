import { configureStore } from "@reduxjs/toolkit";
import UI from "./slice/UI";
import user from "./slice/users";

const store = configureStore({
  reducer: {
    UI: UI,
    user: user,
  },
});
export default store;
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
