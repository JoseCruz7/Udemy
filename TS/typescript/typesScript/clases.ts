(()=>{
    //Las clases se Debden de iniciar con la palabra reservada class y la primera letra es mayuscula`

/* ------------------------------------ . ----------------------------------- 

    class Avenger{
        name:string;
        team:string;
        realName:string;
        figth: boolean;
        winFigth: number;

        //Se necesitan establecer en el constructuor, funcion que se ejecuta cuando inicia una instancia
        constructor(name: string, team: string, realName: string, figth: boolean, winFigth: number){
            this.name = name;
            this.team = team;
            this.realName = realName;
            this.figth = figth;
            this.winFigth = winFigth;

        }
    }

------------------------------------ . ----------------------------------- */

/* -------------------------------------------------------------------------- */
/*    Creacion de variables he inicializado directamente en el constructor    */
/* -------------------------------------------------------------------------- */

    class Avenger{
        constructor(public name: string,
                    public team: string,
                    public realName: string,
                    public figth: boolean,
                    public winFigth: number
                    ){

        }
    }

    const antman: Avenger = new Avenger();
    
})()