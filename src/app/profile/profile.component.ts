import { Component, OnInit } from '@angular/core';
import { UtilService } from '../shared/services/util.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  yearsOfExperience: string = '6+';
  constructor(private utilService: UtilService) { }

  ngOnInit(): void {
    this.yearsOfExperience = this.utilService.getExperienceYears();
  }

}
