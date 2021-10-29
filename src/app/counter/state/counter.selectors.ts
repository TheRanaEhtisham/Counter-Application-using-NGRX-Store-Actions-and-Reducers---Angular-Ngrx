import { createFeatureSelector, createSelector } from '@ngrx/store';
import { counterState } from './counter.state';

const getCounterState = createFeatureSelector<counterState>('counter');

export const getCounter = createSelector(getCounterState, (state) => {
  return state.counter;
});

export const getChannelName = createSelector(getCounterState, (state) => {
  return state.channelName;
});
