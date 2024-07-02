export class citizen {
    constructor(
      public name: string,
      public rol: string,
      public age: string,
      public genero: string,
      public family: boolean,
      public ofthecity: string
    ) {
      
    }
    
    introText(): string {
      return `${this.ofthecity}, una ciudad vibrante y llena de vida, enfrenta una amenaza sin precedentes: 
      Godzilla, el monstruo gigante, ha surgido del océano y se dirige hacia la ciudad. 
      Todos los ciudadanos deben unirse para salvar su hogar.`;
    }
    des2(): string {
      return ` preparan los hospitales para recibir a los heridos.`
    }

    des3(): string {
      return ` organizan la evacuación y la seguridad de los ciudadanos.`
    }
    des4(): string {
      return ` están listos para responder a cualquier incendio causado por el monstruo.`
    }
    des5(): string {
      return ` aumentan sus esfuerzos para mantener la ciudad conectada.`
    }
    des6(): string {
      return ` también se unen a los esfuerzos de socorro. Mientras tanto`
    }
    des7(): string {
      return ` ${this.name}, un ciudadano común conocido por su valentía y astucia, 
      observa la situación y decide que debe hacer algo para salvar su ciudad.`
    }
    end1(): string {
      return `A medida que Godzilla avanza, causando destrucción, los esfuerzos coordinados de los profesionales ayudan a 
      minimizar el daño y salvar vidas. Sin embargo, la amenaza de Godzilla sigue siendo inmensa. 
      ${this.name} se da cuenta de que debe actuar. En una maniobra audaz, Jorgito monta su moto y se dirige hacia Godzilla. 
      Armado con una pistola, esquiva los escombros y las llamas mientras se acerca al monstruo. 
      Con una valentía increíble, apunta y dispara justo en el momento adecuado.
      
      "¡CHUPALOOO!", grita ${this.name} mientras el disparo impacta a Godzilla en un punto vulnerable, derribando al monstruo gigante.
      La ciudad estalla en vítores mientras el monstruo cae, derrotado.`
    }
    end2(): string {
      return `${this.name} y todos los demás ciudadanos celebran y aplauden el heroísmo de Jorgito, 
      quien ha salvado a ${this.ofthecity}.`
    }
  }

 
  