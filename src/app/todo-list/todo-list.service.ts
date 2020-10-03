import { Injectable } from "@angular/core";
import { Observable, Observer, of, throwError, Subject } from "rxjs";
import { catchError, map } from "rxjs/operators";
import { TodoListItemModel } from "../todo-list-item/todo-list-item.model";
import { HttpClient } from "@angular/common/http";

@Injectable({
  providedIn: "root",
})
export class TodoListService {
  baseUrl = "http://localhost:5000";
  getTodoListUrl = this.baseUrl + "/gettodolist";
  updateTodoListUrl = this.baseUrl + "/updatetodotask";
  deleteTodoListUrl = this.baseUrl + "/deletetodotask";
  createTodoListUrl = this.baseUrl + "/createtodotask";
  private _listners = new Subject<any>();

  listen(): Observable<any> {
    return this._listners.asObservable();
  }

  constructor(private http: HttpClient) {}
  get_todo_list(user_id): Observable<any> {
    const httpOptions = {
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        "Access-Control-Allow-Headers": "Content-Type",
      },
      params: {
        user_id,
      },
    };
    return this.http.get(this.getTodoListUrl, httpOptions).pipe(
      map((res) => {
        return res["data"];
      }),
      catchError((error) => {
        // redirect page
        return throwError(error);
      })
    );
  }
  create_todo_list(user_id, task_obj) {
    const httpOptions = {
      headers: { "Access-Control-Allow-Headers": "Content-Type" },
    };
    const uploadData = new FormData();
    uploadData.append("user_id", user_id);
    uploadData.append("task_subject", task_obj["task_subject"]);
    uploadData.append("task_description", task_obj["task_description"]);
    uploadData.append("task_due_date", task_obj["task_due_date"]);
    uploadData.append("task_labels", task_obj["task_labels"]);

    this.http.post(this.createTodoListUrl, uploadData, httpOptions).subscribe(
      (res) => {
        if (res["success"] < 0) {
          return false;
        }
        this._listners.next(true);
        return true;
        // });
      },
      (_error) => {
        return false;
      }
    );
  }
  update_todo_list(user_id, task_obj) {
    const httpOptions = {
      headers: { "Access-Control-Allow-Headers": "Content-Type" },
    };
    const uploadData = new FormData();
    uploadData.append("user_id", user_id);
    uploadData.append("task_id", task_obj["task_id"]);
    uploadData.append("task_subject", task_obj["task_subject"]);
    uploadData.append("task_description", task_obj["task_description"]);
    uploadData.append("task_due_date", task_obj["task_due_date"]);
    uploadData.append("task_labels", task_obj["task_labels"]);

    this.http.post(this.updateTodoListUrl, uploadData, httpOptions).subscribe(
      (res) => {
        if (res["success"] < 0) {
          return false;
        }
        return true;
        // });
      },
      (_error) => {
        return false;
      }
    );
  }
  delete_todo_list(user_id, task_id): Observable<any> {
    const httpOptions = {
      headers: { "Access-Control-Allow-Headers": "Content-Type" },
    };
    const uploadData = new FormData();
    uploadData.append("user_id", user_id);
    uploadData.append("task_id", task_id);
    return this.http.post(this.deleteTodoListUrl, uploadData, httpOptions).pipe(
      map((res) => {
        if (res["success"] < 0) {
          return false;
        }
        return true;
        // });
      }),
      catchError((error) => {
        // redirect page
        return throwError(error);
      })
    );
  }
}
