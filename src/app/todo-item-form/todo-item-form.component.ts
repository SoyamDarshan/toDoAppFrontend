import { Component, OnInit, Input, Output, EventEmitter } from "@angular/core";
import { FormBuilder } from "@angular/forms";
import { TodoListService } from "../todo-list/todo-list.service";

@Component({
  selector: "app-todo-item-form",
  templateUrl: "./todo-item-form.component.html",
  styleUrls: ["./todo-item-form.component.scss"],
})
export class TodoItemFormComponent implements OnInit {
  constructor(private todoListService: TodoListService) {
    // this.formGroup = this.formBuilder.group({
    //   name: "",
    //   email: "",
    //   terms: false,
    // });
  }
  // formGroup;
  @Input() form_type = "add";
  @Output() onFilter = new EventEmitter();
  submitted = false;
  task_created_date = new Date();
  task_updated_date = new Date();
  task_due_date = new Date();
  task_labels = "";
  task_status = "";
  task_subject = "";
  task_description = "";
  task_id = "";

  ngOnInit() {
    this.form_type = "add";
    if (this.form_type === "add") {
      this.task_description = "";
      this.task_due_date = new Date();
      this.task_labels = "";
      this.task_subject = "";
    } else if (this.form_type === "update") {
      this.task_created_date = new Date();
      this.task_updated_date = new Date();
      this.task_due_date = new Date();
      this.task_labels = "";
      this.task_status = "";
      this.task_subject = "";
      this.task_description = "";
      this.task_id = "";
    }
  }
  onSubmit() {
    if (this.form_type === "add") {
      const task_obj = {
        task_description: this.task_description,
        task_due_date: new Date(this.task_due_date),
        task_labels: this.task_labels,
        task_subject: this.task_subject,
      };
      console.log(task_obj);
      this.todoListService.create_todo_list("working", task_obj);
    } else if (this.form_type === "update") {
      const task_obj = {
        task_id: this.task_id,
        task_subject: this.task_subject,
        task_description: this.task_description,
        task_labels: this.task_labels,
        task_status: this.task_status,
        task_due_date: new Date(this.task_due_date),
      };
      console.log(task_obj);
      this.todoListService.update_todo_list("working", task_obj);
    }
    this.submitted = true;
  }
}
