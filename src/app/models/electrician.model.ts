import { citizen } from "./citizen.model";

export class electrician extends citizen {
    constructor(
        name: string,
        rol: string,
        age: string,
        genero: string,
        family: boolean,
        ofthecity: string,
        public charge: string,
        public formation: string
    ) {
        super(name, rol, age, genero, family, ofthecity)
    }

    des1(){
        return `${this.name} electricista, trabaja frenéticamente para asegurar que la ciudad
         tenga electricidad y comunicación.`;
}
}