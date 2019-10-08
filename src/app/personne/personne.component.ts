import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-personne',
  templateUrl: './personne.component.html',
  styleUrls: ['./personne.component.css']
})
export class PersonneComponent implements OnInit {
actif:boolean=true;
age=15;
nom="mahdi";
act(){
if(this.age<18){
  this.actif=false;
}
}
  constructor() { }

  ngOnInit() {
  }

}
