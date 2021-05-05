import { Component } from "@angular/core";
import { Model } from "./model";

@Component({
    selector: "todo-app",
    templateUrl: "app.component.html"
})
export class AppComponent {
    model = new Model();

    getName() {
        return this.model.user;
    } //function for obtainig user name

    getTodoItems() {
        return this.model.items.filter(item => !item.done);
    } //function for obtaining item values from Model object and update it done with arrow function
}
