import { Injectable } from '@angular/core';
import { police } from '../../models/police.model';

@Injectable({
  providedIn: 'root'
})
export class PoliceJose {
  private person : police;

  constructor() {
    this.person = new police(
      'Jose',
      'policia',
      '33',
      'Hombre',
      true,
      'Guayaquil',
      'Official',
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