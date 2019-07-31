import { NgRedux, select } from '@angular-redux/store';
import { Component, OnInit } from '@angular/core';
import { ITaskingState } from '../store';
import { ADD_TODO, TOGGLE_TODO, REMOVE_TODO } from '../action';

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent {
  @select(s=> s.tasking.todos ) todos; 
  
  constructor(private ngRedux: NgRedux<ITaskingState>) {
  }

  addTodo(input) {
    if (!input.value) return; 

    this.ngRedux.dispatch({ type: ADD_TODO, title: input.value });

    input.value = '';
  }

  toggleTodo(todo) {
    this.ngRedux.dispatch({ type: TOGGLE_TODO, id: todo.id });
  }

  removeTodo(todo) {
    this.ngRedux.dispatch({ type: REMOVE_TODO, id: todo.id });
  }
}

