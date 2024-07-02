import { citizen } from "./citizen.model";

export class firefighter extends citizen {
    constructor(
        name: string,
        rol: string,
        age: string,
        genero: string,
        family: boolean,
        ofthecity: string,
        public range: string,
        public firstAid: boolean
    ) {
        super(name, rol, age, genero, family, ofthecity)
    }
  }