//FUNCIONES DE FLECHA QUE SE COLOCO EN LA ESTRUCTURA ES6

let Myfuntion = function (a:string ){

}

const myarrow = (b:string) => b.toUpperCase();
console.log(myarrow('Hola'));

const SumTwoNumber = (Arg1:number,Arg2:number) =>Arg1 + Arg2;
console.log(SumTwoNumber(2,1)); 

const thisFuntion = {
    name:'Ironman',
    menssage(){
        setTimeout(()=>{
            console.log(`Poder del personaje ${this.name} dinero`)
        },1000)
    }
}

thisFuntion.menssage();