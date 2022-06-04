import { Injectable } from '@angular/core';
import {TASK} from '../TASK'
// import {tasks} from '../fake_tasks'
import { Observable,of } from 'rxjs';
import {HttpClient,HttpHeaders} from '@angular/common/http'

const httpOption={
  headers: new HttpHeaders({
    'Content-Type':'application/json'
  })
}


@Injectable({
  providedIn: 'root'
})


export class TaskItemsService {

  private api_Url="http://localhost:5000/tasks"

  constructor(private http:HttpClient) { }

  getTasks(): Observable<TASK[]> {
    // return of(tasks);
    return this.http.get<TASK[]>(this.api_Url);
  }

  deleteTasks(task:TASK): Observable<TASK[]> {
    const url = `${this.api_Url}/${task.id}`;
    return this.http.delete<TASK[]>(url);
  }

  update_task_reminde(task:TASK):Observable<TASK[]> {
    const url = `${this.api_Url}/${task.id}`;
    return this.http.put<TASK[]>(url,task,httpOption);
  }

  Add_new_Task(task:TASK):Observable<TASK>{
    return this.http.post<TASK>(this.api_Url,task,httpOption);
  }
}
