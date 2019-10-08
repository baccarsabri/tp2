import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-slim',
  templateUrl: './slim.component.html',
  styleUrls: ['./slim.component.css']
})
export class SlimComponent implements OnInit {
  nom:string="Adam";
  age=21;
  contenu:string="";
   onAfficherContenu(val:string)
 { console.log(val); }
 infos()
{ return this.nom +" a pour âge " + this.age; }
 onAfficher()
 { console.log(this.nom); }
 onKeyUp(event:KeyboardEvent)
 { 
   this.contenu = 'Bonjour '+(<HTMLInputElement>event.target).value; }
 actif:boolean=true;
 
  constructor() { }

  ngOnInit() {
  }

}
