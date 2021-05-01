import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.scss']
})
export class CvComponent implements OnInit {

  yearsOfExperience: string = '0';
  constructor() { }

  ngOnInit() {
    const currDate = new Date();
    const currentYear = currDate.getFullYear();
    const month = currDate.getMonth() + 1;
    this.yearsOfExperience = `${(currentYear - 2015)}.${month}`;
  }
}
