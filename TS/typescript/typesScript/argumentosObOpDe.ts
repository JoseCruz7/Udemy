// ARGUMENTO DE UNA FUNCION DE FORMA OBLIGATORIA
//LOS NORMAL DE OS ARGUMENTOS ES QUE SE DECLAREN
/*
- OBLIGATORIOOS
- OPCIONALES
- DEFAULT
*/

function active(
    who: string,
    moment?: string,
    object: string = 'Batiseñal') {
    if (moment) {
        console.log(`${who} active the ${object} the time ${moment}`)
    }else{
        console.log(`${who} active the ${object}`)
    }
}

active('Gordon', 'late');