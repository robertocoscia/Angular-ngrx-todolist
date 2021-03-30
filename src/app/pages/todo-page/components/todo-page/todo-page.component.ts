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
  @ViewChild('editInput') txtEditInput: ElementRef;
  todos$:Observable<Todo[]>
  todo:Todo={id:1,text:""}
  constructor(private store: Store<todoState>) {
    this.todos$= this.store.pipe(select(selectInputs))
    this.txtEditInput=new ElementRef('')
  }

  ngOnInit(): void {
  }

  onDelete(index:number){  
    this.store.dispatch(deleteTodo({index}));
  }

  onEdit(index:number,text:string){
    this.isEdited=true;
    this.textInput.setValue(this.todo.text)
    setTimeout(()=>{
      this.txtEditInput.nativeElement.select();
    });
    //this.store.dispatch(updateTodo({index,text}))
  }

  onUpdate(){
    this.isEdited=false;
    
    if(this.textInput.value !== this.todo.text && !this.textInput.invalid)
    {
      this.store.dispatch( updateTodo({index: this.todo.id, text: this.textInput.value}) );
    }

    return;
  }

}
