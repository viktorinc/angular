import { Component, OnInit } from '@angular/core';
import { Requirement } from "./requirement.model";
import { RequirementService } from './requirement.service';

@Component({
  selector: 'app-requirements',
  templateUrl: './requirements.component.html',
  styleUrls: ['./requirements.component.css']
})
export class RequirementsComponent implements OnInit {

  constructor(private requirementService:RequirementService) { }
  requirements: Requirement[];

  ngOnInit(): void {
    this.requirements = this.requirementService.getRequirement();
    this.requirementService.requirementUpdate.subscribe((requirements: Requirement[])=>{
      this.requirements = requirements;
    });
  }

}
