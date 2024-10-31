import { useQuery } from "@tanstack/react-query";
import { createContext, useContext, useReducer } from "react";
import { getPosts } from "../services/supabase";

const PostContext = createContext(null);
const initialState = {
  previous: 0,
  next: 5,
  page: 1,
};
function reducer(state, { type, payload }) {
  switch (type) {
    case "updatePage":
      const condition = payload.pageNum > state.page;
      return {
        ...state,
        previous: condition ? state.previous + 5 : state.previous - 5,
        next: condition ? state.next + 5 : state.next - 5,
        page: payload.pageNum,
      };
  }
}
function PostProvider({ children }) {
  const [{ previous, next, page }, dispatch] = useReducer(
    reducer,
    initialState
  );
  const { data } = useQuery({
    queryKey: ["blogPosts"],
    queryFn: () => getPosts(),
  });
  const value = {
    next,
    previous,
    page,
    data,
    dispatch,
  };
  return <PostContext.Provider value={value}>{children}</PostContext.Provider>;
}

function usePosts() {
  const context = useContext(PostContext);
  // console.log(context);
  return context;
}
export { PostProvider, usePosts };
