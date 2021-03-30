import {createFeatureSelector, createSelector} from '@ngrx/store';
import * as fromInput from '../reducers/todo.reducers'

export const selectInputState= createFeatureSelector<fromInput.todoState>(
    fromInput.todoKey
);

export const selectInputs = createSelector(
    selectInputState,
    (state: fromInput.todoState)=> state.todos
)