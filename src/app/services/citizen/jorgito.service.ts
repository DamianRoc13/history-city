import { Injectable } from '@angular/core';
import { citizen } from '../../models/citizen.model';
import { bazookaHero } from '../../models/citizen.model';

@Injectable({
  providedIn: 'root'
})
export class Citizen {
  private person : citizen;

  constructor() {
    this.person = new citizen(
      'Jorgito El Guayaco',
      'ciudadano normal',
      '25',
      'Hombre',
      true,
      'Guayaquil'
    );
  }

  getPerson(): string {
    return `${this.person.name}`
  }
  
  getRol(): string {
    return `${this.person.rol}`
  }
  
  introText(): string {
    return this.person.introText();
  }
  
  des2(): string {
    return this.person.des2();
  }

  des3(): string {
    return this.person.des3();
  }

  des4(): string {
    return this.person.des4();
  }

  des5(): string {
    return this.person.des5();
  }

  des6(): string {
    return this.person.des6();
  }

  des7(): string {
    return this.person.des7();
  }

  end1(): string {
    return this.person.end1();
  }

  
}

export class BazookaHero {
  private person : bazookaHero;

  constructor() {
    this.person = new bazookaHero(
      'Jorgito El Guayaco',
      'ciudadano normal',
      '25',
      'Hombre',
      true,
      'Guayaquil'
    );
  }

  getPerson(): string {
    return `${this.person.name}`
  }
  
  getRol(): string {
    return `${this.person.rol}`
  }
  
  introText(): string {
    return this.person.introText();
  }
  
  des2(): string {
    return this.person.des2();
  }

  des3(): string {
    return this.person.des3();
  }

  des4(): string {
    return this.person.des4();
  }

  des5(): string {
    return this.person.des5();
  }

  des6(): string {
    return this.person.des6();
  }

  des7(): string {
    return this.person.des7();
  }

  end1(): string {
    return this.person.end1();
  }

  
}

