import { createReducer } from '@ngrx/store';
import { initialState } from './posts.action';

const _postsReducer = createReducer(initialState);

export function postsReducer(state, action) {
  return _postsReducer(state, action);
}
