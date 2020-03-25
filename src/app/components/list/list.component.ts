import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { Tache } from 'src/app/models';
import { toUnicode } from 'punycode';
import { temporaryDeclaration } from '@angular/compiler/src/compiler_util/expression_converter';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit, OnChanges {
  @Input() taches = [];

  constructor() { }
  ngOnChanges(changes: import("@angular/core").SimpleChanges): void {
    console.log(changes);
  }

  // taches : Array<Tache> = [];

  ngOnInit() {
    // this.taches.push({nom: "Sport", deadLine: "2020", priorite: false}, {nom: "Coding", deadLine: "2019", priorite: true}, {nom: "Repos", deadLine: "2021", priorite: false});
  }

  executeDeleteTache(item: Tache){
    const index = this.taches.findIndex(t => t.nom == item.nom);
    this.taches.splice(index, 1);
  }

  exChangePrio(item: Tache){
    const task = this.taches.find(t => t.nom == item.nom);
    task.priorite = !task.priorite;
  }

  // insertTask(item:Tache){
  //   const isFound = this.searchForDuplicate(item);
  //   if(!isFound){
  //     this.taches.push(item);
  //   }
  // }

  // private searchForDuplicate(item: Tache): boolean{
  //   const found = this.taches.find((t: Tache)=>t.nom === item.nom);
  //   return found != null;
  // }

}
