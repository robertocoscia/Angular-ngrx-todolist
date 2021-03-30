import {createAction,props} from '@ngrx/store';


export const addTodo = createAction(
    '[Todo] Add Todo', props<{ id:number,text: string }>()
)  

export const deleteTodo = createAction(
    '[Todo] Delete Todo', props<{index: number}>());

export const updateTodo = createAction(
    '[Todo] Update Todo', props<{index:number, text:string}>())

