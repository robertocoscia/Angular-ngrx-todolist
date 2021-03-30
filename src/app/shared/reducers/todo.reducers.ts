import {Action,createReducer,on, State} from '@ngrx/store'
import { of } from 'rxjs';
import * as TodoActions from '../actions/todo.actions';
import {Todo} from '../models/Todo.model'

export const todoKey='todo';
export interface todoState{
    todos: Todo[];
}

export const initialState: todoState = {
    todos:[]
}
export const todoReducer= createReducer(
    initialState,
    on(TodoActions.addTodo,
        (state:todoState,{id,text})=>({
            ...state,
            todos:[...state.todos,{id,text}]
        })
        ),
    on(TodoActions.deleteTodo,
        (state:todoState, {index})=>({
            ...state,
            todos:[...state.todos.filter((todo,i)=>i !== index)]   
        })
    ),
    on(TodoActions.updateTodo,
        (state:todoState, {index,text})=>({
            ...state,
            todos:[...state.todos.map((todo)=>{
                if(todo.id===index){
                    return{
                        ...todo,
                        text:text
                    }
                }else{
                    return todo;
                }
            })]   
        })
    ),
    
)

    

export function reducer(state:todoState | undefined, action: Action):any{
    return todoReducer(state,action)
}