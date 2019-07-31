import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgReduxModule } from '@angular-redux/store';

import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoDashboardComponent } from './todo-dashboard/todo-dashboard.component';
import { TodoService } from './todo.service'; 

@NgModule({
  imports: [
    CommonModule,
    NgReduxModule
  ],
  declarations: [
    TodoListComponent,
    TodoDashboardComponent
  ],
  exports: [
    TodoListComponent,
    TodoDashboardComponent
  ],
  providers: [TodoService],
})
export class TodosModule { }
