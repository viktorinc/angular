import { Component, OnInit } from '@angular/core';
import { RequirementService } from '../requirement.service';
import { Requirement } from '../requirement.model';

@Component({
  selector: 'app-add-reqirement',
  templateUrl: './add-reqirement.component.html',
  styleUrls: ['./add-reqirement.component.css']
})
export class AddReqirementComponent implements OnInit {

  constructor(private requirementService: RequirementService) { }
  
  ReqName: string;
  ReqDescription: string;

  ngOnInit(): void {
  }

  addRequirement() {
    this.requirementService.addNewRequirement(new Requirement(this.ReqName, this.ReqDescription));
  }

}
