import { Component, OnInit } from "@angular/core";
import { TodoListService } from "./todo-list.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  todo_list = [];
  show = false;
  form_type = "add";
  showModal: boolean;

  constructor(private todoListService: TodoListService) {}
  ngOnInit() {
    this.todo_list = [
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
    this.todo_list = [];
    this.todoListService.get_todo_list("working").subscribe((res) => {
      this.todo_list = res;
    });
  }
  onShow() {
    this.showModal = true;
    this.form_type = "add";
  }
  hide() {
    this.showModal = false;
  }
}
