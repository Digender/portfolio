import { Component, OnInit } from '@angular/core';
import { UtilService } from '../shared/services/util.service';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  yearsOfExperience: string = '6+';
  constructor(private utilService: UtilService) { }

  ngOnInit() {
    this.yearsOfExperience = this.utilService.getExperienceYears();
  }
}
