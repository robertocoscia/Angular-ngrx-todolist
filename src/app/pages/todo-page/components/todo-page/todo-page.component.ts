import { Component, ElementRef, Input, OnInit, ViewChild } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Store,select } from '@ngrx/store';
import { Observable } from 'rxjs';
import { deleteTodo, updateTodo } from 'src/app/shared/actions/todo.actions';
import { Todo } from 'src/app/shared/models/Todo.model';
import { todoState } from 'src/app/shared/reducers/todo.reducers';
import { selectInputs } from 'src/app/shared/selectors/todo.selector';

@Component({
  selector: 'app-todo-page',
  templateUrl: './todo-page.component.html',
  styleUrls: ['./todo-page.component.scss']
})
export class TodoPageComponent implements OnInit {
  isEdited:boolean=false;
  textInput=new FormControl('')
  textTodo=new FormControl('')
  @ViewChild('editInput') txtEditInput: ElementRef;
  todos$:Observable<Todo[]>
  id: number = 0;
  todoItem:Todo={}
  todo:Todo={}
  

  constructor(private store: Store<todoState>) {
    this.todos$= this.store.pipe(select(selectInputs))
    this.txtEditInput=new ElementRef('')
    this.todos$.subscribe(todo=> this.todoItem==todo)
    this.todos$.subscribe(todo=> todo.map(t => t.id == this.id))

  }

  ngOnInit(): void {
    
  }

  onDelete(index:number){  
    this.store.dispatch(deleteTodo({index}));
  }
//when modifying todo and then adding a new one, will add the now one and automatically
//fill with the modify section with the previous todo input
  onEdit(id:number,text:string){
    this.id=id;
    text=this.textInput.value
    this.isEdited==true;
    this.textInput.setValue(this.textInput.value)
    this.store.dispatch( updateTodo({index:id, text: this.textInput.value}) );
    this.textInput.setValue('')
  }

  

}