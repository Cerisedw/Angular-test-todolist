import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Tache } from 'src/app/models';
import { TacheComponent } from '../tache/tache.component';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent implements OnInit {
  @Output("insert") insert : EventEmitter<Tache> = new EventEmitter<Tache>();
  nom: string= "";
  deadLine: Date = null;
  priorite: boolean = false;

  newTask : Tache;

  constructor() { }

  ngOnInit() {
  }

  insertTask(){
    const item = new Tache();
    item.nom = this.nom;
    item.deadLine = this.deadLine;
    item.priorite = this.priorite;
    this.insert.emit(item);

    this.nom = '';
    this.deadLine = null;
    this.priorite = null;

  }

}
