import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TodoPageRoutingModule } from './todo-page-routing.module';
import { TodoPageComponent } from './components/todo-page/todo-page.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { StoreModule } from '@ngrx/store';
import { reducer, todoKey } from 'src/app/shared/reducers/todo.reducers';
import { AddTodoComponent } from './components/add-todo/add-todo.component';


@NgModule({
  declarations: [TodoPageComponent, AddTodoComponent],
  imports: [
    CommonModule,
    TodoPageRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forFeature(todoKey,reducer)
  ],
  exports:[
    TodoPageComponent
  ]
})
export class TodoPageModule { }
