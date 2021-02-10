(() => {
    const avenger={
        name: 'steve',
        key: 'Capitan America',
        power: 'Fuerza'
    }

    //REALIZAREMOS LA DESRTUCION DEL OBJETO CREANDO VARIABLES DE INMEDIATO
    const {name,key,power} = avenger;
    console.log(`${name} \n ${ key} \n ${power} `)

    //EXTRAER ARGUMENTOS DE UN OBJETO DENTRO DE UNA VARIABLE DE FLECHA
    const extract = ({name, key, power}:any) =>{
        console.log(`${name} \n ${ key} \n ${power} `)
    }

    //extract(avenger);

    /*PARA LA DES ESTRUCTURACION DE UN ARREGLO SE REALIZA CON LOS [] Y SE ESTABLE NOMBRE 
    EN CADA POSICION PORE EJEMPLO CONST [1,2,3] [,,3] PUEDE SER CUALQUIER NOVMBRE PERO APUNTARAN
    A LA POSICION DEL ARREGO QUE SE ESTA APUNTANDO [UNOO, DOS, TRES]*/

})()