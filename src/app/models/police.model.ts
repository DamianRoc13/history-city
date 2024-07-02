import { citizen } from "./citizen.model";

export class police extends citizen {
    constructor(
        name: string,
        rol: string,
        age: string,
        genero: string,
        family: boolean,
        ofthecity: string,
        public range: string,
        public asset: boolean
    ) {
        super(name, rol, age, genero, family, ofthecity)
    }
  }