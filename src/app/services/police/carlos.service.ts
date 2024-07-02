import { Injectable } from '@angular/core';
import { police } from '../../models/police.model';

@Injectable({
  providedIn: 'root'
})
export class PoliceCarlos {
  private person : police;

  constructor() {
    this.person = new police(
      'Carlos',
      'policia',
      '55',
      'Hombre',
      true,
      'Guayaquil',
      'Sargento',
      true
    );
  }
  getPerson(): string {
    return `${this.person.name}`
  }
  
  getRol(): string {
    return `${this.person.rol}`
  }
}