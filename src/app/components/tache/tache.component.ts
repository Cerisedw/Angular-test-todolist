import { Component, OnInit, Input, Output, EventEmitter, OnChanges } from '@angular/core';
import { Tache } from 'src/app/models';

@Component({
  selector: '[app-tache]',
  templateUrl: './tache.component.html',
  styleUrls: ['./tache.component.css']
})
export class TacheComponent implements OnInit, OnChanges {
  @Input() tache: Array<Tache>;
  @Output() delete: EventEmitter<Tache> = new EventEmitter<Tache>();
  @Output() changePrio: EventEmitter<Tache> = new EventEmitter<Tache>();


  constructor() { }

  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    if (changes.data && this.tache.length != changes.data.currentValue.length) {
      this.tache = (changes.data.currentValue) as Array<Tache>;
    }
  }

  ngOnInit() {
  }

  updateTache(item:Tache){
    console.log(item);
    item.nom = "UpdateNom";
  }

  deleteTache(item:Tache){
    this.delete.emit(item);
  }

  changePriorite(item:Tache){
    this.changePrio.emit(item);
  }



}
