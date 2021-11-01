import { counterReducer } from '../counter/state/counter.reducer';
import { counterState } from '../counter/state/counter.state';
import { PostsState } from '../posts/post-list/state/posts.action';
import { postsReducer } from '../posts/post-list/state/posts.reducer';

export interface AppState {
  counter: counterState;
  posts: PostsState;
}

export const appReducer = {
  counter: counterReducer,
  posts: postsReducer,
};
