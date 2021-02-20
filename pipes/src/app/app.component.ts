import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  nombre:String = 'Capitan América';
  nombreCustom:string = 'JosE ElIAs CruZ';
  arreglo:number[]=[1,2,3,4,5,6,7,8,9];
  PI:Number = Math.PI;
  porcentaje: number = 0.234;
  salario:number = 1234.76;
  fecha:Date = new Date();  
  idioma:string = 'es';
  contrasena:string= 'Jose Cruz Perez';
  key:boolean = false;

  video:string = 'https://www.youtube.com/embed/z_OZuykJYbY';

  valorPrometa = new Promise<string>((resolve)=>{
    setTimeout(()=>{
      resolve('Llego la data')
    }, 4500);
  })

  heroe ={
    nombre:'logan',
    clave:'Wolvorine',
    edad:500,
    direccion: {
      calle: 'primera',
      casa: 20
    }
  }

}
