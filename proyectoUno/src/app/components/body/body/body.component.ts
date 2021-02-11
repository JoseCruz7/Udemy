import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.css']
})
export class BodyComponent implements OnInit {

  Pruebas:boolean = false;
  personArray:string[]= ['Prueba 1','Prueba 2','Prueba 3'];

  constructor() { }

  ngOnInit(): void {
  }

}
