import { Component, OnInit } from '@angular/core';
import { ITaskingState } from '../store';
import { select, NgRedux } from '@angular-redux/store';
import { CLEAR_TODOS } from '../action';

@Component({
  selector: 'app-todo-dashboard',
  templateUrl: './todo-dashboard.component.html',
  styleUrls: ['./todo-dashboard.component.css']
})
export class TodoDashboardComponent {
  @select(s => s.tasking.todos) todos; 
  @select(s => s.tasking.lastUpdate) lastUpdate; 
  
  constructor(private ngRedux: NgRedux<ITaskingState>) {
  }

  clearTodos() {
    this.ngRedux.dispatch({ type: CLEAR_TODOS });
  }
}
