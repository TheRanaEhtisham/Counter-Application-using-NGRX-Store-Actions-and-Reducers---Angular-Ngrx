import { createReducer, on } from '@ngrx/store';
import { addPost, updatePost } from './posts.action';
import { initialState } from './posts.state';

const _postsReducer = createReducer(
  initialState,
  on(addPost, (state, action) => {
    let post = { ...action.post };
    post.id = (state.posts.length + 1).toString();
    return {
      ...state,
      posts: [...state.posts, post],
    };
  }),
  on(updatePost, (state, action) => {
    const updatePost = state.posts.map((post) => {
      return action.post.id === post.id ? action.post : post;
    });
    return {
      ...state,
      posts: updatePost,
    };
  })
);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
