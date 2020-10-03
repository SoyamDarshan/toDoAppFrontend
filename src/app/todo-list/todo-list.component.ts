import { Component, OnInit, Output, EventEmitter } from "@angular/core";
import { TodoListService } from "./todo-list.service";

@Component({
  selector: "app-todo-list",
  templateUrl: "./todo-list.component.html",
  styleUrls: ["./todo-list.component.scss"],
})
export class TodoListComponent implements OnInit {
  constructor(private todoListService: TodoListService) {
    this.todoListService.listen().subscribe((res) => {
      this.update(res);
    });
  }
  todo_list = [];
  ngOnInit() {
    this.todo_list = [];
    this.todoListService.get_todo_list("working").subscribe((res) => {
      this.todo_list = res;
    });
  }
  update(event) {
    console.log(event);
    this.ngOnInit();
  }
}
