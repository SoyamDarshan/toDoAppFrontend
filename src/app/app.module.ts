import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoListModule } from "./todo-list/todo-list.module";
import { TodoListItemComponent } from "./todo-list-item/todo-list-item.component";
import { HttpClientModule } from "@angular/common/http";

@NgModule({
  declarations: [AppComponent, TodoListComponent, TodoListItemComponent],
  imports: [BrowserModule, AppRoutingModule, TodoListModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
