
import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store } from '@ngrx/store';
import { Todo } from 'src/app/shared/models/Todo.model';
import { todoState } from 'src/app/shared/reducers/todo.reducers';
import {addTodo} from '../../../../shared/actions/todo.actions'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  inputText:FormControl;
  todo:Todo={id:1,text:""}
  constructor(private store: Store<todoState>){ 
    this.inputText=new FormControl('');
  }

  ngOnInit(): void {
  }

  addTodoItem(id:number,text:string){ 
    if (this.inputText.invalid) {
      return;
    }
    this.store.dispatch(addTodo({id:this.todo.id ,text:this.inputText.value}))
    this.inputText.reset();
  }

}
