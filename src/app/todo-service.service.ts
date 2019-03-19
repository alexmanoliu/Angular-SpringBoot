import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TodoServiceService {

  todoList = [];

  constructor(private http: HttpClient) { this.loadFromSpring(); }

  loadFromSpring() {
    const token = sessionStorage.getItem('jsessionid');
    const tokenJSON = JSON.parse(token);

    if (token != null || tokenJSON.expires_in < new Date().getTime()) {

      const getTasksurl = 'http://localhost:8080/getTasks';

      const getTaskHeaders: HttpHeaders = new HttpHeaders()
        .append('Authorization', 'Bearer' + tokenJSON.access_token);

      this.http.post(getTasksurl, { withCredentials: true },
        { headers: getTaskHeaders }).subscribe((res) => {
          console.log(res);
          for (let i = 0; ; i++) {
            if (res[i] == null) {
              break;
            }
            this.todoList.unshift(res[i].task);
          }
        });
    }
  }

  addItem(task: string, token: string) {
    this.todoList.unshift(task);
    const insertTaskurl = 'http://localhost:8080/insertTask';

    const insertTokenParam: HttpParams = new HttpParams()
      .append('task', task);


    const insertTokenHeaders: HttpHeaders = new HttpHeaders()
      .append('Authorization', 'Bearer' + token);

    this.http.post(insertTaskurl, { withCredentials: true },
      { headers: insertTokenHeaders, params: insertTokenParam }).subscribe((res) => {
        console.log(res);
      });
  }
}



