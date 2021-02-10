(()=>{

    //La interface se realiza para crear un tipo de typado por ejemplo colocar la regla para establer
    interface xmenPerson{
        name:String,
        year:Number,
        power?:String //Atributo opcional
    }
    

    const goMision = (xmen:xmenPerson) =>{
        console.log(`Enviando a ${xmen.name} a la mision`);
    }

    const wolverine ={
        name: 'Logan',
        year: 60,
    }

    goMision(wolverine);

})()