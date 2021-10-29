import { createAction, props } from '@ngrx/store';

export const increment = createAction('increment');
export const decrement = createAction('decrement');
export const reset = createAction('reset');

export const customIcrement = createAction(
  'customIncrement',
  props<{ count: number }>()
);

export const changeChannelName = createAction(
  'changeChannelName',
  props<{ channelName: string }>()
);
