import { Injectable, EventEmitter } from '@angular/core';
import { Requirement } from './requirement.model';

@Injectable({
  providedIn: 'root'
})
export class RequirementService {

  requirementUpdate = new EventEmitter<Requirement[]>();

  private requirements: Requirement[] = [
    new Requirement("Prikol ._.", "Elder than 12"),
    new Requirement("Cookin'", "2 eggs n 1 sausage ;/"),
    new Requirement("Sasat :)", "Lol"),
    new Requirement("Liapsik", "JS is kall"),
    new Requirement("Andrii wants Oksanochka", "Younger than 13, but elder than 8"),
  ]

  getRequirement(): Requirement[] {
    return this.requirements.slice();
  }

  addNewRequirement(data: Requirement) {
    this.requirements.push(data);
    this.requirementUpdate.emit(this.requirements);
  }

  deleteCurrentRequiremenr() {
    this.requirements.splice(0, 1);
    this.requirementUpdate.emit(this.requirements);
  }

  constructor() { }
}
