import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: 'todo',
    loadChildren: () =>
      import('./pages/todo-page/todo-page.module').then(
        (m) => m.TodoPageModule
      ),
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'todo'
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
