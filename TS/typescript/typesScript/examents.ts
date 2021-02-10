(()=>{

    // Uso de Let y Const
    let nombre:string = 'Ricardo Tapia';
    let edad:Number = 23;
  
    const PERSONAJE = {
      nombre: nombre,
      edad: edad
    };
  


  interface superHeroe{
    nombre:string;
    artesMarciales:string[];
  }
    // Cree una interfaz que sirva para validar el siguiente objeto
    var batman:superHeroe = {
      nombre: 'Bruno Díaz',
      artesMarciales: ['Karate','Aikido','Wing Chun','Jiu-Jitsu']
    }
  
    const resultadoDobleFlecha = (a1:number,b1:number):number =>( a1 + b1 ) * 2;
    // Convertir esta funcion a una funcion de flecha
    //function resultadoDoble( a, b ){
    //  return (a + b) * 2
    //}
  
    const result = (name:string, power?:string, gun:string = 'arco') =>{
      let menssage:string;
      if(power){
        menssage = `${name} have the power of: ${power} and your gun is: ${gun} `
      }else{
        menssage = `${name} have the power of: ${gun}`
      }
    }
    // Función con parametros obligatorios, opcionales y por defecto
    // donde NOMBRE = obligatorio
    //       PODER  = opcional
    //       ARMA   = por defecto = 'arco'
    //function getAvenger( nombre, poder, arma ){
    //  var mensaje;
    //  if( poder ){
    //    mensaje = nombre + ' tiene el poder de: ' + poder + ' y un arma: ' + arma;
    //  }else{
    //    mensaje = nombre + ' tiene un ' + arma
    //  }
    //};
  
    // Cree una clase que permita manejar la siguiente estructura
    // La clase se debe de llamar rectangulo,
    // debe de tener dos propiedades:
    //   * base
    //   * altura
    // También un método que calcule el área  =  base * altura,
    // ese método debe de retornar un numero.
  
    class Rectangulo{

      constructor(){
      };

      calc(base:number, higth:number):number{
        let result:number;
        result =  base * higth;
        return result;
      }

      }
  
      const obj = new Rectangulo();
      console.log(obj.calc(4,4));
  
  })();