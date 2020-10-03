import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { TodoListComponent } from "./todo-list/todo-list.component";
import { TodoListModule } from "./todo-list/todo-list.module";
import { TodoListItemComponent } from "./todo-list-item/todo-list-item.component";
import { HttpClientModule } from "@angular/common/http";
import { TodoItemFormComponent } from "./todo-item-form/todo-item-form.component";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
@NgModule({
  declarations: [
    AppComponent,
    TodoListComponent,
    TodoListItemComponent,
    TodoItemFormComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TodoListModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
