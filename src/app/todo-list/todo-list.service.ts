import { Injectable } from "@angular/core";
import { Observable, Observer, of, throwError } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { TodoListItemModel } from "../todo-list-item/todo-list-item.model";
import {
  HttpClient,
  HttpHeaders,
  HttpErrorResponse,
} from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TodoListService {
  baseUrl = "http://localhost:5000";
  getTodoListUrl = this.baseUrl + "/gettodolist";
  constructor(private http: HttpClient) {}
  get_todo_list(user_id): Observable<any> {
    const httpOptions = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      params: {
        user_id: user_id,
      },
    };
    return this.http.get(this.getTodoListUrl, httpOptions).pipe(
      map((res) => {
        console.log(res);
        return res["data"];
      }),
      catchError((error) => {
        // redirect page
        return throwError(error);
      })
    );
    const data = [
      {
        task_created_date: "Sat, 03 Oct 2020 09:31:50 GMT",
        task_description: "task 1 desc",
        task_due_date: "Sat, 13 Oct 2020 09:31:50 GMT",
        task_id: "ec50369c-ff01-4986-afb9-ea28d07fdd06",
        task_labels: "app",
        task_status: "in progress",
        task_subject: "task 1",
        task_updated_date: "Sat, 03 Oct 2020 09:31:50 GMT",
        user_id: "working",
      },
      {
        task_created_date: "Sat, 03 Oct 2020 09:31:50 GMT",
        task_description: "task 1 desc",
        task_due_date: "Sat, 13 Oct 2020 09:31:50 GMT",
        task_id: "ec50369c-ff01-4986-afb9-ea28d07fdd06",
        task_labels: "app",
        task_status: "completed",
        task_subject: "task 1",
        task_updated_date: "Sat, 03 Oct 2020 09:31:50 GMT",
        user_id: "working",
      },
      {
        task_created_date: "Sat, 03 Oct 2020 09:31:50 GMT",
        task_description: "task 1 desc",
        task_due_date: "Sat, 02 Oct 2020 09:31:50 GMT",
        task_id: "ec50369c-ff01-4986-afb9-ea28d07fdd06",
        task_labels: "app",
        task_status: "in progress",
        task_subject: "task 1",
        task_updated_date: "Sat, 03 Oct 2020 09:31:50 GMT",
        user_id: "working",
      },
      {
        task_created_date: "Sat, 03 Oct 2020 09:31:50 GMT",
        task_description: "task 1 desc",
        task_due_date: "Sat, 13 Oct 2020 09:31:50 GMT",
        task_id: "ec50369c-ff01-4986-afb9-ea28d07fdd06",
        task_labels: "app",
        task_status: "new",
        task_subject: "task 1",
        task_updated_date: "Sat, 03 Oct 2020 09:31:50 GMT",
        user_id: "working",
      },
    ];
    return of(data);
  }
}
