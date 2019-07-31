import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class TodoService {
  private readonly url = 'https://jsonplaceholder.typicode.com/todos';

  constructor(private http: HttpClient) {}

  getTodos() { 
    return this.http.get(this.url);
  }

  addTodo(todo) {
    return this.http.post(this.url, todo);
  }
}