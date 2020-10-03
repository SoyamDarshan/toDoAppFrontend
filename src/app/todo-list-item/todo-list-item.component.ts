import { Component, OnInit, Input, EventEmitter, Output } from "@angular/core";
import { TodoListService } from "../todo-list/todo-list.service";

@Component({
  selector: "app-todo-list-item",
  templateUrl: "./todo-list-item.component.html",
  styleUrls: ["./todo-list-item.component.scss"],
})
export class TodoListItemComponent implements OnInit {
  @Input() todo_item;
  @Output() reload_component = new EventEmitter();

  constructor(private todoListService: TodoListService) {}
  task_description = "";
  task_created_date = new Date();
  task_updated_date = new Date();
  task_due_date = new Date();
  task_id = "";
  task_labels = "";
  task_status = "";
  task_subject = "";
  task_status_class = "in_progress";
  today_date = new Date();
  task_local_created_date = this.today_date.toLocaleString();
  task_local_updated_date = this.today_date.toLocaleString();
  task_local_due_date = this.today_date.toLocaleString();

  ngOnInit() {
    this.task_description = this.todo_item.task_description;
    this.task_id = this.todo_item.task_id;
    this.task_labels = this.todo_item.task_labels;
    this.task_status = this.todo_item.task_status;
    this.task_subject = this.todo_item.task_subject;
    this.task_created_date = new Date(this.todo_item.task_created_date);
    this.task_updated_date = new Date(this.todo_item.task_updated_date);
    this.task_due_date = new Date(this.todo_item.task_due_date);

    console.log(this.task_id);

    if (this.task_status === "completed") {
      this.task_status_class = "completed";
    } else if (
      this.task_status !== "completed" &&
      this.today_date > this.task_due_date
    ) {
      this.task_status_class = "past_due_date";
    } else if (
      this.task_status !== "completed" &&
      this.today_date < this.task_due_date
    ) {
      this.task_status_class = "in_progress";
    }
    this.task_local_created_date = this.task_created_date.toLocaleString();
    this.task_local_updated_date = this.task_updated_date.toLocaleString();
    this.task_local_due_date = this.task_due_date.toLocaleString();
  }
  deleteTask() {
    console.log(this.task_id);
    this.todoListService
      .delete_todo_list("working", this.task_id)
      .subscribe((data) => {
        this.reload_component.emit(true);
      }),
      (err) => {
        console.log("Error");
      };
  }
}
