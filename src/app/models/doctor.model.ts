import { citizen } from "./citizen.model";

export class doctor extends citizen {
    constructor(
        name: string,
        rol: string,
        age: string,
        genero: string,
        family: boolean,
        ofthecity: string,
        public hospitalwork: string,
        public speciality: string
    ) {
        super(name, rol, age, genero, family, ofthecity)
    }
  }