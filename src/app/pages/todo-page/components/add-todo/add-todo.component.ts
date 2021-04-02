import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { select, Store } from '@ngrx/store';
import { Observable } from 'rxjs';
import { Todo } from 'src/app/shared/models/Todo.model';
import { todoState } from 'src/app/shared/reducers/todo.reducers';
import { selectInputs } from 'src/app/shared/selectors/todo.selector';
import {addTodo} from '../../../../shared/actions/todo.actions'

@Component({
  selector: 'app-add-todo',
  templateUrl: './add-todo.component.html',
  styleUrls: ['./add-todo.component.scss']
})
export class AddTodoComponent implements OnInit {
  todos$: Observable<Todo[]>
  inputText: FormControl;
  editInputText: FormControl;
  editTodoIndex: number = -1;
  id: number = 0;
  constructor(private store: Store<todoState>){ 
    this.inputText = new FormControl('');
    this.editInputText = new FormControl('');
    this.todos$ = this.store.pipe(select(selectInputs))
    this.todos$.subscribe(todo => todo.map(t => t.id == this.id))
  }

  ngOnInit(): void {
  }

  addTodoItem() {
    if (this.inputText.value === '') {
      return;
    }
    this.store.dispatch(addTodo({ text: this.inputText.value }))
    this.inputText.setValue('');
  }

}