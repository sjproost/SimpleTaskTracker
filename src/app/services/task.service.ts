import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Task } from '../Task';
import {Observable} from 'rxjs'


const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  }),
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private _apiUrl = 'http://localhost:5000/tasks';

  constructor(private _http:HttpClient) { }

  getTasks(): Observable<Task[]> {
    return this._http.get<Task[]>(this._apiUrl);
  }

  deleteTask(task: Task): Observable<Task> {
    const url = `${this._apiUrl}/${task.id}`;
    return this._http.delete<Task>(url);
  }

  updateTaskReminder(task: Task): Observable<Task> {
    const url = `${this._apiUrl}/${task.id}`;
    return this._http.put<Task>(url, task, httpOptions);
  }

  addTask(task: Task): Observable<Task> {
    return this._http.post<Task>(this._apiUrl, task, httpOptions);
  }
}
