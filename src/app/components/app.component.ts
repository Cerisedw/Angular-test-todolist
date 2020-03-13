import { Component } from '@angular/core';
import { Tache } from '../models';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'todo-list';
  tasks = [];

  create(task: Tache) {
    this.tasks.push(task);
  }
}
