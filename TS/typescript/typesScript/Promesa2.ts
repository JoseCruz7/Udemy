(() => {
    /*debo realizar una funcion para retirar dinero validando el valor actual  
    retornando un promesa de tipo number*/

    //La funcion solicita un parametro money que es de tipo number y retornara una promesa tipo string
    const getMoney = (money: number): Promise<string> => {

        let moneyActually:number = 1000;

        return new Promise((resolve, reject) => {
            if (money > moneyActually) {
                reject('Error en la solucion')
            } else {
                moneyActually -= money
                resolve(`money required: ${money} \n and money git you: ${money} \n Your money in the bank is: ${moneyActually}`)
            }
        })
    }


    //Se ejecuta la promesa indicancon con el then lo que responde el resolve y en el catch retorna lo de reject
getMoney(500).then(moneyInBanck => console.log(moneyInBanck)).catch(console.warn);

})()
