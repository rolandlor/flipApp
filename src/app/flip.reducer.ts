import { createReducer, on } from '@ngrx/store';
import { flip, unflip, reset } from './flip.actions';

export const initialState = 0;

export const counterReducer = createReducer(
  initialState,
  on(flip, (state) => state + 1),
  on(unflip, (state) => state - 1),
  on(reset, (state) => 0)
);
