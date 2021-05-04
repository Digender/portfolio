import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilService {

  constructor() { }

  public getExperienceYears(): string {
    const currDate = new Date();
    const currentYear = currDate.getFullYear();
    const month = currDate.getMonth() + 1;
    return `${(currentYear - 2015)}.${month}`;
  }
}
