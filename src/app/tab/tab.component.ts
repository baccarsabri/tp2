import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tab',
  templateUrl: './tab.component.html',
  styleUrls: ['./tab.component.css']
})
export class TABComponent implements OnInit {
titre:string="Opérations sur un tableau";
tab=[41,18,23,58];

may()
{
var moy=0;



  for (let i=0;i<this.tab.length;i++)
  {
    moy=moy+this.tab[i];
  }
  moy=moy/this.tab.length;
  return moy;
}
min() {
  var mn=this.tab[0];
for (let x of this.tab)
  {
if (mn>x){
  mn=x;
}
  }
  return mn;
}


  constructor() { }

  ngOnInit() {
  }

}
