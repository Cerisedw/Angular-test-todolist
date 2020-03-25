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
    const isFound = this.searchForDuplicate(task);
    if(!isFound){
      this.tasks.push(task);
    }
  }

  private searchForDuplicate(item: Tache): boolean{
    const found = this.tasks.find((t: Tache)=>t.nom === item.nom);
    return found != null;
  }

}
