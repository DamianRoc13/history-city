import { citizen } from "./citizen.model";

export class nurse extends citizen {
    constructor(
        name: string,
        rol: string,
        age: string,
        genero: string,
        family: boolean,
        ofthecity: string,
        public experienceYears: string,
        public specialty: string
    ) {
        super(name, rol, age, genero, family, ofthecity)
    }
  }