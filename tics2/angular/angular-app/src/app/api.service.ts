import { Injectable } from '@angular/core';
import { HttpHeaders,HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  api: string = 'http://138.197.65.51:8000/api/task/';

  constructor(    private http: HttpClient) { 
  }

  getTask(): Observable<any>{
    return this.http.get(`${this.api}`)
  }

  postTask(data: any): Observable<any>{
    return this.http.post<any>(`${this.api}`,data)
  }

  updateTask(data: any, id): Observable<any>{
    return this.http.put<any>(`${this.api}${id}/`,data)
  }

  deleteTask(id): Observable<{}>{
    return this.http.delete(`${this.api}${id}/`)
  }

}
