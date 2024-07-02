import { citizen } from "./citizen.model";

export class mayor extends citizen {
    constructor(
        name: string,
        rol: string,
        age: string,
        genero: string,
        family: boolean,
        ofthecity: string,
        public yearsincharge: string,
        public charge: string
    ) {
        super(name, rol, age, genero, family,ofthecity)
    }
    initHistory(): string {
        return `Una mañana tranquila en ${this.ofthecity} se ve interrumpida por un temblor seguido de un rugido ensordecedor. 
        Godzilla ha emergido de las aguas del Golfo de ${this.ofthecity} y comienza a avanzar hacia la ciudad. ${this.name}, 
        el ${this.charge}, convoca a una reunión de emergencia en el ayuntamiento.`;
      }
  }