(()=>{

    //UNA PROMESA NO ES UNA SENTENCIA BLOQUEANTE
console.log('inicio');

//LA FUNCION PROMISE DEBE DE LLEVAR 2 ARGUMENTOS (RESOLVE, REJECT)
const Promesa = new Promise((resolve, reject) => {
    setTimeout(() => {
        reject('Todo salio bien en la promesa');
    }, 1000);
});

//AL EJECUTAR LA PROMESA RECIBE DOS METODOS .THEN O .CACH
Promesa
        .then(menssage => console.log(menssage)) //Empieza a ejecutar el resolve
        .catch(error => console.warn(error));      // Si existe un error de parte de la promesa 

console.log('Fin');
})()