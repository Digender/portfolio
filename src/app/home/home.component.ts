import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  welcomeMsg = this.transformText(`Hi I\'m Digender R. Mahara`);
  professionMsg = this.transformText('Full Stack Node JS Developer');
  welcome = '';
  profession = '';
  constructor() { }

  ngOnInit() {
    this.animateText();
  }

  transformText(text: string) {
    const len = text.length;
    const transformedText = [];
    for (let t = 0; t < len; t++) {
      transformedText.push(text.charAt(t));
    }
    return transformedText;
  }

  animateText() {
    let count1 = 0;
    let count2 = 0;
    let interval1: any = setInterval(() => {
      this.welcome = `${this.welcome}${this.welcomeMsg[count1]}`;
      count1++;
      if (interval1 && count1 === this.welcomeMsg.length) {
        clearInterval(interval1);
        interval1 = null;
      }
    }, 200);

    let interval2: any = setInterval(() => {
      if (!interval1 && interval2) {
        this.profession = `${this.profession}${this.professionMsg[count2]}`;
        count2++;
        if (interval2 && count2 === this.professionMsg.length) {
          clearInterval(interval2);
          interval2 = null;
        }
      }
    }, 150);
  }
}
