import { Component, OnInit, Input } from '@angular/core';
import { Requirement } from '../requirement.model';
import { RequirementService } from '../requirement.service';

@Component({
  selector: 'app-requirement-item',
  templateUrl: './requirement-item.component.html',
  styleUrls: ['./requirement-item.component.css']
})
export class RequirementItemComponent implements OnInit {

  @Input() requirement: Requirement;

  constructor(private requirementService: RequirementService) { }

  ngOnInit(): void {
  }

  deleteRequirement() {
    this.requirementService.deleteCurrentRequiremenr();
  }

}
